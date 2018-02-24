class WinCase {

    private _arr: Array<string>;

    public constructor(arr: Array<string>) {
        this.arr = arr;
    }


    public get arr(): Array<string> {
        return this._arr;
    }

    public set arr(arr: Array<string>) {
        this._arr = arr;
    }

    public checkIfWins(): string {
        let countX: number = 0;
        let countO: number = 0;
        for (let i: number = 0; i < this.arr.length; i++) {
            if (this.arr[i] == "X") {
                countX++;
            }
            else if (this.arr[i] == "O") {
                countO++;
            }
        }

        if (countX == 3) {
            return "You Win!!!";
        }
        else if (countO == 3) {
            return "Computer Win!!!!";
        }
        else {
            return undefined;
        }

    }


public calcComputerMove(): string {
        let countX: number = 0;
        let countO: number = 0;

        for (let i: number = 0; i < this.arr.length; i++) {
            if (this.arr[i] == "X") {
                countX++;
            }
            else if (this.arr[i] == "O") {
                countO++;
            }

            if (countO == 2 || countX == 2) {

                for (let i: number = 0; i < this.arr.length; i++) {
                    if (this.arr[i] != "O" && this.arr[i] != "X") {
                        return this.arr[i];
                    }
                }
            }

            }
        
        return undefined;


    }
}
    
            

