let cards = new Card();
let home = new Home();
let bin = new Bin();

// ################ Empty object for data of bin in local storage ################
let dataOfBin = {};

// ################ Initialising main block for different content ################
let mainContent = document.querySelector('.main__contant');

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
    }    
    
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
    
    bin.setNumberOfGoodes();
})

// ################ Create countes of goodes near BIN button ################
bin.setNumberOfGoodes();


