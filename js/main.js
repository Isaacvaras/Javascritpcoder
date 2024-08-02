let ReservasGeneradasM = 0;
let ReservasGeneradasD = 0;
let ReservasGeneradasT = 0;
let PrecioTotal = 0;
let PrecioTotalM = 0;
let PrecioTotalD = 0;
let PrecioTotalT = 0;

alert("Bievenido al Hotel Puerto Varas aqui le generare su reserva")

class Reservas {
    constructor(Nombre,precio,Personas){
        this.nombre = Nombre;
        this.precio = precio;
        this.NumeroP = Personas;
    }
}
function Reservaciones(habitacionnombre,habitacionprecio){
    this.nombre = habitacionnombre;
    this.precio = habitacionprecio;
    
}

let salir = true
do {
    let Reserva = confirm("Desea Reservar una habitación?")
    if(Reserva){
        let habitacion = prompt("Que habitacion quieres reservar? \n\ *Ponga el numero de la habitacion que desea reservar \n\ 1.Habitacion Matrimonial....150 soles \n\ 2.Habitacion Doble....200 soles \n\ 3.Habitacion triple....250 soles \n\ 4. Salir")
    if(habitacion == 1){
        i=1
        const reservanueva = new Reservas("Habitacion Matrimonial",150,prompt("Cuantas Personas entraran en esta habitacion?"))
        PrecioTotalM+= 150,
        PrecioTotal+= 150,
        
        alert("Se Reservo Una Habitacion Matrimonial");
        ReservasGeneradasM += 1;
        const nuevasReservacionesM = new Reservaciones("Habitacion Matrimonial",150)
        console.log(nuevasReservacionesM)
        
        
    }
    else if(habitacion == 2){
        const reservanueva = new Reservas("Habitacion Doble",200,prompt("Cuantas Personas entraran en esta habitacion?"))
        PrecioTotalD+= 200
        PrecioTotal+= 200
        
        alert("Se Reservo Una Habitacion Doble");
        ReservasGeneradasD += 1;
        const nuevasReservacionesD = new Reservaciones("Habitacion Doble",200)
        console.log(nuevasReservacionesD)
        
    }
    else if(habitacion == 3){
        const reservanueva = new Reservas("Habitacion Triple",250,prompt("Cuantas Personas entraran en esta habitacion?"))
        PrecioTotalT+= 250
        PrecioTotal+= 250
        
        alert("Se Reservo Una Habitacion Triple");
        ReservasGeneradasT += 1;
        const nuevasReservacionesT = new Reservaciones("Habitacion Triple",250)
        console.log(nuevasReservacionesT)
    }
    else if(habitacion == 4){
    alert("No Se Reservo una Habitacion")
    }
    else {
    Incorrecto()
    }
    }
        else {
            salir = false;
        }

}while(salir)


    descuento = false
    let numerosuerte = prompt("Prueba tu suerte, asi se te dara un Descuento, sino aciertas no te preocupes se te cobara lo normal Escoge un numero del 1 al 5")

    

    const Suerte = Math.ceil(Math.random() * 5);
    intento();

    function intento(){
        if(Suerte == numerosuerte){
            alert("acertaste toma tu descuento del 20%")
            descuento= true
        }
        else{
            alert("Mayor suerte la proxima")
        }
    }


if (descuento){
    alert("Se Reservo "+ ReservasGeneradasM +" Habitaciones Matrimoniales" + " a "+ 150 + "   ....total:   " + PrecioTotalM + "\n\ Se Reservo "+ ReservasGeneradasD +" Habitaciones Dobles" + " a " + 200 + "   ....total:   "  + PrecioTotalD + 
        "\n\ Se Reservo "+ ReservasGeneradasT +" Habitaciones Triples" + " a " + 300 + "   ....total:   "  + PrecioTotalT +"\n\ .....Precio total: " + (PrecioTotal * 0.80))


}
else{

    alert("Se Reservo "+ ReservasGeneradasM +" Habitaciones Matrimoniales" + " a "+ 150 + "   ....total:   " + PrecioTotalM + "\n\ Se Reservo "+ ReservasGeneradasD +" Habitaciones Dobles" + " a " + 200 + "   ....total:   "  + PrecioTotalD + 
    "\n\ Se Reservo "+ ReservasGeneradasT +" Habitaciones Triples" + " a " + 300 + "   ....total:   "  + PrecioTotalT +"\n\ .....Precio total: " + PrecioTotal)
}



function Incorrecto(){
    alert("Alternativa Incorrecta")
}












