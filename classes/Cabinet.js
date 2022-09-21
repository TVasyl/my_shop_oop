class Cabinet {
    render(articul) {
        if (localStorage.getItem(articul)) {
            const user = JSON.parse(localStorage.getItem(articul));
            let div = document.createElement('div');
            div.classList.add('form');
            div.classList.add('cabinet-correct');
            div.innerHTML = 
            `<div class="form__cabinet"> 
            <h3>
            Dear <span>${user['name']} ${user['lastname']}</span>!<br> Now you can to order all the goods which contain in the bin of this website!
            </h3>
            </div>
            <div>
            <h2>Have a nice shopping!!!</h2>
            </div>`;

            document.querySelector('.main__contant').append(div);
        }
        
        
    }
}