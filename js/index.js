import { fetchData } from "./fetchData.js";
import crearFormulario from "./crearFormulario.js";
import reload from "./recargar.js"
import calculate from "./calcular.js"
// buscamos la data estatica en el JSON
fetchData();
// creamos el formulario 
crearFormulario();
// Ejecutamos la funcion calculadora para mostrarnos en pantalla los resultados de dichos calculos 
const $form = document.querySelector("form")
$form.addEventListener('submit', calculate);
// Ejecutamos la funcion reload si esta es llamada
const persona = document.getElementById("reload")
persona.addEventListener('click', reload);
