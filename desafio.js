const jugadorUno = {
    nombre: "Marce",
    habilidades: {
      ataque: 70,
      velocidad: 30,
      vida: 60,
      magia: 120,
    },
    articulos: ["espada", "escudo", "varita"],
  };
  
  const jugadorDos = {
    nombre: "Flor",
    habilidades: {
      ataque: 73,
      velocidad: 30,
      vida: 80,
      magia: 100,
    },
    articulos: ["escudo", "varita", "capa", "pocion"],
  };

  //PUNTOS INICIALES DEL JUEGO:
//Estas variables servirán para almacenar los puntos ganados por cada jugador.
//Cada vez que un jugador gana en una habilidad determinada se deberá
//sumar 1 punto en el contador correspondiente:
var contadorPuntosJug1 = 0;
var contadorPuntosJug2 = 0;
var ganador =0;
var empataron = 0;

//Ganador:
var ganador;
//COMPARACIÓN POR PODER DE ATAQUE

//La indicación ++ luego de la variable contadorPuntosJug suma 1 punto al
//contador. Según la condición que se cumpla, se irán sumando los puntos.

//EJEMPLO ESTRUCTURA DE COMPARACIÓN
if (jugadorUno.habilidades.ataque > jugadorDos.habilidades.ataque) {
    contadorPuntosJug1 = contadorPuntosJug2 +1;
    console.log("EL GANADOR DE ESTA RONDA EN ATAQUE ES: " + jugadorUno.nombre);
  } else if(jugadorUno.habilidades.ataque<jugadorDos.habilidades.ataque) {
    contadorPuntosJug2++;
    console.log( "EL GANADOR DE ESTA RONDA EN ATAQUE ES: " + jugadorDos.nombre );
  } else {
    contadorPuntosJug1++;
    contadorPuntosJug2++;
    console.log("EMPATEEE AMBOS SUMAN PUNTOS: " + jugadorUno.nombre +" Y "+jugadorDos.nombre);
  }if(jugadorUno.habilidades.ataque < jugadorDos.habilidades.ataque){
    console.log("EL JUGADOR PERDEDOR ES: " + jugadorUno.nombre)
  }else if(jugadorUno.habilidades.ataque > jugadorDos.habilidades.ataque){
    console.log("EL JUGADOR PERDEDOR ES: " + jugadorDos.nombre)
}
  var resultado = {
    [jugadorUno.nombre]: contadorPuntosJug1,
    [jugadorDos.nombre]: contadorPuntosJug2,
     }
     console.log(resultado);
// (Escribir debajo el código que te permita generar esta comparación)

//-----------------------------------------------------------------------//

//COMPARACIÓN POR VELOCIDAD:
//(Escribir debajo el código que te permita generar esta comparación)
if (jugadorUno.habilidades.velocidad > jugadorDos.habilidades.velocidad) {
    contadorPuntosJug1 = contadorPuntosJug1 +1;
    console.log("EL GANADOR DE ESTA RONDA EN VELOCIDAD ES: " + jugadorUno.nombre);
  } else if(jugadorUno.habilidades.velocidad<jugadorDos.habilidades.velocidad) {
    contadorPuntosJug2++;
    console.log("EL GANADOR DE ESTA RONDA EN VELOCIDAD ES: " + jugadorDos.nombre);
  } else {
    contadorPuntosJug1++;
    contadorPuntosJug2++;
    console.log("EMPATEEE AMBOS SUMAN PUNTOS: " + jugadorUno.nombre +" Y "+jugadorDos.nombre);
  }if(jugadorUno.habilidades.velocidad < jugadorDos.habilidades.velocidad){
    console.log("EL JUGADOR PERDEDOR ES: " + jugadorUno.nombre)
  }else if(jugadorUno.habilidades.velocidad > jugadorDos.habilidades.velocidad){
          console.log("EL JUGADOR PERDEDOR ES: " + jugadorDos.nombre)
  }
  var resultado = {
    [jugadorUno.nombre]: contadorPuntosJug1,
    [jugadorDos.nombre]: contadorPuntosJug2,
     }
     console.log(resultado);
//-----------------------------------------------------------------------//

