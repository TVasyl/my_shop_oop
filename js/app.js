let cards = new Card();
let home = new Home();
let bin = new Bin();
let user = new User();

const firstUser = {"email": 'asd@asd.ua', "password": '123456', "name": 'Vasyl', "lastname": 'Trots', "cart":{"card-1":{"name":"Card 1","image":"/images/control-panel-icon.png","price":100,"count":1},"card-2":{"name":"Card 2","image":"/images/drum-icon.png","price":200,"count":1},"card-3":{"name":"Card 3","image":"/images/guitar-icon.png","price":300,"count":1}}};

localStorage.setItem('asd@asd.ua', JSON.stringify(firstUser));

// ################ Empty object for data of bin in local storage ################
let dataOfBin = {};

// ################ Initialising main block for different content ################
const mainContent = document.querySelector('.main__contant');

// ################ Initialising buttons in side bar ################
const homeButton = document.querySelector('.home');
const goodesButton = document.querySelector('.goodes');
const binButton = document.querySelector('.bin');
const loginButton = document.querySelector('.login');


// ################ Click buttons in in side bar ################
homeButton.addEventListener('click', showHome);
goodesButton.addEventListener('click', showCards);
binButton.addEventListener('click', showBin)
loginButton.addEventListener('click', showLogin)

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

// ################ Create LOGIN page ################
function showLogin(status) {
    mainContent.innerHTML = '';
    user.render(status);
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
    else if (event.target.classList.contains('delete')) {
        let articul = event.target.dataset['articul'];
        delete dataOfBin[articul];
        localStorage.setItem('cart', JSON.stringify(dataOfBin));
        showBin();
    }
    document.querySelector('.bin-fill').innerHTML = bin.setNumberOfGoodes();
})

// ################ Create countes of goodes near BIN button ################
document.querySelector('.bin-fill').innerHTML = bin.setNumberOfGoodes();

mainContent.addEventListener('click', event => {
    if (event.target.classList.contains('clean')){
        localStorage.removeItem('cart');
        dataOfBin = {};
        document.querySelector('.bin-fill').innerHTML = bin.setNumberOfGoodes();
        showBin();
    }
});

// ################ Click LOGIN  button ################
mainContent.addEventListener('click', event => {
    if (event.target.classList.contains('submit')) {
        event.preventDefault();
        
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        let validEmail = user.setEmail(email);
        let validPassword = user.setPassword(password);
        
        if (!validEmail) {
            email.classList.add('error');
        } else if (validEmail) {
            if (email.classList.contains('error')) {
                email.classList.remove('error');
            }
        }
        if (!validPassword) {
            password.classList.add('error');
        } else if (validPassword) {
            if (password.classList.contains('error')) {
                password.classList.remove('error');
            }
        }
        if (!email.classList.contains('error') && !password.classList.contains('error')) {
            showLogin(user.logIn());
        }
    }
});