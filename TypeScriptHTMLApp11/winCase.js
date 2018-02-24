var WinCase = /** @class */ (function () {
    function WinCase(arr) {
        this.arr = arr;
    }
    Object.defineProperty(WinCase.prototype, "arr", {
        get: function () {
            return this._arr;
        },
        set: function (arr) {
            this._arr = arr;
        },
        enumerable: true,
        configurable: true
    });
    WinCase.prototype.checkIfWins = function () {
        var countX = 0;
        var countO = 0;
        for (var i = 0; i < this.arr.length; i++) {
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
    };
    WinCase.prototype.calcComputerMove = function () {
        var countX = 0;
        var countO = 0;
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i] == "X") {
                countX++;
            }
            else if (this.arr[i] == "O") {
                countO++;
            }
            if (countO == 2 || countX == 2) {
                for (var i_1 = 0; i_1 < this.arr.length; i_1++) {
                    if (this.arr[i_1] != "O" && this.arr[i_1] != "X") {
                        return this.arr[i_1];
                    }
                }
            }
        }
        return undefined;
    };
    return WinCase;
}());
//# sourceMappingURL=winCase.js.map