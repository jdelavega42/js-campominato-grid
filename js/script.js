const difficulty = document.getElementById('difficulty')
const play = document.getElementById('play');
const grid = document.querySelector('.container');

play.addEventListener("click", function(){
    const mode = difficulty.value;
    const numberOfSquares = squareRegulator(mode);
    const numbers = myArrayGenerator(numberOfSquares);
    grid.innerHTML= '';
    for (let i = 0; i < numbers.length; i++){
        const currentNumber = numbers[i];
        const newGrid = boxGenerator(currentNumber);
        newGrid.addEventListener("click", handleDivClick);
        grid.append(newGrid);
        console.log(newGrid);
    }
    // grillRegulator();
})

// !FUNCTIONS
// #@general
function myArrayGenerator(totalSquare){
    const myArray = [];
    for(let i = 1; myArray.length < totalSquare; i++) {
        const myNumber = i;
        myArray.push(myNumber);
    }
    return myArray;
}


function squareRegulator(anyMode){
    if(anyMode === 'easy'){
        anyMode = 100;
    } else if( anyMode === 'medium'){
        anyMode = 81;
    } else if (anyMode === 'hard'){
        anyMode = 49;
    }
    return anyMode;
}
// @dom related function

function boxGenerator(content){
    const mode = difficulty.value;
    const dif = grillRegulator(mode)
    const newDiv = document.createElement("div");
    newDiv.classList.add("box", dif);
    newDiv.innerHTML = `<span>${content}</span>`;
    return newDiv;
}

function handleDivClick(){
    console.log(this.textContent);
    this.classList.add("azure");
}

function grillRegulator(anyItem){
    let columns = '';
    if(anyItem === "easy") {
        columns = "column10"
    } else if (anyItem === "medium"){
        columns = "column9"
    } else if (anyItem === "hard"){
        columns = "column7"
    }
    return columns;

}