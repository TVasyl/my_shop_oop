class Home extends Card {    
    
    render(advertising) {
        for(let items in advertising) {
            this.setCardName(advertising[items]["title"]);
            this.setCardImage(advertising[items]["image"]);
            this.setClassOfCard(advertising[items]["style"]);
            this.setElement(mainContent);

            let div = document.createElement('div');
            div.classList.add(this._classCard);

            div.append(this.createName(this._name, "goodes-name"));
            div.append(this.createImage(this._image, "goodes-foto"));

            this._element.append(div);
        }

        
    }
}