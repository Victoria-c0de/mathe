function iniciarSimulacion() {
    // Obtener los valores del formulario
    const posicionInicial = document.getElementById('posicion-inicial').value;
    const velocidadLineal = document.getElementById('velocidad-lineal').value;
    const velocidadAngular = document.getElementById('velocidad-angular').value;

    // Realizar las operaciones y cálculos necesarios con estos valores
    // Por ahora, simplemente mostraremos una alerta con los valores ingresados
    const mensaje = `Posición Inicial: ${posicionInicial}\nVelocidad Lineal: ${velocidadLineal} m/s\nVelocidad Angular: ${velocidadAngular} rad/s`;
    alert(mensaje);
}
