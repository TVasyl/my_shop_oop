let cards = new Card();
let home = new Home();
let mainContent = document.querySelector('.main__contant');

const homeButton = document.querySelector('.home');
const goodesButton = document.querySelector('.goodes');


goodesButton.addEventListener('click', createCards);
homeButton.addEventListener('click', showHome);


function showHome() {
    mainContent.innerHTML = '';
    home.render(advertising);

}


function createCards() {
    
    mainContent.innerHTML = '';
    cards.render(data);
}

