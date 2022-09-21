class User {
    constructor() {
        this._email;
        this._password;
        this._name;
        this._lastName;
        this._element = "main__contant";
    }

    setEmail(email) {
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(email.value)){
            return false;
        }
        this._email = email.value;
        return true;
    }

    setPassword(password) {
        password = password.value;
        if (password.length >= 6) {
            this._password = password;
            return true;
        }
        return false;
    }

    setName(name) {
        name = name.value.trim();
        if (name.length != 0) {
            this._name = name;
            return true;
        }
        return false;        
    }

    setLastName(lastName) {
        lastName = lastName.value.trim();
        if (lastName.length != 0) {
            this._lastName = lastName;
            return true;
        }
        return false;
    }

    setElement(element) {
        this._element = element;

        return true;
    }
    
    /**
     * Method for Login on website
     * @returns boolen
     */
    logIn() {
        if (localStorage.getItem(this._email)) {
            const user = JSON.parse(localStorage.getItem(this._email));
            // this.setName(user['name']);
            // this.setLastName(user['lastname']);
            
            if (user['password'] === this._password){
                loginButton.classList.remove('login');
                loginButton.classList.add('cabinet');
                loginButton.setAttribute('data-articul', this._email);

                loginButton.innerHTML = 'CABINET';
                let div = document.createElement('div');
                div.classList.add('user')
                div.setAttribute('data-articul', this._email);
                div.innerHTML = `<h3>${user['name']}</h3>`;
                if (!document.querySelector('.user')) {
                    document.querySelector('.header').append(div);
                }
                return true;
            } 
            else {
                alert('Your password is incorrect!');
                return false;
            }
        } 
        else {
            alert('User not found! Please register on this website');
            return false;
        }
    }

    /**
     * Metod for render content of login page
     * @param Boolen status 
     */
    render(status) {
        let div = document.createElement('div');
        div.classList.add('form');
        this.setElement(mainContent);
        
        if (status === true) {
            div.classList.add('form-correct');
            div.innerHTML = 
            `<div class="form__title">
                <h2>Welcome to website!</h2>
            </div>`
        }
        else {
            div.innerHTML = 
        `<form action="#" id="form" class="form__body" method="post">
        <div class="form__title">
            <h3>Before you buy something on this website, you have to login!</h3>
        </div>
        <div class="form__item">
            <label for="email" class="form__label">E-mail:</label>
            <br>
            <input type="text" name="email" id="email" class="form__input">
        </div>
        <h6>E-mail must look like asd@asd.asd!</h6>
        <div class="form__item">
            <label for="password" class="form__label">Password:</label>
            <br>
            <input type="password" name="password" id="password" class="form__input">
        </div>
        <h6>Password must contain 6 and more symbols!</h6>
        <div class="form__register">
            <a href="#" class="register">Registration</a>
        </div>
        <button class="form__button submit">LOGIN</button>
        </form>`;
        }  
        this._element.append(div);
    }
}