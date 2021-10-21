export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"]');
  const tabContent = document.querySelectorAll('[data-tab="content"]');

  tabContent[0].classList.add('ativo');

  function activeMenu(index) {
    // tabContent.forEach(section => {
    //   section.classList.remove('ativo');
    // });

    const direcao = tabContent[index].dataset.anime;
    console.log(direcao);
    //de dentro do TabContent[index] to pegando o dataSet
    tabContent[index].classList.add('ativo', direcao);//direcao da animação right ou top
    console.log(tabContent[index]);//class="descricao ativo show-right"
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      activeMenu(index);
    });
  });

};