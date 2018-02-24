class OccupiedMove extends Error {

    constructor() {
        super();
        this.message = "Error. please enter a non-occupied number ";
        this.name = "OccupiedMove";
       
    }


}