function convertirCoordenadas() {
    // Obtener valores de entrada
    const radio = parseFloat(document.getElementById("polarR").value);
    const angulo = parseFloat(document.getElementById("polarTheta").value);

    // Realizar la conversión
    const x = radio * Math.cos(angulo);
    const y = radio * Math.sin(angulo);

    // Mostrar el resultado
    const resultado = `Coordenadas Rectangulares: (${x.toFixed(2)}, ${y.toFixed(2)})`;
    document.getElementById("coordenadasRectangulares").innerText = resultado;
}
