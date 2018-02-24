var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ComputerMove = /** @class */ (function (_super) {
    __extends(ComputerMove, _super);
    function ComputerMove(mat) {
        var _this = _super.call(this, mat) || this;
        _this.arrWinCase = new Array();
        Game.countMove++;
        return _this;
    }
    ComputerMove.prototype.arrWinCases = function () {
        console.log("setting wincases");
        this.arrWinCase[0] = new WinCase(new Array(this.mat[0][0], this.mat[0][1], this.mat[0][2]));
        this.arrWinCase[1] = new WinCase(new Array(this.mat[1][0], this.mat[1][1], this.mat[1][2]));
        this.arrWinCase[2] = new WinCase(new Array(this.mat[2][0], this.mat[2][1], this.mat[2][2]));
        this.arrWinCase[3] = new WinCase(new Array(this.mat[0][0], this.mat[1][0], this.mat[2][0]));
        this.arrWinCase[4] = new WinCase(new Array(this.mat[0][1], this.mat[1][1], this.mat[2][1]));
        this.arrWinCase[5] = new WinCase(new Array(this.mat[0][2], this.mat[1][2], this.mat[2][2]));
        this.arrWinCase[6] = new WinCase(new Array(this.mat[0][0], this.mat[1][1], this.mat[2][2]));
        this.arrWinCase[7] = new WinCase(new Array(this.mat[0][2], this.mat[1][1], this.mat[2][0]));
    };
    return ComputerMove;
}(Game));
//# sourceMappingURL=computerMove.js.map