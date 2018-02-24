class NotInRange extends Error{

    constructor() {
        super();     
        this.message = "Error. enter a number between 1 to 9";
        this.name = "NotInRangeError";
        
    }


}