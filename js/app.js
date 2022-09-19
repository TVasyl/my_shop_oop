let cards = new Card();
let home = new Home();
let bin = new Bin();

// ################ Empty object for data of bin in local storage ################
let dataOfBin = {};

// ################ Initialising main block for different content ################
const mainContent = document.querySelector('.main__contant');

// ################ Initialising buttons in side bar ################
const homeButton = document.querySelector('.home');
const goodesButton = document.querySelector('.goodes');
const binButton = document.querySelector('.bin');

// ################ Click buttons in in side bar ################
homeButton.addEventListener('click', showHome);
goodesButton.addEventListener('click', showCards);
binButton.addEventListener('click', showBin)

// ################ Create HOME page firstly ################
showHome();

// ################ Create HOME page ################
function showHome() {
    mainContent.innerHTML = '';
    home.render(advertising);
}

// ################ Create GOODES page ################
function showCards() {
    mainContent.innerHTML = '';
    cards.render(data);
}

// ################ Create BIN page ################
function showBin() {
    mainContent.innerHTML = '';
    if(localStorage.getItem('cart')){
        const binData = JSON.parse(localStorage.getItem('cart'));
        bin.render(binData);
    } else {bin.render()}; 
    
}

// ################ Create data of bin in local storage ################
mainContent.addEventListener('click', event => {
    if(localStorage.getItem('cart')){
        dataOfBin = JSON.parse(localStorage.getItem('cart'));
    }

    if (event.target.classList.contains('button-to-bin')) {
        let articul = event.target.dataset['articul'];
        if (dataOfBin[articul] !== undefined) {
            dataOfBin[articul]['count']++;
        }
        else {
            dataOfBin[articul] = data[articul];
            dataOfBin[articul]['count'] = 1;
        }
        localStorage.setItem('cart', JSON.stringify(dataOfBin));
    }    
    else if (event.target.classList.contains('plus')) {
        let articul = event.target.dataset['articul'];
        dataOfBin[articul]['count']++;
        localStorage.setItem('cart', JSON.stringify(dataOfBin));
        showBin();
    }
    else if (event.target.classList.contains('minus')) {
        let articul = event.target.dataset['articul'];
        if (dataOfBin[articul]['count'] > 1){
            dataOfBin[articul]['count']--;
            localStorage.setItem('cart', JSON.stringify(dataOfBin));
            showBin();
        }
    }
    document.querySelector('.bin-fill').innerHTML = bin.setNumberOfGoodes();
})

// ################ Create countes of goodes near BIN button ################
document.querySelector('.bin-fill').innerHTML = bin.setNumberOfGoodes();

mainContent.addEventListener('click', event => {
    if (event.target.classList.contains('delete')){
        localStorage.removeItem('cart');
        dataOfBin = {};
        document.querySelector('.bin-fill').innerHTML = bin.setNumberOfGoodes();
        showBin();
    }
})
