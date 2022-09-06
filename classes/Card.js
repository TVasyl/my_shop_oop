class Card {
    constructor() {
        this._classCard = "card";
        this._classButton = "card__button";
    }

    setCardName(name) {
        this._name = name;
    }
    
    setCardImage(image) {
        this._image = image;
    }
    
    setCardPrice(price) {
        this._price = price;
    }

    
    setClassOfCard(classCard){
        this._classCard = classCard;
    }

    setClassOfButtonBin(classButton){
        this._classButton = classButton;
    }

    setElement(element) {
        this._element = element;
    }

    //############## Fill the card #####################

    createName(){
        let div = document.createElement('div');
        div.classList.add("goodes-name");
        div.innerHTML = `<h2>${this._name}</h2>`;

        return div;
    }

    createFoto(){
        let div = document.createElement('div');
        div.classList.add("goodes-foto");
        div.innerHTML = `<img src="${this._image}" alt="icon-1" height="100px">`;

        return div;
    }

    createPrise(){
        let div = document.createElement('div');
        div.classList.add("goodes-price");
        div.innerHTML = `<h2>${this._price} HRN</h2>`;

        return div;
    }

    createButton(title, buttonStyle){
        let div = document.createElement('div');
        div.classList.add("card__button");
        
        let button = document.createElement('button');
        button.classList.add(buttonStyle);
        button.innerHTML = title;  
        div.append(button);

        return div;
    }

    // ################## Render the cadrds of goodes in the page #############

    render(){
        //this._element.classList.add('.main__contant .goodes')
        let div = document.createElement('div');
        div.classList.add(this._classCard);

        div.append(this.createName());
        div.append(this.createFoto());
        div.append(this.createPrise());
        div.append(this.createButton('BAY', "button-to-bin"));


        this._element.append(div);
    }
}