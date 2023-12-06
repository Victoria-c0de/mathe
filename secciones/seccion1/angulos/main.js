// main.js

// Variable global para almacenar el lado opuesto
let ladoOpuesto;

// Función para generar un ejercicio aleatorio
function generarEjercicio() {
  // Ángulo aleatorio entre 30 y 60 grados
  let angulo = Math.floor(Math.random() * 31) + 30;

  // Lado aleatorio entre 5 y 15 unidades
  let lado = Math.floor(Math.random() * 11) + 5;

  // Calcula el valor del lado opuesto usando la función seno
  ladoOpuesto = Math.sin(angulo * (Math.PI / 180)) * lado;

  // Muestra el ejercicio en el contenedor
  let exerciseContainer = document.getElementById("exercise-container");
  exerciseContainer.innerHTML = `<p>En un triángulo rectángulo, el ángulo agudo es ${angulo}° y el lado adyacente mide ${lado} unidades. ¿Cuánto mide el lado opuesto?</p>
  <input type="number" id="respuesta" placeholder="Respuesta">`;
}

// Función para verificar la respuesta del usuario
function verificarRespuesta() {
  let respuestaUsuario = parseFloat(document.getElementById("respuesta").value);

  if (isNaN(respuestaUsuario)) {
    document.getElementById("resultado").innerText = "Ingresa un valor numérico.";
  } else {
    // Compara la respuesta del usuario con la respuesta correcta (ladoOpuesto)
    if (Math.abs(respuestaUsuario - ladoOpuesto) < 0.01) {
      document.getElementById("resultado").innerText = "¡Correcto!";
    } else {
      document.getElementById("resultado").innerText = "Incorrecto. Inténtalo de nuevo.";
    }
  }
}

// Función para generar un nuevo ejercicio al hacer clic en el botón "Nuevo"
function generarNuevoEjercicio() {
  // Limpia el resultado anterior
  document.getElementById("resultado").innerText = "";

  // Genera un nuevo ejercicio
  generarEjercicio();
}

// Inicializa la aplicación generando el primer ejercicio
generarEjercicio();


// Función para mostrar o ocultar la explicación
function mostrarExplicacion() {
    let explicacion = document.getElementById("explicacion");
  
    // Cambia el estado de visualización del modal
    if (explicacion.style.display === "none") {
      explicacion.style.display = "block";
    } else {
      explicacion.style.display = "none";
    }
  }
  
// Función para mostrar u ocultar la explicación
function mostrarExplicacion(idExplicacion) {
    let explicacion = document.getElementById(idExplicacion);
  
    // Cambia el estado de visualización de la explicación
    if (explicacion.style.display === "none") {
      explicacion.style.display = "block";
    } else {
      explicacion.style.display = "none";
    }
  }
  