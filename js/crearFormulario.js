export default function crearFormulario() {
let formulario = document.getElementById("formulario")
formulario.innerHTML = `        
    <div id="informacion" style="justify-content: center; display: flex; column-gap: 24px" >
        <div style = "display: flex;  flex-direction: column; row-gap: 8px;" >
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre" placeholder="Nombre">
        </div>
        <div style = "display: flex;  flex-direction: column; row-gap: 8px;" >
            <label for="apellido">Apellido</label>
            <input type="text" name="" id="apellido" placeholder="Apellido">
        </div>       
    </div>
    <div id="direcciones" style="justify-content: center; display: flex; column-gap: 24px">
        <div style = "display: flex;  flex-direction: column; row-gap: 8px;" >
            <label for="correo">Correo</label>
            <input type="email" placeholder="Correo" id="correo">
        </div>
        <div style = "display: flex;  flex-direction: column; row-gap: 8px;" >
            <label for="direccion">Direccion</label>
            <input type="text" placeholder="Direccion" id="direccion" >
        </div>
        
    </div>
        
    <div style="padding-top: 20px;">
        <h2 style="text-align: center";>Informacion del paquete</h2>
        <div style="display:flex; justify-content: center; column-gap: 12px;">
            <input type="number" name="" id="peso" placeholder="Peso" min="0" >
            <input type="number" name="" id="altura" placeholder="Altura" min="0" >
            <input type="number" name="" id="ancho" placeholder="Ancho" min="0" >
        </div>
    </div>
    <div style="display:flex; justify-content: center; width: 100%;">
        <button class="btn btn-primary" style="width: 150px; height: 35px; border-radius: 12px; border: none; color: white; background-color: red;" id="calcular"> Calcular </button>
    </div>
    <p id="Costo" style="font-weight: 700; font-size: 24px;"></p>

`;
}