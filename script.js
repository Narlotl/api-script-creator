document.querySelector('button#go').onclick = function () {
    var output = '';
    var api = document.querySelector('input#api-link').value;
    var name = new Array();
    document.querySelectorAll('input.api-name').forEach(element => {
        name.push(element.value);
    });
    var varGrab = new Array();
    document.querySelectorAll('input.variable-grab').forEach(element => {
        varGrab.push(element.value);
    });
    var css = new Array();
    document.querySelectorAll('input.selector').forEach(element => {
        css.push(element.value);
    });
    output = 'var ' + name[0] + 'Request = new XMLHttpRequest();' + name[0] + 'Request.open(\'GET\',\'' + api + '\',true);';
    name.forEach(nameI => {
        output += 'var ' + nameI + ';'
    });
    output += name[0] + 'Request.onload = function () {<br>';
    varGrab.forEach(grab => {
        output += '<indent></indent>' + name[varGrab.indexOf(grab)] + ' = JSON.parse(this.response)' + grab + ';';
        output += '<indent></indent>document.querySelector(\'' + css[varGrab.indexOf(grab)] + '\').innerHTML = ' + name[varGrab.indexOf(grab)] + ';';
    });
    output += '};' + name[0] + 'Request.send();';
    output = output.replaceAll(';', ';<br>');
    document.querySelector('#result').innerHTML = output;
}
document.querySelector('button#new').onclick = function () {
    document.querySelector('div#inputs').innerHTML += '<br><input class="api-name" placeholder="Name for the variable"><input class="variable-grab" placeholder="Variable extension"><input class="selector" placeholder="Selector for display element">';
};
