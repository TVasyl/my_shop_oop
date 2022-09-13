class Bin {
    constructor(items, name, image, price, count) {
        this. _element = "main__contant";
        this._count;
    }

    setElement(element) {
        this._element = element;

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
            this._count = count;
        }
        document.querySelector('.bin-fill').innerHTML = count;
        this._count = count;
        
    }

    render(binData){
        this.setElement(mainContent);


        let div = document.createElement('div');
        if(this._count !== null) {
            div.innerHTML = `<h1>Your bin has ${this._count} item!!!</h1>`;
        }
        console.log(this._count); 
        

        this._element.append(div);

    }
}