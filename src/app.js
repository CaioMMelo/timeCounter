document.addEventListener("DOMContentLoaded", function () {
    const main = document.querySelector("main");
    setTimeout(() => {
      main.classList.remove("hidden");
    }, 2200);
  
    const dataInicio = new Date("2025-06-02T00:00:00"); // 🗓️ ajuste a data se necessário
  
    function atualizarContador() {
      const agora = new Date();
      const diff = agora - dataInicio;
  
      const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diff / (1000 * 60)) % 60);
      const segundos = Math.floor((diff / 1000) % 60);
  
      document.getElementById("dias").textContent = dias;
      document.getElementById("horas").textContent = horas.toString().padStart(2, "0");
      document.getElementById("minutos").textContent = minutos.toString().padStart(2, "0");
      document.getElementById("segundos").textContent = segundos.toString().padStart(2, "0");
    }
  
    atualizarContador(); // chama uma vez para não esperar
    setInterval(atualizarContador, 1000); // atualiza a cada segundo
  });
  
  document.querySelectorAll('.polaroid-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});
