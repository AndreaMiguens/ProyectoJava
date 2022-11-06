function limpiar(params) {
    document.createProcessingInstruction('miFormulario').reset();
}
function sumar(params) {
    var x = parseInt(document.getElementById('valor1').value);
    var y = parseInt(document.getElementById('valor2').value);
    document.getElementById('elResultado').innerHTML = x+y;
    
}
function restar(params) {
    var x = parseInt(document.getElementById('valor1').value);
    var y = parseInt(document.getElementById('valor2').value);
    document.getElementById('elResultado').innerHTML = x-y;
    
}
function multiplicar(params) {
    var x = parseInt(document.getElementById('valor1').value);
    var y = parseInt(document.getElementById('valor2').value);
    document.getElementById('elResultado').innerHTML = x*y;
    
}
function dividir(params) {
    var x = parseInt(document.getElementById('valor1').value);
    var y = parseInt(document.getElementById('valor2').value);
    document.getElementById('elResultado').innerHTML = x/y;
    
}