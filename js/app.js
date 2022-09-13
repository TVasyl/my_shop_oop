let cards = new Card();
let home = new Home();
let bin = new Bin();


let mainContent = document.querySelector('.main__contant');

const homeButton = document.querySelector('.home');
const goodesButton = document.querySelector('.goodes');
const binButton = document.querySelector('.bin');


goodesButton.addEventListener('click', showCards);
homeButton.addEventListener('click', showHome);
binButton.addEventListener('click', showBin)


function showHome() {
    mainContent.innerHTML = '';
    home.render(advertising);

}


function showCards() {
    mainContent.innerHTML = '';
    cards.render(data);
}


function showBin() {
    mainContent.innerHTML = '';
    bin.render();
}

showHome();