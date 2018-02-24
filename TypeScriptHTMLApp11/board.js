var Board = /** @class */ (function () {
    function Board(mat) {
        this.mat = mat;
        document.write("new board");
    }
    Object.defineProperty(Board.prototype, "mat", {
        get: function () {
            return this._mat;
        },
        set: function (mat) {
            this._mat = mat;
        },
        enumerable: true,
        configurable: true
    });
    Board.prototype.printBoard = function () {
        var tempStr = "<br/>";
        for (var i = 0; i < this.mat.length; i++) {
            for (var j = 0; j < this.mat[i].length; j++) {
                tempStr += "&nbsp;" + this.mat[i][j] + "&nbsp;|";
            }
            tempStr += "<br/>----------<br/>";
        }
        return (tempStr);
    };
    return Board;
}());
//# sourceMappingURL=board.js.map