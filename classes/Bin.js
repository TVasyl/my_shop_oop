class Bin {
    constructor() {
        this. _element = "main__contant";
        this._title;
        this._image;
        this._price;
        this._count;
        this._articul;
        this.classContant = "bin-contant";
    }

    setElement(element) {
        this._element = element;

        return true;
    }
    setTitle(title) {
        this._title = title;

        return true;
    }
    setImage(image) {
        this._image = image;

        return true;
    }
    setPrice(price) {
        this._price = price;

        return true;
    }
    setCount(count) {
        this._count = count;

        return true;
    }
    setArticul(articul) {
        this._articul = articul;

        return true;
    }

    /**
     * Method for create counters of goodes near BIN button
     */
    setNumberOfGoodes (){
        let count = null;
    
        if(localStorage.getItem('cart')){
            const binData = JSON.parse(localStorage.getItem('cart'));
            for(let item in binData) {
                count += binData[item]['count'];
            }
            this.setCount;
        }
        this.setCount;

        return count;
    }

    /**
     * 
     * @returns Number
     */
    createAmount(){
        let result = 0;
        if(localStorage.getItem('cart')){
            const binData = JSON.parse(localStorage.getItem('cart'));
            for(let item in binData) {
                result += binData[item]['count'] * binData[item].price;
            }
        }
        
        return result;
    }

    /**
     * Method for create items in bin with functions
     * @param {*} articul 
     * @returns "div" tag 
     */
    createItems(articul) {
        let div = document.createElement('div');
        div.classList.add('bin__items');

        let divImage = document.createElement('div');
        divImage.classList.add("bin__image");
        divImage.innerHTML = `<img src="${this._image}" alt="icon" height="100px"/>`;
        div.append(divImage);

        let divDescribe = document.createElement('div');
        divDescribe.classList.add("bin-describe");

        let divTitle = document.createElement('div');
        divTitle.classList.add("bin__name");
        divTitle.innerHTML = `<h2>${this._title}</h2>`;
        divDescribe.append(divTitle);
        
        let divFunction = document.createElement('div');
        divFunction.classList.add("bin-function");
        divFunction.innerHTML = 
        `<button class="operation__button delete" data-articul="${articul}">X</button>
        <div class="amaunt">${this._price} HRN</div>
        <button class="operation__button minus" data-articul="${articul}">-</button>
        <div class="bin-count">${this._count}</div>
        <button class="operation__button plus" data-articul="${articul}">+</button>`;
        divDescribe.append(divFunction);

        div.append(divDescribe);

        return div;
    }

    /**
     * Method for create sum all goods in the bin from class Bin
     * @returns - "div" with button 'clear', sum and button "to order"
     */
    createTotal() {
        let div = document.createElement('div');
        div.classList.add("bin__total");
        div.innerHTML = 
        `<button class="bin__button clean">Clear</button>
        <div class="bin__result">
            <div class="amaunt">${this.createAmount()} HRN</div>
            <button class="bin__button to-order">To order</button>
        </div>`;

        return div;
    }

    render(binData){

        let div = document.createElement('div');
        div.classList.add(this.classContant);
        this.setElement(mainContent);
        
        for (const items in binData) {            
            this.setTitle(binData[items].name);
            this.setImage(binData[items].image);
            this.setPrice(binData[items].price);
            this.setCount(binData[items]["count"]);
            this.setArticul(items);           

            div.append(this.createItems(items));            
        }

        div.append(this.createTotal());
        
        this._element.append(div);
    }
}