var mat = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"]
];
var game = new Game(mat);
var playerButton = ' <button onclick="nextTurn()">click me</button>';
var count = 0;
document.write("" + game.printBoard());
function nextTurn() {
    if (count % 2 == 0) {
        try {
            var num = Number(prompt("Enter your move:"));
            var playerMove = new PlayerMove(num, mat);
            game.setBoard("X", num);
        }
        catch (err) {
            count--;
            alert("Error: " + err.message + "\n" + "Error Name: " + err.name);
        }
    }
    else if (count % 2 == 1) {
        var temp = getCompMove(mat);
        if (temp) {
            game.setBoard("O", Number(temp));
        }
        else {
            do {
                var x1 = Math.round(Math.random() * 2);
                var x2 = Math.round(Math.random() * 2);
            } while (mat[x1][x2] == "X" || mat[x1][x2] == "O");
            game.setBoard("O", Number(mat[x1][x2]));
        }
    }
    game.arrWinCases(mat);
    for (var i = 0; i < game.arrWinCase.length; i++) {
        var temp = game.arrWinCase[i].checkIfWins();
        if (temp) {
            alert(temp);
            playerButton = ' <button onclick">click me</button>';
        }
    }
    count++;
    if (count == 9) {
        alert("Teko");
        playerButton = ' <button onclick">click me</button>';
    }
    document.write(game.printBoard() + "  " + playerButton);
}
function getCompMove(mat) {
    game.arrWinCases(mat);
    for (var i = 0; i < game.arrWinCase.length; i++) {
        var temp = game.arrWinCase[i].calcComputerMove();
        if (temp) {
            return temp;
        }
    }
    return undefined;
}
//# sourceMappingURL=app.js.map