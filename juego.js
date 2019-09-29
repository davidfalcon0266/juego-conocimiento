// var usuario = prompt("como te llamas");




var preguntas = [
        ['¿ En que año murio la cantante ROCIO DURCAL ?', '2006'],
        ['¿ Como se llama el hijo de GOKU', 'gohan'],
        ['¿ Primer nombre del libertador de venezuela', 'simon'],
        ['¿Primer nombre de la esposa de simon bolivar', 'maria'],
        ['¿ que color sale del rojo y verde', 'marron'],
        ['¿ que tipo de musica canta maelo ruiz', 'salsa'],
        ['¿ que pais ha ganado mas copas america', 'uruguay'],
        ['¿ Quien es el burro de venezuela(primer nombre)', 'nicolas'],
        ['¿ cuantos dias tiene un año', '365'],
        ['¿ cuanto es 80 + 50 + 40 - 20 / 3', '50'],
        ['¿ Desde el lunes hasta el viernes, soy la última en llegar, el sábado soy la primera y el domingo a descansar', 's'],
        ['¿ No son flores, pero tienen plantas y olores', 'los pies'],
        ['¿ Cuanto más se moja más te seca. ¿Qué es?', 'la tohalla'],
        ['¿ primer nombre de quién canta corazon de seda', 'ozuna'],
        ['¿ Cuál es el lugar más frío de la tierra', 'la antartida'],
        ['¿ Cuál es el río más largo del mundo', 'amazonas'],
        ['¿ En qué continente está Ecuador', 'america'],
        ['¿ Qué tipo de animal es la ballena', 'mamifero'],
        ['¿ Cuándo acabó la II Guerra Mundial', '1945'],
        ['¿ En qué país se encuentra la torre de Pisa', 'italia'],
        ['¿ Qué son los humanos: omnívoros, herbívoros o carnívoros', 'omnivoros'],
        ['¿ Cómo se denomina el resultado de la multiplicación', 'producto'],
        ['¿ Qué producto cultiva más Guatemala', 'cafe'],
        ['¿ Cuál es el país más grande del mundo', 'rusia'],
        ['¿ Dónde se encuentra la famosa Torre Eiffel', 'francia'],
        ['¿ En qué año comenzó la II Guerra Mundial?', '1939'],
        ['¿ Cuál es la moneda del Reino Unido', 'libra'],
        ['¿ Cual es país más poblado de la Tierra', 'china'],
        ['¿ Cuál es el color que representa la esperanza?', 'verde'],
        ['¿ Cuál es el nombre de la lengua oficial en china', 'madarin'],

    ],
    pregunta, repuesta,
    formuladas = 0,
    acertadas = 0;
var entrada = document.getElementById('dato').value;
var repuestas = [];
var resp = [];

ocultar();

function ocultar() {
    document.getElementById('muestra').style.display = "none";

}

function imgo() {
    document.getElementById('img').style.display = "none";

}

function imga() {
    document.getElementById('img').style.display = "block";

}

function imgo1() {
    document.getElementById('img1').style.display = "none";

}

function imga1() {
    document.getElementById('img1').style.display = "block";

}







function mostrar() {
    document.getElementById('muestra').style.display = "block";

}

function mensajes() {
    document.getElementById('mensaje').style.display = "none";

}

function nuevo() {
    document.getElementById('mensaje').style.display = "block";

}

function comenzar() {
    document.getElementById('principal').style.display = "block";
}

function principal() {
    document.getElementById('principal').style.display = "none";
}

function boton() {
    document.getElementById('boton').style.display = "none";

}

function preguntar() {
    document.getElementById('nuevo').style.display = "none";

}


function pregunta(e) {
    document.getElementById('pregunta').style.display = "none";
    e.preventDefault();
}


function dato(e) {
    document.getElementById('dato').style.display = "none";
    e.preventDefault();
}

function error(e) {
    document.getElementById('error').style.display = "none";

}

function otra() {
    const este = document.getElementById('nuevo').style.display = "block";
    document.getElementById('usuario').value = "";
    todo();
}


function hola() {
    document.getElementById('hola').style.display = "none";

}

function resuelto() {
    document.getElementById('resuelto1').style.display = "none";
    document.getElementById('resuelto2').style.display = "none";
    document.getElementById('resuelto3').style.display = "none";
    document.getElementById('resuelto4').style.display = "none";
    document.getElementById('resuelto5').style.display = "none";


}

function ultimaRes() {
    document.getElementById('respuestaResuelta1').style.display = "none";
    document.getElementById('respuestaResuelta2').style.display = "none";
    document.getElementById('respuestaResuelta3').style.display = "none";
    document.getElementById('respuestaResuelta4').style.display = "none";
    document.getElementById('respuestaResuelta5').style.display = "none";


}




function nueva() {
    var usuario = document.getElementById('usuario').value;

    var hola = document.getElementById('hola');
    hola.innerHTML = `Bienvenido <strong>${usuario}</strong> Comencemos`;

    hazPregunta();
}

function david() {

    const nuevo = document.getElementById('nuevos');
    nuevo.addEventListener('click', function() {
        todo();
    });



}

function todo() {
    document.getElementById('todo').reset();
}
preguntar();

