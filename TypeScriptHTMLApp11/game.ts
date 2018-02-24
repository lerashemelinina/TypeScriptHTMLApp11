class Game {

    private _mat: Array<Array<string>>;
    
    public arrWinCase: Array<WinCase> = new Array<WinCase>();

    public constructor(mat: Array<Array<string>>) {
        this.mat = mat;
    }

    public get mat(): Array<Array<string>> {
        return this._mat;
    }

    public set mat(mat: Array<Array<string>>) {
            this._mat = mat;
        }

    public arrWinCases(mat): void {
        console.log("setting wincases");

        this.arrWinCase[0] = new WinCase(new Array<string>(mat[0][0], mat[0][1], mat[0][2]));
        this.arrWinCase[1] = new WinCase(new Array<string>(mat[1][0], mat[1][1], mat[1][2]));
        this.arrWinCase[2] = new WinCase(new Array<string>(mat[2][0], mat[2][1], mat[2][2]));
        this.arrWinCase[3] = new WinCase(new Array<string>(mat[0][0], mat[1][0], mat[2][0]));
        this.arrWinCase[4] = new WinCase(new Array<string>(mat[0][1], mat[1][1], mat[2][1]));
        this.arrWinCase[5] = new WinCase(new Array<string>(mat[0][2], mat[1][2], mat[2][2]));
        this.arrWinCase[6] = new WinCase(new Array<string>(mat[0][0], mat[1][1], mat[2][2]));
        this.arrWinCase[7] = new WinCase(new Array<string>(mat[0][2], mat[1][1], mat[2][0]));
    }



    public setBoard(str: string, num:number) {
        let count = 0;
        
        for (let i: number = 0; i < mat.length; i++) {
            for (let j: number = 0; j < mat[i].length; j++) {
                if (Number(mat[i][j]) == num) {
                    mat[i][j] = str;
                    count++;
                }
            }
        }

        if (count == 0) {
            throw new OccupiedMove();
        }

    }




    public printBoard(): string {

        let tempStr: string = "<br/>";
        for (let i: number = 0; i < this.mat.length; i++) {
            for (let j: number = 0; j < this.mat[i].length; j++) {
                tempStr += "&nbsp;" + this.mat[i][j] + "&nbsp;|";
            }
            tempStr += "<br/>----------<br/>";

        }
        return tempStr;
    }
}