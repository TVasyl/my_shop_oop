let cards = new Card();
let mainContent = document.querySelector('.main__contant');

const homeButton = document.querySelector('.home');
const goodesButton = document.querySelector('.goodes');


goodesButton.addEventListener('click', showViev);
homeButton.addEventListener('click', showHome);

function showViev() {
    createCards(data);
}

function showHome() {
    mainContent.innerHTML = '';
}


function createCards(data) {
    
    mainContent.innerHTML = '';
    for(let items in data) {
        cards.setCardName(data[items].name);
        cards.setCardImage(data[items].image);
        cards.setCardPrice(data[items].price);
        cards.setElement(mainContent);
        cards.render();
    }
}


//createCards(data);

console.log(cards);