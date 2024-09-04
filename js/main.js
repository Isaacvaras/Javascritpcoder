const main = document.getElementById("main");
const listaPersonajes = document.getElementById("listaPersonajes");
let URLimg = "https://rickandmortyapi.com/api/character/avatar/";

fetch("https://rickandmortyapi.com/api/character")
.then(response => response.json())
.then(data => {
    const arrayRickymorty = data.results;
    arrayRickymorty.forEach((el) =>
    CrearCard(el) );
})
let Eliminados;
if(localStorage.getItem("Eliminados")){
    Eliminados = JSON.parse(localStorage.getItem("Eliminados"))
} else{
    Eliminados = [];
}



function CrearCard(Personaje){
    const Personajescard = document.createElement("div")
    Personajescard.className = "Personajes"
    listaPersonajes.append(Personajescard)

    const PersonajeImagen = document.createElement("div")
    PersonajeImagen.className = "personaje-imagen"
    const Imagencard = document.createElement("img")
    Imagencard.src =  URLimg + Personaje.id + ".jpeg";
    Personajescard.append(PersonajeImagen)
    PersonajeImagen.append(Imagencard)

    const PersonajeInfo = document.createElement("div")
    PersonajeInfo.className = "personaje-info"
    Personajescard.append(PersonajeInfo)

    const PersonajeStatus = document.createElement("div")
    PersonajeStatus.className = "personaje-status"
    PersonajeStatus.innerText = Personaje.status
    Personajescard.append(PersonajeStatus)

    const PersonajeLocation = document.createElement("div")
    PersonajeLocation.className = "personaje-location"
    Personajescard.append(PersonajeLocation)
    
    const NombreContenedor = document.createElement("div")
    NombreContenedor.className = "nombre-contenedor"
    PersonajeInfo.append(NombreContenedor)

    const personajeid = document.createElement("p")
    personajeid.className = "Personaje-id"
    personajeid.innerText = Personaje.id
    const personajeNombre = document.createElement("h2")
    personajeNombre.className = "Personaje-nombre"
    personajeNombre.innerText = Personaje.name
    NombreContenedor.append(personajeid,personajeNombre)


    const boton = document.createElement("button");
    boton.innerText = "Eliminar";
    boton.className = "btn-eliminar"
    boton.onclick = () => Eliminacion(Personaje);
    Personajescard.append(boton)
    
    const botonMostrar = document.getElementById("BotonMostrar");
    botonMostrar.addEventListener("click", () =>{
    MostrarEliminados(Personaje)})
    const botoneliminartodo = document.getElementById("BotonEliminar");
    botoneliminartodo.addEventListener("click", () => {
    Eliminartodo()})
}

   

function Eliminartodo(){
        Swal.fire({
            title: "Estas seguro?",
            text: "No hay vuelta atras!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Revivelos"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Revivaaaaan",
                text: "Reviviste a los Eliminados.",
                icon: "success"
              });
              Eliminados = [];
              localStorage.setItem("Eliminados", JSON.stringify(Eliminados))
            }
          });  
    }

function Eliminacion(Personaje){
    if(Eliminados.some(el => el.id === Personaje.id)){
        Swal.fire({
            position: "top-end",
            icon: "info",
            title:  Personaje.name + " Ya no esta con nosotros 😢",
            showConfirmButton: false,
            timer: 1500
          });
    }else {
        const eliminar = {
            id: Personaje.id,
            name: Personaje.name,
            status: "Dead",
            imagen: URLimg + Personaje.id + ".jpeg",
        };
        Eliminados.push(eliminar)
        localStorage.setItem("Personaje", JSON.stringify(Personaje));
        SeAgregoFantasma(Personaje)
    }
    
}

function SeAgregoFantasma (Personaje){
    if(Personaje.status == "Dead"){
        Swal.fire({
            position: "top-end",
            icon: "error",
            title:  Personaje.name + "Dejalo ya esta muerto",
            showConfirmButton: false,
            timer: 1500
          });
    }
    else{
        Swal.fire({
            position: "top-end",
            icon: "success",
            title:  Personaje.name + " fue eliminado",
            showConfirmButton: false,
            timer: 1500
          });
    }
}


function MostrarEliminados(Personaje){
    Swal.fire({
        title: "Personajes Eliminados",
        text: Mensaje(Eliminados,Personaje),
        icon: "success"
      });
}

function Mensaje(Personaje){
    let personajeEliminado = "Eliminaste a:"
    Personaje.forEach((Personaje) => {
        personajeEliminado += ` ${Personaje.name} - \n`
    })
    return personajeEliminado

}



  
   



