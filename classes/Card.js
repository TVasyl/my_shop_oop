class Card {
    constructor() {
        this._classCard = "card";
        this._classButton = "card__button";
    }

    /**
     * 
     * @param {name} name 
     * Method for set name of cards
     */

    setCardName(name) {
        this._name = trim.name; // nedd to check for valide of method 'trim'

        return true;
    }
    
    /**
     * 
     * @param {image} image
     * Method for set image of cards
     */
    setCardImage(image) {
        this._image = image;

        return true;
    }
    
    setCardPrice(price) {
        this._price = price;

        return true;
    }

    
    setClassOfCard(classCard){
        this._classCard = classCard;

        return true;
    }

    setClassOfButtonBin(classButton){
        this._classButton = classButton;

        return true;
    }

    setElement(element) {
        this._element = element;

        return true;
    }

    //############## Fill the card #####################


    /**
     * 
     * Method for create name or title some div
     * @returns div with h2 tag name and class of style from arguments
     */
    createName(name, classCss){
        let div = document.createElement('div');
        div.classList.add(classCss);
        div.innerHTML = `<h2>${name}</h2>`;

        return div;
    }


    /**
     * 
     * Metho for create image
     * @returns div which contaice teg 'img' with src- parametr and style css class from arguments
     */
    createFoto(src, classCss){
        let div = document.createElement('div');
        div.classList.add(classCss);
        div.innerHTML = `<img src="${src}" alt="icon" height="100px">`;

        return div;
    }


    /**
     * 
     * Method for create price of goodes
     * @param price - price of goodes
     * @param classCss - CSS style class of price 'div'
     * @returns div with 'h2' tag 'name' + currency and class of style from arguments
     */
    createPrise(price, classCss){
        let div = document.createElement('div');
        div.classList.add(classCss);
        div.innerHTML = `<h2>${price} HRN</h2>`;

        return div;
    }


    /**
     * 
     * Method for create button
     * @param {title} title - title of button
     * @param {buttonStyle} buttonStyle - style css class of button
     * @returns 'div' which containce 'button' tag with CSS style
     */
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

        div.append(this.createName(this._name, "goodes-name"));
        div.append(this.createFoto(this._image, "goodes-foto"));
        div.append(this.createPrise(this._price, "goodes-price"));
        div.append(this.createButton('BAY', "button-to-bin"));


        this._element.append(div);
    }
}