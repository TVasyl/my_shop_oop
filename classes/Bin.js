class Bin {
    constructor() {
        this. _element = "main__contant";
        this._title;
        this._image;
        this._price;
        this._count;
        this._attribute;
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
    setAttribute(attribute) {
        this._attribute = attribute;

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
            this.setCount; //Можливо можна використати setCount
        }
        
        this.setCount; //Можливо можна використати setCount
        
        return count;
    }

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

    createItams() {
        let div = document.createElement('div');
        div.classList.add('bin__items');

        let divImage = document.createElement('div');
        divImage.classList.add("bin__image");
        divImage.innerHTML = `<img src="${this._image}" alt="icon" height="100px" >`;
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
        `<div class="amaunt">${this._price} HRN</div>
        <button class="operation__button minus">-</button>
        <div class="bin-count">${this._count}</div>
        <button class="operation__button plus">+</button>`;
        divDescribe.append(divFunction);

        div.append(divDescribe);

        


        return div;
    }

    createTotal() {
        let div = document.createElement('div');
        div.classList.add("bin__total");
        div.innerHTML = 
        `<button class="bin__button delete">Clear</button>
        <div class="bin__result">
            <div class="amaunt">${this.createAmount()} HRN</div>
            <button class="bin__button to-order">To order</button>
        </div>`;

        return div;
    }

    render(binData){
        
        let div = document.createElement('div');
        div.classList.add(this.classContant);

        
        
        
        for (const items in binData) {
            this.setElement(mainContent);
            this.setTitle(binData[items].name);
            this.setImage(binData[items].image);
            this.setPrice(binData[items].price);
            this.setCount(binData[items]["count"]);
            this.setAttribute(items);

            

            div.append(this.createItams());
            
        }

        div.append(this.createTotal());
        
        this._element.append(div);
    }
}