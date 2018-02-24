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
var PlayerMove = /** @class */ (function (_super) {
    __extends(PlayerMove, _super);
    function PlayerMove(num, mat) {
        var _this = _super.call(this, mat) || this;
        _this.num = num;
        return _this;
    }
    Object.defineProperty(PlayerMove.prototype, "num", {
        get: function () {
            return this._num;
        },
        set: function (num) {
            if (num > 9 || num < 1) {
                throw new NotInRange();
            }
            else if (isNaN(num)) {
                throw new NotNumber();
            }
            this._num = num;
        },
        enumerable: true,
        configurable: true
    });
    return PlayerMove;
}(Game));
//# sourceMappingURL=playerMove.js.map