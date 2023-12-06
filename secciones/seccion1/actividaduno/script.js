/// Función para convertir grados a radianes
function toRadians(grados) {
    return grados * (Math.PI / 180);
}

function calcularLados() {
    // Obtener los ángulos ingresados por el usuario
    const inputAnguloA = document.getElementById('anguloA');
    const inputAnguloB = document.getElementById('anguloB');
     // Verificar que los elementos se hayan encontrado correctamente
     if (!inputAnguloA || !inputAnguloB) {
        console.error("Error: No se encontraron los elementos de entrada para ánguloA y/o ánguloB.");
        return;
    }

    const anguloA = parseFloat(inputAnguloA.value);
    const anguloB = parseFloat(inputAnguloB.value);
    // Calcular el ángulo C (el tercero) basándose en que la suma de los ángulos en un triángulo es 180°
    const anguloC = 180 - anguloA - anguloB;

    // Verificar que la suma de los ángulos sea 180° (condición de un triángulo)
    if (anguloA + anguloB + anguloC !== 180) {
        alert("¡Error! La suma de los ángulos debe ser 180°. ¡Los misterios no cuadran!");
        return;
    }


  // Calcular los lados del triángulo utilizando las leyes de los senos y cosenos
  const ladoA = Math.sin(toRadians(anguloA)) * (Math.sin(toRadians(anguloC)) / Math.sin(toRadians(anguloB)));
  const ladoB = Math.sin(toRadians(anguloB)) * (Math.sin(toRadians(anguloC)) / Math.sin(toRadians(anguloA)));
  const ladoC = Math.sqrt(ladoA**2 + ladoB**2 - 2 * ladoA * ladoB * Math.cos(toRadians(anguloC)));

  // Mostrar los resultados en la interfaz
  document.getElementById('ladoA').innerText = ladoA.toFixed(2);
  document.getElementById('ladoB').innerText = ladoB.toFixed(2);
  document.getElementById('ladoC').innerText = ladoC.toFixed(2);

   // Mostrar el contenedor de resultados
   document.getElementById('resultadosContainer').classList.remove('d-none');

  // Narrativa para hacerlo más entretenido
  alert("¡Has descubierto los secretos trigonométricos! Los lados del triángulo revelan su verdadera naturaleza. ¡Bien hecho, aventurero!");
}