imgo();
imgo1();
resuelto();
ultimaRes();
document.getElementById('jugar').addEventListener('click', function(e) {
    var usuario = document.getElementById('usuario').value;

    if (usuario == "") {

        console.log("introduce usuario")
        var mensaje = document.getElementById('mensaje');
        mensaje.innerHTML = `<div class="alert alert-danger text-center">debes introducir tu nombre </div>`;
        // alert("debes inroducir tu nombre");
    } else {
        nuevo();
        principal();
        mensajes();
        mostrar();

        // var hola = document.getElementById('hola');
        // hola.innerHTML = `Bienvenido ${usuario} Comencemos`
        nueva();

        hazPregunta();
    }
    e.preventDefault();
});
document.getElementById('boton').addEventListener('click', function(e) {
    var error = document.getElementById('error');
    var entrada = document.getElementById('dato').value;

    if (entrada == "") {

        error.innerHTML = `<div class="alert alert-danger"> debes llenar los campos </div>`;
    } else {
        error.style.display = "none";

        if (entrada == repuesta) {
            acertadas++;
        }
        if (formuladas < 6) {
            hazPregunta();


        } else {
            muestraResultado();
        }
    }

    e.preventDefault();
});


function hazPregunta() {
    var e;
    e = preguntas.splice(numAleatorio(0, preguntas.length - 1), 1);
    pregunta = e[0][0];
    repuesta = e[0][1];

    resp.push(pregunta);
    console.log(resp);

    repuestas.push(repuesta);
    console.log(repuestas);

    function asies() {

        var resuelto = document.getElementById('resuelto');
        var res = document.getElementById('respuestaResuelta');

        for (var i = 0; i < resp.length && i < repuestas.length; i++) {
            // resuelto.innerHTML = `<div class="alert alert-info">${resp[i]}</div>`;
            // document.querySelector("#resuelto0").innerHTML = `<div class="alert alert-info"> ${JSON.stringify(resp[0])} </div>`;


            document.querySelector("#resuelto1").innerHTML = `<div class="alert alert-info"> ${JSON.stringify(resp[1])} </div>`;
            document.querySelector("#respuestaResuelta1").innerHTML = `<div class="alert alert-danger text-center"> ${JSON.stringify(repuestas[1])} </div> </br>`;

            document.querySelector("#resuelto2").innerHTML = `<div class="alert alert-info"> ${JSON.stringify(resp[2])} </div>`;
            document.querySelector("#respuestaResuelta2").innerHTML = `<div class="alert alert-danger text-center"> ${JSON.stringify(repuestas[2])} </div> </br>`;

            document.querySelector("#resuelto3").innerHTML = `<div class="alert alert-info"> ${JSON.stringify(resp[3])} </div>`;
            document.querySelector("#respuestaResuelta3").innerHTML = `<div class="alert alert-danger text-center"> ${JSON.stringify(repuestas[3])} </div> </br>`;

            document.querySelector("#resuelto4").innerHTML = `<div class="alert alert-info"> ${JSON.stringify(resp[4])} </div>`;
            document.querySelector("#respuestaResuelta4").innerHTML = `<div class="alert alert-danger text-center"> ${JSON.stringify(repuestas[4])} </div> </br>`;

            document.querySelector("#resuelto5").innerHTML = `<div class="alert alert-info"> ${JSON.stringify(resp[5])} </div>`;
            document.querySelector("#respuestaResuelta5").innerHTML = `<div class="alert alert-danger text-center"> ${JSON.stringify(repuestas[5])} </div> </br>`;



        }

    }

    asies();


    document.getElementById('pregunta').innerHTML = pregunta;
    document.getElementById('dato').value = "";
    formuladas++;


}


function muestraResultado() {
    var img = document.getElementById('img');

    if (acertadas == 0) {
        var total = `<div class="alert alert-info">Uy Estamos mal no asertamos ni 1 de 5 </div>`;
        imga();

    }
    if (acertadas == 1) {
        var total = `<div class="alert alert-info"> Lo siento solo asertaste 1</div>`;
        imga();

    }
    if (acertadas == 2) {
        var total = `<div class="alert alert-info">Xd que mal solo asertaste 2 de 5</div>`;
        // img.innerHTML = `<img src="/img/triste.png">`;
        imga();
    }
    if (acertadas == 3) {
        var total = `<div class="alert alert-info">Hay vamos asertaste 3 de 5</div>`;
        imga1();
    }
    if (acertadas == 4) {
        var total = `<div class="alert alert-info"> Uuuu buena asertaste 4 de 5... Te falto poco</div>`;
        imga1();

    }
    if (acertadas == 5) {
        var total = `<div class="alert alert-info">Felicitaciones...asertaste 5 de 5...Eres el/la mejor</div>`;
        imga1();

    }



    var mostrar = document.getElementById('solucion');
    mostrar.innerHTML = total;

    var resulpregunta = document.getElementById('pregunta').innerHTML = pregunta;
    var resulrepuesta = document.getElementById('dato').value = "";

    otra();
    document.getElementById('pregunta').style.display = "none";

    document.getElementById('boton').style.display = "none";
    document.getElementById('hola').style.display = "none";
    // document.getElementById('pregunta').style.display = "none";
    document.getElementById('dato').style.display = "none";
    // document.getElementById('resuelto0').style.display = "block";
    document.getElementById('resuelto1').style.display = "block";
    document.getElementById('resuelto2').style.display = "block";
    document.getElementById('resuelto3').style.display = "block";
    document.getElementById('resuelto4').style.display = "block";
    document.getElementById('resuelto5').style.display = "block";


    document.getElementById('respuestaResuelta1').style.display = "block";
    document.getElementById('respuestaResuelta2').style.display = "block";
    document.getElementById('respuestaResuelta3').style.display = "block";
    document.getElementById('respuestaResuelta4').style.display = "block";
    document.getElementById('respuestaResuelta5').style.display = "block";


}





function numAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}