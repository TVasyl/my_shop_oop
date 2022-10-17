class Card {

    constructor() {
        this._classCard = "card";
        this._classButton = "card__button";
        this. _element = "main__contant";
        this._attribute;
    }

    /**
     * Method for set name of cards
     * @param Sring - name 
     * @returns boolen
     */
    setCardName(name) {
        this._name = name; 

        return true;
    }
    
    /**
     * Method for set image of cards
     * @param String - path to image
     * @returns boolen
     */
    setCardImage(image) {
        this._image = image;

        return true;
    }
    

    /**
     * Method for set price of goodes
     * @param Nomber price 
     * @returns boolen
     */
    setCardPrice(price) {
        this._price = price;

        return true;
    }

    /**
     * Method for set class of CSS for cards
     * @param String - class of style CSS
     * @returns boolen
     */
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

    setAttribute(attribute) {
        this._attribute = attribute;
    }

    //############## Fill the card #####################

    /**
     * 
     * Method for create name or title some div
     * @returns 'div' with h2 tag name and class of style from arguments
     * @param String - what you wont to write into tag 'h2'
     * @param String - class of style CSS
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
     * @returns 'div' which contaice teg 'img' with src- parametr and style css class from arguments
     * @param String - path to image
     * @param String - class of style CSS
     */
    createImage(src, classCss){
        let div = document.createElement('div');
        div.classList.add(classCss);
        div.innerHTML = `<img src="${src}" alt="icon" height="150px"/>`;

        return div;
    }

    /**
     * 
     * Method for create price of goodes
     * @param Number - price of goodes
     * @param String - CSS style class of price 'div'
     * @returns 'div' with 'h2' tag 'name' + currency and class of style from arguments
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
     * @param String title - title of button
     * @param String buttonStyle - style css class of button
     * @returns 'div' which containce 'button' tag with CSS style
     */
    createButton(title, buttonStyle){
        let div = document.createElement('div');
        div.classList.add("card__button");
        
        let button = document.createElement('button');
        button.classList.add(buttonStyle);
        button.setAttribute('data-articul', this._attribute);
        button.innerHTML = title;  
        div.append(button);

        return div;
    }

    // ################## Render the cadrds of goodes in the page #############
    render(data){
        for(let items in data) {
            this.setCardName(data[items].name);
            this.setCardImage(data[items].image);
            this.setCardPrice(data[items].price);
            this.setElement(mainContent);
            this.setAttribute(items);

            let div = document.createElement('div');
            div.classList.add(this._classCard);

            div.append(this.createName(this._name, "goodes-name"));
            div.append(this.createImage(this._image, "goodes-image"));
            div.append(this.createPrise(this._price, "goodes-price"));
            div.append(this.createButton('BAY', "button-to-bin"));

            this._element.append(div);
        }
    }
}