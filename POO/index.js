class Pregunta {
    constructor(textoPregunta, opciones) {
      this.textoPregunta = textoPregunta;
      this.opciones = opciones.map((opcion) => opcion.trim());
      this.resultados = {};
    }
  
    
    agregarVoto(opcionSeleccionada) {
      
        if (this.opciones.includes(opcionSeleccionada)) {
        this.resultados[opcionSeleccionada] =
          (this.resultados[opcionSeleccionada] || 0) + 1;
      } else {
        console.log("Usted selecciono una alternativa no válida.");
      }
    }
  
    
    mostrarResultados() {
      console.log(`Resultados para la pregunta: ${this.textoPregunta}`);
      this.opciones.forEach((opcion) => {
        console.log(`Opción "${opcion}": ${this.resultados[opcion] || 0} votos`);
      });
    }
  }
  
  
  class Encuesta {
    constructor() {
      this.preguntas = [];
    }
  
    
    agregarPregunta(textoPregunta, opciones, auxIndex, cantidadAlternativas) {
      const pregunta = new Pregunta(textoPregunta, opciones);
      this.preguntas.push(pregunta);
      console.log(`Pregunta número ${auxIndex}: ${textoPregunta}`);
      console.log(`Eliga una de las siguientes ${cantidadAlternativas} alternativas: ${opciones}`);
    }
  
    
    
    ejecutar() {
      let seguirVotando = true;
      while (seguirVotando) {
        this.preguntas.forEach((pregunta) => this.votar(pregunta));
        seguirVotando = confirm("¿Desea seguir votando?");
      }
      this.mostrarResultadosFinales();
    }
    
    
    
    
    votar(pregunta) {
        const opcionSeleccionada= prompt(`${pregunta.textoPregunta}\nSeleccione una alternativa (${pregunta.opciones.join(", ")}):`);
        if (opcionSeleccionada !== null) {
          console.log(`Respuesta ordenada cronologicamente: ${opcionSeleccionada}`);
          pregunta.agregarVoto(opcionSeleccionada.trim());
        } else {
        console.log("Votación cancelada.");
        
       }
     
             
    }
      
    
  
    


    mostrarResultadosFinales() {
      console.log("Resultados finales de la encuesta:");
      this.preguntas.forEach((pregunta) => pregunta.mostrarResultados());
    }
  }
  
  
  const crearEncuestaInteractiva = () => {
    const encuesta = new Encuesta();
    const numeroDePreguntas = 8;
    let auxIndex;
     
  
    for (let i = 0; i < numeroDePreguntas; i++) {
      const textoPregunta = prompt(`Ingrese la pregunta ${i + 1}:`);
      
      const arrayOpciones=[];
      const cantidadAlternativas=Number(prompt("Ingrese el número de alternativas a crear."));
      for(let j=1;j<=cantidadAlternativas;j++){
        arrayOpciones.push(prompt(`Ingrese la alternativa número ${j}`));
      }
      auxIndex=i+1;
      const opciones=arrayOpciones;
      encuesta.agregarPregunta(textoPregunta, opciones, auxIndex, cantidadAlternativas);
    }
  
    return encuesta;
  };
  
  // Inicializar y ejecutar la encuesta
  const encuesta = crearEncuestaInteractiva();
  encuesta.ejecutar();
  
  
  