document.addEventListener("DOMContentLoaded", function () {
  function aplicarLayoutResponsivo() {
    const larguraTela = window.innerWidth;
    const body = document.body;
    const container = document.querySelector('.container'); // ajuste de acordo com seu layout
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    body.classList.remove('mobile', 'desktop');

    if (larguraTela <= 768) {
      body.classList.add('mobile');

      // Ajustes opcionais
      if (container) container.style.flexDirection = 'column';
      if (header) header.style.textAlign = 'center';
      if (nav) nav.style.display = 'none'; // oculta o menu principal
    } else {
      body.classList.add('desktop');

      if (container) container.style.flexDirection = 'row';
      if (header) header.style.textAlign = 'left';
      if (nav) nav.style.display = 'flex';
    }
  }
  aplicarLayoutResponsivo();
  window.addEventListener('resize', aplicarLayoutResponsivo);
});
