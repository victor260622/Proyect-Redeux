import { fetchApi } from "./fetchData.js";
// Creamos una funcion en la cual elimine los elementos de la seccion de "recomendaciones" y luego ejecutamos la funcion fetchApi
function reload (){
    let recomendaciones = document.getElementById("recomendaciones").querySelectorAll("div");
    recomendaciones.forEach((elem) => elem.remove());
    fetchApi()

}
export default reload