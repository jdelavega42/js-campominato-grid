const difficulty = document.getElementById('difficulty')
const play = document.getElementById('play');
const grid = document.querySelector('.container');

play.addEventListener("click", function(){
    const mode = difficulty.value;
    const numberOfSquares = squareRegulator(mode);
    const numbers = myArrayGenerator(numberOfSquares);
    for (let i = 0; i < numbers.length; i++){
        const currentNumber = numbers[i];
        const newBox = boxGenerator(currentNumber);
        newBox.addEventListener("click", handleDivClick);
        grid.append(newBox);
    }
})

// !FUNCTIONS
// #@general
function myArrayGenerator(totalSquare){
    const myArray = [];
    for(let i = 0; myArray.length < totalSquare; i++) {
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
    const newDiv = document.createElement("div");
    newDiv.classList.add("box");
    newDiv.innerHTML = `<span>${content}</span>`;
    return newDiv;
}

function handleDivClick(){
    this.classList.add("azure");
}