//COMPARACIÓN POR NIVEL DE VIDA:
//(Escribir debajo el código que te permita generar esta comparación)
if (jugadorUno.habilidades.vida > jugadorDos.habilidades.vida) {
    contadorPuntosJug1 = contadorPuntosJug1 +1;
    console.log("EL GANADOR DE ESTA RONDA EN VIDA ES: " + jugadorDos.nombre);
  } else if(jugadorUno.habilidades.vida<jugadorDos.habilidades.vida) {
    contadorPuntosJug2++;
    console.log("EL GANADOR DE ESTA RONDA EN VIDA ES: " + jugadorDos.nombre);
  } else {
    contadorPuntosJug1++;
    contadorPuntosJug2++;
    console.log("EMPATEEE AMBOS SUMAN PUNTOS: " + jugadorUno.nombre +" Y "+jugadorDos.nombre);
  }if(jugadorUno.habilidades.vida < jugadorDos.habilidades.vida){
    console.log("EL JUGADOR PERDEDOR ES: " + jugadorUno.nombre)
  }else if(jugadorUno.habilidades.vida > jugadorDos.habilidades.vida){
    console.log("EL JUGADOR PERDEDOR ES: " + jugadorDos.nombre)
  }
  var resultado = {
    [jugadorUno.nombre]: contadorPuntosJug1,
    [jugadorDos.nombre]: contadorPuntosJug2,
     }
     console.log(resultado);
//-----------------------------------------------------------------------//

//COMPARACIÓN POR MAGIA:
//(Escribir debajo el código que te permita generar esta comparación)
if (jugadorUno.habilidades.magia > jugadorDos.habilidades.magia) {
    contadorPuntosJug1 = contadorPuntosJug1 +1;
    console.log("EL GANADOR DE ESTA RONDA EN MAGIA ES: " + jugadorUno.nombre);
  } else if(jugadorUno.habilidades.magia<jugadorDos.habilidades.magia) {
    contadorPuntosJug2++;
    console.log("EL GANADOR DE ESTA RONDA EN MAGIA ES: " + jugadorDos.nombre);
  } else {
    contadorPuntosJug1++;
    contadorPuntosJug2++;
    console.log("EMPATEEE AMBOS SUMAN PUNTOS: " + jugadorUno.nombre +" Y "+jugadorDos.nombre);
  }if(jugadorUno.habilidades.magia < jugadorDos.habilidades.magia){
    console.log("EL JUGADOR PERDEDOR ES: " + jugadorUno.nombre)
  }else if(jugadorUno.habilidades.magia > jugadorDos.habilidades.magia){
    console.log("EL JUGADOR PERDEDOR ES: " + jugadorDos.nombre)
  }
  var resultado = {
    [jugadorUno.nombre]: contadorPuntosJug1,
    [jugadorDos.nombre]: contadorPuntosJug2,
     }
     console.log(resultado);
//-----------------------------------------------------------------------//

//COMPARACIÓN POR CANTIDAD DE ARTÍCULOS
//(Escribir debajo el código que te permita generar esta comparación)
if (jugadorUno.articulos > jugadorDos.articulos) {
    contadorPuntosJug1 = contadorPuntosJug1 +1;
    console.log("EL GANADOR DE ESTA RONDA EN ARTICULOS ES: " + jugadorUno.nombre);
  } else if(jugadorUno.articulos < jugadorDos.articulos) {
    contadorPuntosJug2++;
    console.log("EL GANADOR DE ESTA RONDA EN ARTICULOS ES: " + jugadorDos.nombre);
  } else {
    contadorPuntosJug1++;
    contadorPuntosJug2++;
    console.log("EMPATEEE AMBOS SUMAN PUNTOS: " + jugadorUno.nombre +" Y "+jugadorDos.nombre);
  }if(jugadorUno.articulos < jugadorDos.articulos){
    console.log("EL JUGADOR PERDEDOR ES: " + jugadorUno.nombre)
  }else if(jugadorUno.articulos > jugadorDos.articulos){
    console.log("EL JUGADOR PERDEDOR ES: " + jugadorDos.nombre)
  }
  var resultado = {
    [jugadorUno.nombre]: contadorPuntosJug1,
    [jugadorDos.nombre]: contadorPuntosJug2,
     }
     console.log(resultado);
//-----------------------------------------------------------------------//
//------------------------------------------------ -----------------------//
if ( contadorPuntosJug1 > contadorPuntosJug2) {
    ganador = jugadorUno.nombre
 } else if( contadorPuntosJug1 < contadorPuntosJug2) {
   ganador = jugadorDos.nombre
 } else if(contadorPuntosJug1 = contadorPuntosJug2){
   empataron = jugadorUno.nombre+" Y "+jugadorDos.nombre;
}
 
   var resultado = { 
   ganador : ganador,
   empataron : empataron,
   [jugadorUno.nombre] : contadorPuntosJug1,
   [jugadorDos.nombre] : contadorPuntosJug2,
   }
 
console.log (resultado);