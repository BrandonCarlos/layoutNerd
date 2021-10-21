export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] ul li a[href^="#"]')
  // Começando com # significa que é LINK INTERNO
  console.log(linksInternos);//agora tenho todos os <a>
  
  function scrollToSection(event) {//event é o EVENTO DE CLICK msm
    console.log(event.target);
    console.log(event.currentTarget)
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');//event tem dentro por exemplo o link que foi clicado no caso o currentTarget
    const section = document.querySelector(href);//irá pegar a section que tem '#home'

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',//para alinhar exatamente no topo da section
    });
  }

  linksInternos.forEach(link => {
    link.addEventListener('click', scrollToSection);
  })

}


const lista = document.querySelector('.lista');//currentTarget = elemento que coloquei o EVENT
//target = filhos do elemento que coloquei o CLICK

function testandoFunction(event) {
  console.log(event.target);//target sempre MUDA
  console.log(event.currentTarget);//currentTarget é sempre o elemento CLICADO
}

lista.addEventListener('click', testandoFunction)