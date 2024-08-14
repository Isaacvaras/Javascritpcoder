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
    console.log("Estas son tus Habitaciones",Reserva)
});

main.append(botonMostrar);

const botonLimpiar = document.createElement("button");
botonLimpiar.className = "Boton"
botonLimpiar.innerText = "Cancelar Reservas";
botonLimpiar.addEventListener("click", () => {
    Reserva = [];
    localStorage.setItem("Reserva", JSON.stringify(Reserva))
});

main.append(botonLimpiar);

const botonLimpiar1 = document.createElement("button");
botonLimpiar1.className = "Boton"
botonLimpiar1.innerText = "Eliminar Ultima Reserva";
botonLimpiar1.addEventListener("click", () => {
    Reserva.shift();
    localStorage.setItem("Reserva", JSON.stringify(Reserva))
});

main.append(botonLimpiar1);
  
   



