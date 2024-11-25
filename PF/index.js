const arregloPpreguntas = [ ];
const arregloRespuestas = [ ];
let contadorModificacion=-1;

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
    const CantidadDePreguntas=8
    for (let i = 1; i <= CantidadDePreguntas; i++) {
        const pregunta = prompt(`Ingrese la pregunta número: ${i}`);
        arregloPpreguntas.push(pregunta);
        console.log(`Pregunta número ${i}: ${pregunta}`);
        

        const alternativasAux = alternativas();
        arregloPpreguntas[i - 1].alternativasPregunta = alternativasAux;
    }
contadorModificacion=(contadorModificacion+1);
    
}



function respuestas(preguntas) {

    for (let k = 0; k < preguntas.length; k++) {
        arregloRespuestas.push(prompt(`Mire las alternativas de la consola y responda a la pregunta número ${k + 1}:`));
    }
}


function mostrar(){
    console.log(`Usted añadio un total de ${arregloPpreguntas.length} preguntas: ${arregloPpreguntas.join(", ")}`);
        
    console.log(`Usted ingreso un total de ${arregloRespuestas.length} respuestas: ${arregloRespuestas.join(", ")}`);
    
    console.log(`Usted modifico en ${contadorModificacion} oprtunidades la encuesta(as) `);
    

}

alert("Si es la primera ejecuta la encuesta, selecione la opción (4) salir, luego abra la consola y recargue el navegador con la tecla (F5), si usted ya realizo estos pasos, ignore la advertencia");


const ejecutar = () => {let repetir = true;

    while (repetir) {
         menu =Number(prompt("Ingrese una opción:\n-----------------------\n(1) Agregar Preuntas.\n(2) Responder esncuesta.\n(3) Mostrar encuesta.\n(4) salir. "));


        if (menu === 1) {
            preguntas();
        } else if (menu === 2) {
            respuestas(arregloPpreguntas);
        } else if (menu === 3) {
            mostrar();
        } else if (menu === 4) {
            repetir = false;
            console.log("Grcias por haber usado el programa Encuestas.");
        } else {
            alert("Opción inválida. Intenta nuevamente.");
        }
    }
};

ejecutar();
