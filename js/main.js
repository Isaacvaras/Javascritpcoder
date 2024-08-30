const main = document.getElementById("container");


let Reserva;

if(localStorage.getItem("Reserva")){
    Reserva = JSON.parse(localStorage.getItem("Reserva"));
} else {
    Reserva = [];
};

Habitacion.forEach(el => CrearCard(el));

function agregarAlCarrito(Habitacion){


    if(Reserva.some(el => el.id === Habitacion.id)){
        const HabitacionesIndex = Reserva.findIndex(el => el.id === Habitacion.id);
        Reserva[HabitacionesIndex].cantidad += 1;

    } else {
        const nuevaReserva = {
            id: Habitacion.id,
            nombre: Habitacion.nombre,
            precio: Habitacion.precio,
            imagen: Habitacion.imagen,
            cantidad: 1
        };
        Reserva.push(nuevaReserva);
    }
    localStorage.setItem("Reserva", JSON.stringify(Reserva));
    SeAgregoAlCarrito(Habitacion.nombre)

}
function SeAgregoAlCarrito(nombre){
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Tu Reserva de " + nombre + " fue confirmada",
        showConfirmButton: false,
        timer: 1500
      });
}

function CrearCard(Habitacion){
    
    const card = document.createElement("div");
    card.className = "card";
    const Nombre = document.createElement("h3");
    Nombre.innerText = Habitacion.nombre;
    const Precio = document.createElement("p")
    Precio.innerText = Habitacion.precio;
    const Imagen = document.createElement("img")
    Imagen.className = "Imagencard";
    Imagen.src = Habitacion.imagen;
    const boton = document.createElement("button");
    boton.innerText = "Reservar";
    boton.onclick = () => agregarAlCarrito(Habitacion);
    

    card.append(Nombre);
    card.append(Precio);
    card.append(Imagen);
    card.append(boton)
    main.append(card);
    
};

const botonMostrar = document.createElement("button");
botonMostrar.innerText = "Mostrar Reserva";
botonMostrar.className = "Boton"
botonMostrar.addEventListener("click", () => {
    MostrarReserva()
});

main.append(botonMostrar);

function MostrarReserva(){
    Swal.fire({
        title: "Reservas Confirmadas",
        html: Reserva,
        icon: "info",
        confirmButtonText: "Correcto"
    });
}



const botonLimpiar = document.createElement("button");
botonLimpiar.className = "Boton"
botonLimpiar.innerText = "Cancelar Reservas";
botonLimpiar.addEventListener("click", () => {
    Presionarlimmpiar()
});


function Presionarlimmpiar () {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          Reserva = [];
          localStorage.setItem("Reserva", JSON.stringify(Reserva))
        }
      });
    
}
main.append(botonLimpiar);

const botonLimpiar1 = document.createElement("button");
botonLimpiar1.className = "Boton"
botonLimpiar1.innerText = "Eliminar Ultima Reserva";
botonLimpiar1.addEventListener("click", () => {
    PresionarLimpiar1()
});
function PresionarLimpiar1(){
    Swal.fire({
        title: "Ultima Reserva Borrada",
        text: "Satisfactoriamente",
        icon: "success"
      });
    Reserva.shift();
    localStorage.setItem("Reserva", JSON.stringify(Reserva))
}

main.append(botonLimpiar1);
  
   



