class NotNumber extends Error {

    constructor() {
        super();
        this.message = "Error. please enter a number";
        this.name = "NAN";
        
    }


}