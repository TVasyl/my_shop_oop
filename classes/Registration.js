class Registration extends User {

    createUser() {
        if (localStorage.getItem(this._email)) {
            alert(`User with this email already registered!`);

            return false;
        }
        else {
            const user = {"email": this._email, "password": this._password, "name": this._name, "lastname": this._lastName}
            localStorage.setItem(`${this._email}`, JSON.stringify(user));

            return true;
        }
    }

    render(status) {
        let div = document.createElement('div');
        div.classList.add('register-form');
        this.setElement(mainContent);
        
        if (status === true) {
            div.classList.add('form-correct');
            div.innerHTML = 
            `<div class="form__title">
                <h2>${this._name} your registration is successful!</h2>
            </div>`
        }
        else {
        div.innerHTML = 
        `<form action="#" id="form" class="form__body" method="post">
        <div class="form__title">
            <h3>Page of registration!</h3>
        </div>
        <div class="form__item">
            <label for="email" class="form__label">E-mail:</label>
            <br>
            <input type="text" name="email" id="email" class="form__input" autocomplete="off">
        </div>
        <p>E-mail must look like <b>asd@asd.asd!</b></p>
        <div class="form__item">
            <label for="password" class="form__label">Password:</label>
            <br>
            <input type="password" name="password" id="password" class="form__input" autocomplete="off">
        </div>
        <p>Password must contain <b>6</b> and more symbols!</p>
        <div class="form__item">
            <label for="name" class="form__label">Name:</label>
            <br>
            <input type="text" name="name" id="name" class="form__input" autocomplete="off">
        </div>
        <div class="form__item">
            <label for="lastname" class="form__label">Last name:</label>
            <br>
            <input type="lastname" name="lastname" id="lastname" class="form__input" autocomplete="off">
        </div>       
        <button class="form__button registration">REG IN</button>
        </form>`;
        }
        this._element.append(div);

    }
}