var Game = /** @class */ (function () {
    function Game(mat) {
        this.mat = mat;
        document.write("new board");
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
    Game.prototype.setBoard = function (str, num) {
        var count = 0;
        for (var i = 0; i < mat.length; i++) {
            for (var j = 0; j < mat[i].length; j++) {
                if (Number(mat[i][j]) == num) {
                    mat[i][j] = "X";
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
        return (tempStr);
    };
    Game.countMove = 0;
    return Game;
}());
//# sourceMappingURL=move.js.map