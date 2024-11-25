const arregloPpreguntas = [ ];
const arregloRespuestas = [ ];

function alternativas() {
    const arregloAlternativas = [ ]; 
    const numAlternativas = Number(prompt("Ingrese la cantidad de alternativas:"));

     for (let j = 1; j <= numAlternativas; j++) {
         arregloAlternativas.push(prompt(`Ingrese alternativa ${j}`));
     }

     console.log("Usted tiene", arregloAlternativas.length, "alternativas:", arregloAlternativas.join(", "));
     return arregloAlternativas;
}

function preguntas() {
    for (let i = 1; i <= 2; i++) {
        const pregunta = prompt(`Ingrese la pregunta número: ${i}`);
        arregloPpreguntas.push(pregunta);
        console.log(`Pregunta número ${i}: ${pregunta}`);
        

        const alternativasAux = alternativas();
        arregloPpreguntas[i - 1].alternativasPregunta = alternativasAux;
    }

    
}



function respuestas(preguntas) {

    for (let k = 0; k < preguntas.length; k++) {
        arregloRespuestas.push(prompt(`Responda a la pregunta número ${k + 1}:`));
    }
}


function mostrar(){
    console.log("Se han creado con éxito las siguientes preguntas:");
    console.log(arregloPpreguntas);
    
    console.log("Estas son las respuestas ingresadas:");
    console.log(arregloRespuestas);
}



const preguntasCreadas = preguntas();
const respuestasDadas = respuestas(preguntasCreadas);



