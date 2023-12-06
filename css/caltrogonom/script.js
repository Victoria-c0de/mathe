function calculateDistance() {
    // Obtener valores de entrada
    const earthSunDistance = parseFloat(document.getElementById('earthSunDistance').value);
    const martianOrbitPeriod = parseFloat(document.getElementById('martianOrbitPeriod').value);

    // Calcular la distancia relativa Marte-Tierra
    const marsEarthDistance = calculateMarsEarthDistance(earthSunDistance, martianOrbitPeriod);

    // Mostrar el resultado
    document.getElementById('result').textContent = `La distancia relativa Marte-Tierra es aproximadamente ${marsEarthDistance} km.`;
}

function calculateMarsEarthDistance(earthSunDistance, martianOrbitPeriod) {
    // Calcular la distancia relativa utilizando el método Kepler
    const marsRelativeDistance = Math.cbrt(martianOrbitPeriod * martianOrbitPeriod);

    // Calcular la distancia en kilómetros
    const marsEarthDistance = (marsRelativeDistance - 1) * earthSunDistance;

    return marsEarthDistance.toFixed(2); // Redondear a dos decimales
}
