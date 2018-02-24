var Game = /** @class */ (function () {
    function Game(mat) {
        this.arrWinCase = new Array();
        this.mat = mat;
    }
    Object.defineProperty(Game.prototype, "mat", {
        get: function () {
            return this._mat;
        },
        set: function (mat) {
            this._mat = mat;
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.arrWinCases = function (mat) {
        console.log("setting wincases");
        this.arrWinCase[0] = new WinCase(new Array(mat[0][0], mat[0][1], mat[0][2]));
        this.arrWinCase[1] = new WinCase(new Array(mat[1][0], mat[1][1], mat[1][2]));
        this.arrWinCase[2] = new WinCase(new Array(mat[2][0], mat[2][1], mat[2][2]));
        this.arrWinCase[3] = new WinCase(new Array(mat[0][0], mat[1][0], mat[2][0]));
        this.arrWinCase[4] = new WinCase(new Array(mat[0][1], mat[1][1], mat[2][1]));
        this.arrWinCase[5] = new WinCase(new Array(mat[0][2], mat[1][2], mat[2][2]));
        this.arrWinCase[6] = new WinCase(new Array(mat[0][0], mat[1][1], mat[2][2]));
        this.arrWinCase[7] = new WinCase(new Array(mat[0][2], mat[1][1], mat[2][0]));
    };
    Game.prototype.setBoard = function (str, num) {
        var count = 0;
        for (var i = 0; i < mat.length; i++) {
            for (var j = 0; j < mat[i].length; j++) {
                if (Number(mat[i][j]) == num) {
                    mat[i][j] = str;
                    count++;
                }
            }
        }
        if (count == 0) {
            throw new OccupiedMove();
        }
    };
    Game.prototype.printBoard = function () {
        var tempStr = "<br/>";
        for (var i = 0; i < this.mat.length; i++) {
            for (var j = 0; j < this.mat[i].length; j++) {
                tempStr += "&nbsp;" + this.mat[i][j] + "&nbsp;|";
            }
            tempStr += "<br/>----------<br/>";
        }
        return tempStr;
    };
    return Game;
}());
//# sourceMappingURL=game.js.map