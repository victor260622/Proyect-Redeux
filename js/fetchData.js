//  Creamos las funciones para hacer fetch a la data, por un JSON estatico y por una API
 
 function fetchData() {
    let recomendaciones = document.getElementById("recomendaciones");
    fetch("../json/data.json")
    .then((res) => res.json())
    .then((data)=> {
        data.forEach((persona)=>{
                const div = document.createElement("div")
                div.innerHTML =`
                <div style="margin-top:20px" id ="personas">
                    <div style="text-align: center; max-width: 600px">
                        <h2>${persona.nombre}</h2>
                        <p>${persona.reseña}</p>
                    </div>
                </div>
                
            ` 
            recomendaciones.append(div);
        })
    })
}
async function fetchApi(){

    await fetch("https://randomuser.me/api/?results=3")
    .then((res) => res.json())
    .then((data)=> data.results.forEach((persona)=> {
        persona.reseña = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ad quidem cumque at eius voluptas! Numquam enim excepturi fugit fuga, unde aliquid deserunt natus repudiandae esse earum, sunt impedit quae!"
        const div = document.createElement("div")
        div.innerHTML =`
        <div style="margin-top:20px; column-gap: 12px; display:flex;" id ="personas">
            <div style="text-align: center; max-width: 600px ">
                <h2>${persona.name.first}${persona.name.last}</h2>
                <p>${persona.reseña}</p>
            </div>
        </div>
        
    ` 
    recomendaciones.append(div);
    }))
}
export { fetchData, fetchApi };