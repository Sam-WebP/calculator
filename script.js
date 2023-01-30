const container = document.querySelector('.container');
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.border = "solid 5px red";
//container.style.height = "100%";

const calculatorContainer = document.createElement('div');
calculatorContainer.classList.add('calculator')
calculatorContainer.style.border = "solid 3px black";
calculatorContainer.style.width = "350px";
calculatorContainer.style.minHeight = "500px";
calculatorContainer.style.margin = "10px";
calculatorContainer.style.borderRadius = "10px";
container.appendChild(calculatorContainer);

const screenContainer = document.createElement('div');
screenContainer.style.border = "solid 2px red";
screenContainer.style.margin = "7px";
screenContainer.style.borderRadius = "10px";
calculatorContainer.appendChild(screenContainer);

const equationContainer = document.createElement('div');
equationContainer.style.border = "solid 1px black";
equationContainer.style.margin = "1px";
equationContainer.style.minHeight = "25px";
equationContainer.style.borderRadius = "10px";
equationContainer.style.padding = "5px";
equationContainer.style.display = "flex";
equationContainer.style.flexWrap = "wrap-reverse";
equationContainer.style.justifyContent = "end";
equationContainer.style.alignItems = "center";
equationContainer.style.paddingRight = "10px";
screenContainer.appendChild(equationContainer);

const answerContainer = document.createElement('div');
answerContainer.style.border = "solid 1px black";
answerContainer.style.margin = "1px";
answerContainer.style.minHeight = "35px";
answerContainer.style.borderRadius = "10px";
answerContainer.style.display = "flex";
answerContainer.style.flexWrap = "wrap-reverse";
answerContainer.style.justifyContent = "end";
answerContainer.style.padding = "5px";
answerContainer.style.paddingRight = "10px";
answerContainer.style.alignItems = "center";
answerContainer.style.fontSize = "28px"
screenContainer.appendChild(answerContainer);

const buttonContainer = document.createElement('div');
buttonContainer.style.display = "flex";
buttonContainer.style.flexWrap = "wrap";
buttonContainer.style.justifyContent = "center";
buttonContainer.style.border = "solid 2px red";
buttonContainer.style.margin = "7px";
buttonContainer.style.height = "405px";
buttonContainer.style.borderRadius = "10px";
calculatorContainer.appendChild(buttonContainer);

let btnCreator = function(button, text) {
    button.style.width = "20%";
    button.style.textAlign = "center";
    button.style.border = "solid 1px black";
    button.style.borderRadius = "10px";
    button.style.margin = "5px";
    button.textContent = text;
buttonContainer.appendChild(button);
};

let multiAnswer = 0;
let typedValue = [];
let sortedTypedValue = 0;
let joinedNumbers = 0;
let answer = 0;
let arrOperate = [];
const typedV = document.createElement('div');
equationContainer.appendChild(typedV);

const typedA = document.createElement('div');
answerContainer.appendChild(typedA);

function combineNumbers(arr) {
  const combined = [];
  let currentNumber = '';
  for (const element of arr) {
    if (typeof element === 'number') {
      currentNumber += element;
    } else {
      combined.push(currentNumber);
      currentNumber = '';
      combined.push(element);
    }
  }
  // push the final number, if there is one
  if (currentNumber) {
    combined.push(currentNumber);
  }
  return combined;
}

function checkAround(arr, i, name) {
  arr.push(sortedTypedValue[i - 1]);
  arr.push(sortedTypedValue[i + 1]);
  console.log(name + arr);
};

let answerLog = [];


function appendAnswer() {
  answerLog.push(answer);
  typedV.textContent = answerLog[answerLog.length - 1] + " " + lastOperator[lastOperator.length - 1];
  typedA.textContent = answerLog[answerLog.length - 1]  
}


const multiply = function(array) {
  answer = array.reduce((total, prop) => total * prop);
  appendAnswer();
}; 

const sum = function(array) {
  if(array.length >= 1) {
    answer = array.map(a => Number(a)).reduce((total, prop) => total + prop);
    appendAnswer();
  } else {
    answer = 0;
  }
};

let stvTrack = 0;

