class Bin {
    constructor() {
        this. _element = "main__contant";
    }

    setElement(element) {
        this._element = element;

        return true;
    }

    render(){
        this.setElement(mainContent);

        let div = document.createElement('div');
        div.innerHTML = `<h1>Your bin is empty!!!</h1>`;

        this._element.append(div);

    }
}