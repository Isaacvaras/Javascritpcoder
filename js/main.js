let ReservasGeneradas = 0;
let PrecioTotal = 0
let Salir = 0
alert("Bievenido al Hotel Puerto Varas aqui le generare su reserva \n\ *Recuerde que maximo es 5 habitaciones por persona")
while(ReservasGeneradas < 6 || Salir === 1){
    const opcion = parseInt(prompt("1.Reservar \n\ 2. Salir \n\ Soles Hasta Ahora = " + PrecioTotal))
    if(opcion === 1){
        let habitacion = prompt("Que habitacion quieres reservar? \n\ *Ponga el numero de la habitacion que desea reservar \n\ 1.Habitacion Matrimonial....150 soles \n\ 2.Habitacion Doble....200 soles \n\ 3.Habitacion triple....250 soles \n\ 4. Salir")
        if(habitacion == 1){
            PrecioTotal+= 150
            alert("Se Rerservo Una Habitacion Matrimonial");
            ReservasGeneradas += 1;
        }
        else if(habitacion == 2){
            PrecioTotal+= 200
            alert("Se Rerservo Una Habitacion Doble");
            ReservasGeneradas += 1;
        }
        else if(habitacion == 3){
            PrecioTotal+= 250
            alert("Se Rerservo Una Habitacion Triple");
            ReservasGeneradas += 1;
        }
        else if(habitacion == 4){
        alert("No Se Reservo Una Habitacion")
        }
        else {
        Incorrecto()
        }
    }

    else if(opcion === 2){
        Salir += 1
        Fin();
    }
    else{
        Incorrecto()
    }
}
alert("Maximo eran 5 reservas por persona >:( \n\Pero te considaremos esta reserva por ser cliente frecuente")
Fin();

function Fin(){
    alert("Saliste de las Reservas")
    if(ReservasGeneradas > 5){
    alert("Excedio el maximo de reservas")
    alert("Reservas hechas : " + ReservasGeneradas)
    alert("Precio total = " + PrecioTotal)
    }
else{
    alert("Reservas hechas : " + ReservasGeneradas)
    PrecioTotal = 0
}
};
function Incorrecto(){
    alert("Alternativa Incorrecta")
}
function Incorrecto(){
    alert("Alternativa Incorrecta")
}
function Incorrecto(){
    alert("Alternativa Incorrecta")
}
function Incorrecto(){
    alert("Alternativa Incorrecta")
}

function Incorrecto(){
    alert("Alternativa Incorrecta")
}

function Incorrecto(){
    alert("Alternativa Incorrecta")
}






