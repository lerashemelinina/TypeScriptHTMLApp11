var PlayerMove = /** @class */ (function () {
    function PlayerMove(num, mat) {
        this.num = num;
        this.mat = mat;
        document.write('new move');
    }
    Object.defineProperty(PlayerMove.prototype, "num", {
        get: function () {
            return this._num;
        },
        set: function (num) {
            if (num >= 1 && num <= 9) {
                this._num = num;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerMove.prototype, "mat", {
        get: function () {
            return this._mat;
        },
        set: function (mat) {
            for (var i = 0; i < mat.length; i++) {
                for (var j = 0; j < mat[i].length; j++) {
                    if (Number(mat[i][j]) == this.num) {
                        mat[i][j] = "X";
                    }
                }
                this._mat = mat;
            }
        },
        enumerable: true,
        configurable: true
    });
    return PlayerMove;
}());
//# sourceMappingURL=player.js.map