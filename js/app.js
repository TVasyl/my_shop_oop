let cards = new Card();

window.target





function createCards(data) {
    let mainContent = document.querySelector('.main__contant');
    mainContent.innerHTML = '';
    for(let items in data) {
        cards.setCardName(data[items].name);
        cards.setCardImage(data[items].image);
        cards.setCardPrice(data[items].price);
        cards.setElement(mainContent);
        cards.render();
    }
}


createCards(data);

console.log(cards);