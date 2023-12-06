function calcularAnguloTrayectoria() {
    try {
        const xInicial = parseFloat(document.getElementById('xInicial').value);
        const yInicial = parseFloat(document.getElementById('yInicial').value);
        const xDestino = parseFloat(document.getElementById('xDestino').value);
        const yDestino = parseFloat(document.getElementById('yDestino').value);

        // Calcular ángulo de trayectoria
        const deltaX = xDestino - xInicial;
        const deltaY = yDestino - yInicial;
        const anguloTrayectoria = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

        // Mostrar el resultado
        document.getElementById('resultado').innerText = `Ángulo de Trayectoria: ${anguloTrayectoria.toFixed(2)} grados`;
    } catch (error) {
        document.getElementById('resultado').innerText = 'Ingrese coordenadas válidas';
    }
}
