function calcularCoordenadas() {
    // Obtener valores de entrada
    const radio = parseFloat(document.getElementById('radius').value);
    const theta = parseFloat(document.getElementById('theta').value);
    const phi = parseFloat(document.getElementById('phi').value);

    // Convertir ángulos de grados a radianes
    const thetaRad = (theta * Math.PI) / 180;
    const phiRad = (phi * Math.PI) / 180;

    // Calcular coordenadas cartesianas
    const x = radio * Math.sin(phiRad) * Math.cos(thetaRad);
    const y = radio * Math.sin(phiRad) * Math.sin(thetaRad);
    const z = radio * Math.cos(phiRad);

    // Mostrar resultados
    const resultElement = document.getElementById('result');
    resultElement.textContent = `(${x.toFixed(2)}, ${y.toFixed(2)}, ${z.toFixed(2)})`;
}