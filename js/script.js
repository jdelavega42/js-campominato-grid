const difficultyInput = document.getElementById('difficulty')
const play = document.getElementById('play');
const container = document.querySelector('.container');

play.addEventListener("click", function(){
    const difficulty = difficultyInput.value;
    const gridValues = gridValuesGenerator(difficulty);
    const boxNumber = gridValues[0];
    const boxColumn = gridValues[1];
    console.log(boxNumber, boxColumn);
    container.innerHTML= '';
    gridGenerator(boxNumber, boxColumn);
    addFunctionToQuerySelectorAll('div.box', handleDivClick);
})

// !FUNCTIONS
// #@general
function gridValuesGenerator(anyMode){
    const modeArray = [];
    let boxNumber = '';
    let boxColumn = '';
        if (anyMode === 'easy'){
            boxNumber = 100;
            boxColumn = "column10"

    } else if ( anyMode === 'medium'){
        boxNumber = 81;
        boxColumn = "column9"
    } else if (anyMode === 'hard'){
        boxNumber = 49;
        boxColumn = "column7"
    }
    modeArray.push(boxNumber, boxColumn)
    return modeArray;
}

function gridGenerator (generalNumber, generalColumn){
    for (let i = 1; i <= generalNumber; i++){
        const grid = gridBoxGenerator(i, generalColumn)
        container.append(grid);
    }
}

function gridBoxGenerator(generalContent, generalColumn){
    const item = document.createElement("div");
    const itemContent = document.createElement("span");
    const content = generalContent;
    item.classList.add("box", generalColumn);
    item.appendChild(itemContent);
    itemContent.innerText = content;
    return item;    
}

// @dom related function
function handleDivClick(){
    console.log(this.textContent);
    this.classList.add("azure");
}

function addFunctionToQuerySelectorAll(genericElement, genericFunction){
    const elementArray = document.querySelectorAll(genericElement);
    for (i = 0; i < elementArray.length; i++){
        const currentElement = elementArray[i];
        currentElement.addEventListener("click", genericFunction)
    }
}