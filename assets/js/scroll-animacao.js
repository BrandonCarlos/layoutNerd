export default function initScrollAnimacao() {
  // Vamos pegar todas as section's
  //vamos pegar 60% da altura da tela
  //evento de scroll vai no window na tela toda

  const sections = document.querySelectorAll('[data-anime="scroll"]');
  console.log(sections); 

  const windowMetade = window.innerHeight * 0.4;//1172 * 0.4 = 468

  function animaScroll() {
    // Precisamos saber a distancia do elemento que está no topo
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top - windowMetade; //top = 1000 - 468 = 368
      console.log(sectionTop);
      const isSectionVisible = (sectionTop - windowMetade) < 0;//daqui retorna TRUE ou FALSE
        console.log(isSectionVisible);
      //quer dizer se já é 368 faz denovo - 368 = 0 se for menor que 0 faz...
      if (isSectionVisible) {//se for menor que 0 significa que o elemento já está colado no TOPO
        section.classList.add('ativo')
      } else {
        section.classList.remove('ativo');
      }
    })
  }

  animaScroll();

  window.addEventListener('scroll', animaScroll);
}