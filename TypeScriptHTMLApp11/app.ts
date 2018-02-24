
let mat: string[][] = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"]

]

let game: Game = new Game(mat);
let playerButton: string = ' <button onclick="nextTurn()">click me</button>';
let count: number = 0;
document.write(`${game.printBoard()}`);


function nextTurn(): void {

    if (count % 2 == 0) {

        try {
           
            var num: number = Number(prompt("Enter your move:"));
            let playerMove: PlayerMove = new PlayerMove(num, mat);
            game.setBoard("X", num);
          

        }
        catch (err) {
            count--;
            alert("Error: " + err.message+ "\n" + "Error Name: " + err.name);
        }
       
    }
    else if (count % 2 == 1) {
       
        let temp: string = getCompMove(mat);
        if (temp) {
                game.setBoard("O", Number(temp));
     
        }

        else {
           
            do {
                var x1: number = Math.round(Math.random() * 2);
                var x2: number = Math.round(Math.random() * 2);
            }
            while (mat[x1][x2] == "X" || mat[x1][x2] == "O");

            game.setBoard("O", Number(mat[x1][x2]));
            

        }
   
        
    }
   
    game.arrWinCases(mat);

    for (let i: number = 0; i < game.arrWinCase.length; i++) {

        let temp: string = game.arrWinCase[i].checkIfWins();

        if (temp) {
            alert(temp);
            playerButton = ' <button onclick">click me</button>';
        }
    }

    count++;

    if (count == 9) {
        alert("Teko");
        playerButton = ' <button onclick">click me</button>'
    }

    document.write(`${game.printBoard()}  ${playerButton}`);
  
   
}



function getCompMove(mat: Array<Array<string>>): string {
   
    game.arrWinCases(mat);

    for (let i: number = 0; i < game.arrWinCase.length; i++) {

        let temp: string = game.arrWinCase[i].calcComputerMove();

        if (temp) {
            return temp;
        }
    }
    return undefined;
}

  



 






