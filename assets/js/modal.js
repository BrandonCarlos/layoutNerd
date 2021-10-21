export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');


  if (botaoAbrir && botaoFechar && containerModal) {
    function toggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle('ativo');
    }

    function clickForaModal(event) {
      //this = containerModal OBJETO que chamou o evento de CLICK
      if (event.target === this) {
        //event.target = mostra o item que clicamos
        //e se o item que clicamos for o containerModal
        //pode fechar o MODAL
        toggleModal(event);
      }
    }

    botaoAbrir.addEventListener('click', toggleModal);
    botaoFechar.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', clickForaModal);
  }
};

// DICA: primeiro pegamos todos os BOTÕES que eu
//vou tomar uma AÇÃO neles