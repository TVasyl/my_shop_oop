let cards = new Card();
let home = new Home();
let bin = new Bin();
let user = new User();
let registration = new Registration();
let cabinet = new Cabinet();


// ################ Empty object for data of bin in local storage ################
let dataOfBin = {};

// ################ Initialising main block for different content ################
const mainContent = document.querySelector('.main__contant');

// ################ Initialising buttons in side bar ################
const header = document.querySelector('.header');
const sidebar = document.querySelector('.sidebar');
const homeButton = document.querySelector('.home');
const goodesButton = document.querySelector('.goodes');
const binButton = document.querySelector('.bin');
const loginButton = document.querySelector('.login');
// const register = document.querySelector('.register');


window.onscroll = () => {
    if (window.pageYOffset > 250) {
        header.classList.add('header-fix');
        sidebar.classList.add('sidebar-fix');
    } else {
        header.classList.remove('header-fix');
        sidebar.classList.remove('sidebar-fix');
    }
}


// ################ Click buttons in in side bar ################
homeButton.addEventListener('click', showHome);
goodesButton.addEventListener('click', showCards);
binButton.addEventListener('click', showBin);
loginButton.addEventListener('click', showLogin);

// ################ Create HOME page firstly ################
showHome.call(homeButton);

// ################ Create HOME page ################
function showHome() {
    mainContent.innerHTML = '';
    home.render(advertising);
    marcButton(this);
}

// ################ Create GOODES page ################
function showCards() {
    mainContent.innerHTML = '';
    cards.render(data);
    marcButton(this);
}

// ################ Create BIN page ################
function showBin() {
    mainContent.innerHTML = '';
    if(localStorage.getItem('cart')){
        const binData = JSON.parse(localStorage.getItem('cart'));
        bin.render(binData);
    } else {bin.render()}; 
    marcButton(this);
}

// ################ Create LOGIN page ################
function showLogin(status) {
    mainContent.innerHTML = '';
    if (document.querySelector('.user')) {
        mainContent.innerHTML = '';
        // console.log(loginButton.dataset.articul);
        cabinet.render(loginButton.dataset.articul);
    } else {
        user.render(status);
    }
    marcButton(this);
}

// ################ Create GOODES page ################
function showRegistration() {
    mainContent.innerHTML = '';
    registration.render();
}

function marcButton(element) {
    const buttons = document.querySelectorAll('.sidebar_button');
    for( const i of buttons) {
        i.classList.remove('sidebar-marc')
    }
    element.classList.add('sidebar-marc');
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
        showBin.call(binButton);
    }
    else if (event.target.classList.contains('minus')) {
        let articul = event.target.dataset['articul'];
        if (dataOfBin[articul]['count'] > 1){
            dataOfBin[articul]['count']--;
            localStorage.setItem('cart', JSON.stringify(dataOfBin));
            showBin.call(binButton);
        }
    }
    else if (event.target.classList.contains('delete')) {
        let articul = event.target.dataset['articul'];
        delete dataOfBin[articul];
        localStorage.setItem('cart', JSON.stringify(dataOfBin));
        showBin.call(binButton);
    }
    document.querySelector('.bin-fill').innerHTML = bin.setNumberOfGoodes();
})

// ################ Create counters of goodes near BIN button ################
document.querySelector('.bin-fill').innerHTML = bin.setNumberOfGoodes();

mainContent.addEventListener('click', event => {
    if (event.target.classList.contains('clean')){
        localStorage.removeItem('cart');
        dataOfBin = {};
        document.querySelector('.bin-fill').innerHTML = bin.setNumberOfGoodes();
        showBin.call(binButton);
    }
});

// ################ Click LOGIN  button on login page ################
mainContent.addEventListener('click', event => {
    if (event.target.classList.contains('submit')) {
        event.preventDefault();
        
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const validEmail = user.setEmail(email);
        const validPassword = user.setPassword(password);
        
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
            mainContent.innerHTML = '';
            user.render(user.logIn());
        }
    }
});

// ################ Go to the registration page ################
mainContent.addEventListener('click', event => {
    if (event.target.classList.contains('register')) {
        showRegistration();
    }
})

// ################ Click REG IN  button on registration page ################
mainContent.addEventListener('click', event => {
    if (event.target.classList.contains('registration')) {
        // console.log('+');
        event.preventDefault();
        
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const name = document.getElementById('name');
        const lastName = document.getElementById('lastname');

        const validEmail = registration.setEmail(email);
        const validPassword = registration.setPassword(password);
        const validName = registration.setName(name);
        const validLastName = registration.setLastName(lastName);

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
        
        if (!validName) {
            name.classList.add('error');
        } else if (validName) {
            if (name.classList.contains('error')) {
                name.classList.remove('error');
            }
        }
        
        if (!validLastName) {
            lastName.classList.add('error');
        } else if (validLastName) {
            if (lastName.classList.contains('error')) {
                lastName.classList.remove('error');
            }
        }
                
        if (!email.classList.contains('error') && !password.classList.contains('error') && !name.classList.contains('error') && !lastName.classList.contains('error')) {
            mainContent.innerHTML = '';
            registration.render(registration.createUser());
        }
    }
});