const player = (sign) => {
    this.sign = sign;

    const getSign = () => { return sign }

    return { getSign };
};



const gameBoard = (() => {

    const board = ["", "", "", "", "", "", "", "", ""];

    const setField = (index, sign) => {
        if (index > board.length) return
        board[index] = sign
    }

    const getField = (index) => {
        if (index >board.length) return
        return board[index]
    }

    const reset = () => {
        for (let i = 0; i < board.length; i++)
        { board[i] = ""}
    }

    return { setField, getField, reset }
})();

const displayController = (() => {

const gridEl = document.querySelectorAll(".gridEl")

gridEl.forEach((field) => 
    field.addEventListener("click", (e) => {
    
    }))
})();


const gameController = (() => {
    
    const playerX = player("X")
    const playerO = player("O")
    let round = 1
    let isOver = false

    const playRound = (fieldIndex) => {
        gameBoard.setField(fieldIndex, getPlayerSign())
        if (checkWinner(fieldIndex)){
            
        }
    }

    const checkWinner = (fieldIndex) => {
        const winConditions = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
    ]}

})();