function operate() {
  console.log("The operate function was activated when the length was " + sortedTypedValue.length); 
  if (sortedTypedValue.length === 4) {
    arrOperate = [];
    arrOperate.push(sortedTypedValue[0]);
    console.log("sortedTypedValue[0] = " + sortedTypedValue[0])
    arrOperate.push(sortedTypedValue[2]);
    console.log("sortedTypedValue[2] = " + sortedTypedValue[2])

    console.log(arrOperate); 
    console.log("Activated sortedTypedValue.length === 4")
    if (sortedTypedValue[1] === 'x') {
      multiply(arrOperate);
    } else if (sortedTypedValue[1] === '+') {
        sum(arrOperate);
    }
    // After the first calculation, when an operator is pressed
  } else if (sortedTypedValue.length > 4 && sortedTypedValue.length % 2 === 0) {
    arrOperate = [];
    stvTrack = sortedTypedValue.length;
    arrOperate.push(answer.toString());
    arrOperate.push(sortedTypedValue[stvTrack - 2]);
    console.log(arrOperate); 
    if (sortedTypedValue[sortedTypedValue.length - 3] === 'x') {
      multiply(arrOperate);
    } else if (sortedTypedValue[sortedTypedValue.length - 3] === '+') {
        sum(arrOperate);
    }
  }
}


let tvTrack = 0;
let tvNow = 0;
let altSwitch = [];
let operators = ["x", "+", "-", "/", "%"]
let lastOperator = []

function answerContainerUpdates() {
  if (sortedTypedValue.length === 1) {
    typedA.textContent = sortedTypedValue.join(' ');
  } else if (sortedTypedValue.length % 2 !== 0) {
    typedA.textContent = sortedTypedValue[sortedTypedValue.length - 1];
  } 

  // Note that the answerContainer is also updated in the operator functions when processed
}

function valueContainerUpdates() {
  if (sortedTypedValue.length === 2) { //< 4 && sortedTypedValue.length % 2 === 0
    typedV.textContent = sortedTypedValue.join(' ');
  } else if (sortedTypedValue.length === 4 && sortedTypedValue[sortedTypedValue.length - 1] === '=') {
    console.log("The current answerlog array looks like " + answerLog)
    typedV.textContent = sortedTypedValue[sortedTypedValue.length - 4] + " " + sortedTypedValue[sortedTypedValue.length - 3] + " " + sortedTypedValue[sortedTypedValue.length - 2]  + " =";
  } else if (sortedTypedValue.length > 4 && sortedTypedValue[sortedTypedValue.length - 1] === '=') {
    console.log("The current answerlog array looks like " + answerLog)
    typedV.textContent = answerLog[answerLog.length - 2] + " " + sortedTypedValue[sortedTypedValue.length - 3] + " " + sortedTypedValue[sortedTypedValue.length - 2]  + " =";
  }

  if (sortedTypedValue.length > 4 && operators.includes(sortedTypedValue[sortedTypedValue.length - 1])) {
    let operator = sortedTypedValue[sortedTypedValue.length - 1];
    let equation = answerLog[answerLog.length - 2] + " " + sortedTypedValue[sortedTypedValue.length - 3] + " " + sortedTypedValue[sortedTypedValue.length - 2]
    function endTypedA(operator) {
      console.log("THE OPERATOR CHECK WAS DONE")
      return equation + " " + operator;
    }
    
  }
  
  
  // Note that the valueContainer is also updated in the operator functions when processed
}

let storeValue = function(number) {
  typedValue.push(number);
  
  sortedTypedValue = combineNumbers(typedValue);

  console.log("sortedTypedValue length = " + sortedTypedValue.length)
  console.log("sortedTypedValue = " + sortedTypedValue)

  if (operators.includes(sortedTypedValue[sortedTypedValue.length - 1])) {
    lastOperator.push(sortedTypedValue[sortedTypedValue.length - 1]);
  }

  operate(sortedTypedValue);
  answerContainerUpdates();
  valueContainerUpdates();
  // if (sortedTypedValue.length < 2) {
    
  //   typedA.textContent = sortedTypedValue.join(' ');
 
  // } else if (sortedTypedValue.length < 4 && sortedTypedValue.length % 2 === 0) {
  //   typedV.textContent = sortedTypedValue.join(' ');

  // } else if (sortedTypedValue.length % 2 !== 0) {
  //   typedA.textContent = sortedTypedValue[sortedTypedValue.length - 1];
  // } 

};

