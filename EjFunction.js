function saludo(nombre)
{
    alert("Bienvenido " + nombre);
}
var nombreIngresado = prompt("Ingrese su nombre");

if(nombreIngresado != '') {
    saludo(nombreIngresado);
}else {
    alert("Ingrese su nombre");
}


