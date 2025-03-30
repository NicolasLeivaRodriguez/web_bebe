document.addEventListener('DOMContentLoaded', () => {
  const diasElement = document.getElementById('dias');
  const horasElement = document.getElementById('horas');
  const minutosElement = document.getElementById('minutos');
  const segundosElement = document.getElementById('segundos');

  const fechaObjetivo = new Date('2025-11-10T00:00:00');

  function actualizarContador() {
      const ahora = new Date();
      const diferencia = fechaObjetivo.getTime() - ahora.getTime();

      if (diferencia <= 0) {
          clearInterval(intervalo);
          diasElement.textContent = '00';
          horasElement.textContent = '00';
          minutosElement.textContent = '00';
          segundosElement.textContent = '00';
          console.log('¡La fecha objetivo ha llegado!');
          return;
      }

      const segundos = Math.floor((diferencia / 1000) % 60);
      const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
      const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

      diasElement.textContent = dias < 10 ? '0' + dias : dias;
      horasElement.textContent = horas < 10 ? '0' + horas : horas;
      minutosElement.textContent = minutos < 10 ? '0' + minutos : minutos;
      segundosElement.textContent = segundos < 10 ? '0' + segundos : segundos;
  }

  actualizarContador(); // Llamar la función inmediatamente para evitar un retraso inicial
  const intervalo = setInterval(actualizarContador, 1000);
});