function changeChar(operator) {
  if (sortedTypedValue > 3) {
    typedV.textContent = answerLog[answerLog.length - 1] + operator;
  }
}

let clearValue = function() {
    typedValue = [];
    typedV.textContent = typedValue.join('');
    multiAnswer = "";
    typedA.textContent = multiAnswer;
    answerLog = [];
};

let clearLastValue = function() {
    typedValue.pop();
    typedV.textContent = typedValue.join('');
};

const buttonAC = document.createElement('btn');
btnCreator(buttonAC, "AC");
buttonAC.addEventListener('click', function() {
    clearValue();
  });

const buttonC = document.createElement('btn');
btnCreator(buttonC, "C");
buttonC.addEventListener('click', function() {
    clearLastValue();
  });

const buttonPercent = document.createElement('btn');
btnCreator(buttonPercent, "%");
buttonPercent.addEventListener('click', function() {
    storeValue("%");
    sortedTypedValue = combineNumbers(typedValue)
    operate(sortedTypedValue);
  });

const buttonDivide = document.createElement('btn');
btnCreator(buttonDivide, "/");
buttonDivide.addEventListener('click', function() {
    storeValue("/");
    sortedTypedValue = combineNumbers(typedValue)
  });

const buttonSeven = document.createElement('btn');
btnCreator(buttonSeven, "7");
buttonSeven.addEventListener('click', function() {
    storeValue(7);
  });

const buttonEight = document.createElement('btn');
btnCreator(buttonEight, 8);
buttonEight.addEventListener('click', function() {
    storeValue(8);
  });

const buttonNine = document.createElement('btn');
btnCreator(buttonNine, "9");
buttonNine.addEventListener('click', function() {
    storeValue(9);
  });

const buttonPlus = document.createElement('btn');
btnCreator(buttonPlus, "+");
buttonPlus.addEventListener('click', function() {
    storeValue("+");
    changeChar(" + ");
  });

const buttonFour = document.createElement('btn');
btnCreator(buttonFour, "4");
buttonFour.addEventListener('click', function() {
    storeValue(4);
  });

const buttonFive = document.createElement('btn');
btnCreator(buttonFive, "5");
buttonFive.addEventListener('click', function() {
    storeValue(5);
  });

const buttonSix = document.createElement('btn');
btnCreator(buttonSix, "6");
buttonSix.addEventListener('click', function() {
    storeValue(6);
  });

const buttonSubtract = document.createElement('btn');
btnCreator(buttonSubtract, "-");
buttonSubtract.addEventListener('click', function() {
    storeValue("-");
    sortedTypedValue = combineNumbers(typedValue)
    operate(sortedTypedValue);
  });

const buttonOne = document.createElement('btn');
btnCreator(buttonOne, "1");
buttonOne.addEventListener('click', function() {
    storeValue(1);
  });

const buttonTwo = document.createElement('btn');
btnCreator(buttonTwo, "2");
buttonTwo.addEventListener('click', function() {
    storeValue(2);
  });

const buttonThree = document.createElement('btn');
btnCreator(buttonThree, "3");
buttonThree.addEventListener('click', function() {
    storeValue(3);
  });

const buttonMultiply = document.createElement('btn');
btnCreator(buttonMultiply, "x");
buttonMultiply.addEventListener('click', function() {
    storeValue("x");
    //typedV.textContent = answerLog[answerLog.length - 1] + " x ";
  });

const buttonZero = document.createElement('btn');
btnCreator(buttonZero, "0");
buttonZero.addEventListener('click', function() {
    storeValue(0);
  });

const buttonPoint = document.createElement('btn');
btnCreator(buttonPoint, ".");
buttonPoint.addEventListener('click', function() {
    storeValue(".");
    sortedTypedValue = combineNumbers(typedValue)
    operate(sortedTypedValue);
  });

const buttonEqual = document.createElement('btn');
btnCreator(buttonEqual, "=");
buttonEqual.style.width = "44%";
buttonEqual.addEventListener('click', function() {
    storeValue("=");
    
    // if (sortedTypedValue.length > 4) {
    //   typedV.textContent = answerLog + " " + sortedTypedValue[sortedTypedValue.length - 3] + " " + sortedTypedValue[sortedTypedValue.length - 2]  + " =";
    // } else {
    //   typedV.textContent = sortedTypedValue.join(' ');
    // }
    
  });























