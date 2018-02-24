class PlayerMove extends Game {
    private _num: number;
    
    public constructor(num: number, mat: Array<Array<string>>) {
        super(mat);
        this.num = num;
         
    }


    public get num(): number {
        return this._num;
    }


    public set num(num: number) {

        if (num > 9 || num < 1) {
            throw new NotInRange();
        }
        else if (isNaN(num)) {
            throw new NotNumber();
        }
    this._num = num;   
    }

    

    }



