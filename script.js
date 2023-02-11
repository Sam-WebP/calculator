document.body.style.backgroundImage = "url(https://deep-image.ai/blog/content/images/2022/09/a-beautiful-nebula-in-outer-space-kayptz4d.jpeg)";
document.body.style.backgroundSize = "cover";

const container = document.querySelector('.container');
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.margin = "auto";
//container.style.backdropFilter = "blur(5px)";
container.style.height = "530px";
container.style.width = "350px";
container.style.position = "absolute";
container.style.top = "50%";
container.style.left = "50%";
container.style.transform = "translate(-50%, -50%)";
container.style.border = "dotted 1px white";
container.style.borderRadius = "20px";


const calculatorContainer = document.createElement('div');
calculatorContainer.classList.add('calculator')
//calculatorContainer.style.border = "dotted 1px white";
calculatorContainer.style.width = "350px";
calculatorContainer.style.minHeight = "500px";
calculatorContainer.style.margin = "10px";
calculatorContainer.style.borderRadius = "10px";
//calculatorContainer.style.background = "#220b1a"; 
//calculatorContainer.style.background = "linear-gradient(to bottom, #220b1a 0%, #808080 200%)";
container.style.backdropFilter = "blur(50px)";
container.appendChild(calculatorContainer);

const screenContainer = document.createElement('div');
screenContainer.style.border = "solid 1px white";
screenContainer.style.margin = "7px";
screenContainer.style.borderRadius = "10px";
screenContainer.style.backdropFilter = "blur(100px)";
calculatorContainer.appendChild(screenContainer);

const equationContainer = document.createElement('div');
//equationContainer.style.border = "solid 1px black";
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
//answerContainer.style.border = "solid 1px black";
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
//buttonContainer.style.border = "solid 2px white";
buttonContainer.style.margin = "7px";
buttonContainer.style.marginLeft = "0px";
buttonContainer.style.marginRight = "0px";
buttonContainer.style.height = "405px";
buttonContainer.style.borderRadius = "10px";
calculatorContainer.appendChild(buttonContainer);

// let btnCreator = function(button, text) {
//   button.style.width = "20%";
//   button.style.display = "flex";
//   button.style.justifyContent = "center";
//   button.style.alignItems = "center";
//   button.style.textAlign = "center";
//   button.style.border = "solid 1px white";
//   container.style.color = "white";
//   button.style.borderRadius = "10px";
//   button.style.margin = "5px";
//   button.textContent = text;
//   button.style.userSelect = "none";
// buttonContainer.appendChild(button);
// };

let btnCreator = function(button, text) {
  button.style.width = "20%";
  button.style.display = "flex";
  button.style.justifyContent = "center";
  button.style.alignItems = "center";
  button.style.textAlign = "center";
  button.style.border = "solid 1px white";
  container.style.color = "white";
  button.style.borderRadius = "10px";
  button.style.margin = "5px";
  button.textContent = text;
  button.style.userSelect = "none";
  button.classList.add("button");
  buttonContainer.appendChild(button);
  buttonContainer.style.fontSize = "30px";
  buttonContainer.style.textShadow = "1px 1px 10px black";
};

// Create a stylesheet to store your CSS rules
const stylesheet = document.createElement("style");
document.head.appendChild(stylesheet);

// Add the hover class to the stylesheet
stylesheet.sheet.insertRule(`.button:hover {
  width: 22%;
}`);

let multiAnswer = 0;
let typedValue = [];
let sortedTypedValue = 0;
let answer = 0;
let arrOperate = [];
let answerLog = [];
let stvTrack = 0;
let operators = ["x", "+", "-", "/", "%"];
let lastOperator = ["placeholder"];
let lastTyped = 0;
let endPercentLoop = 0;
let backCheck = 'false';
let removeZero = 'false';

function consoleHelp(reason) {
  console.log(reason);
  console.log("typedValue = " + typedValue);
  console.log("sortedTypedValue = " + sortedTypedValue);
  console.log("backCheck = " + backCheck);
  console.log("-----------------------------------------");
}

const typedV = document.createElement('div');
equationContainer.appendChild(typedV);

const typedA = document.createElement('div');
answerContainer.appendChild(typedA);

function edgeCaseFix() {
  if (operators.includes(typedValue[0]) || typedValue[0] === "." || typedValue[0] === "=") {
    alert("You can't begin your equation with operators");
    clearValue();
  } else if (operators.includes(typedValue[typedValue.length - 1]) && operators.includes(typedValue[typedValue.length - 2])) {
    alert("You can't have two operators back to back!");
    clearValue();
  }
}

function combineNumbers(arr) {
  const combined = [];
  let currentNumber = '';
  let decimalTrack = 'false';
  for (const element of arr) {
    if (typeof element === 'number' && backCheck === 'false' && removeZero === 'false') {
      currentNumber += element;
    } else if (element === '.' && decimalTrack === 'false') {
        currentNumber += element ;
        decimalTrack = 'true';
    } else if (element === '.' && decimalTrack === 'true') {
        alert("You can't type '.' more than one time in a single number!");
        typedValue.pop();
    } else if (typeof element === 'number' && backCheck === 'true') {
        currentNumber = typedValue[typedValue.length - 1];
        console.log("backCheck was activated back to false after being positive")
        backCheck = 'false';
        removeZero = 'true';
    } else if (typeof element === 'number' && backCheck === 'false' && removeZero === 'true') {
        currentNumber = element;
        typedValue.splice(-2, 1);
        removeZero = 'false';
    } else {
        combined.push(currentNumber);
        currentNumber = '';
        combined.push(element);
        decimalTrack = 'false';
    }
  } // push the final number, if there is one
  if (currentNumber) {
    combined.push(currentNumber);
  }
  return combined;
}

function appendAnswer() {
  if (operators.includes(sortedTypedValue[sortedTypedValue.length - 1])) {
    if (sortedTypedValue.length === 4) {
      lastOperator.push(sortedTypedValue[1]);
      console.log("This lastOperator was chosen " + sortedTypedValue[1] + " " + "instead of this " + sortedTypedValue[sortedTypedValue.length - 1]) 
    } else {
        lastOperator.push(sortedTypedValue[sortedTypedValue.length - 1]);
    }
  } 
  
  answerLog.push(answer);
  if (endPercentLoop === 0) {
    typedV.textContent = answerLog[answerLog.length - 1] + " " + lastOperator[lastOperator.length - 1];
    typedA.textContent = answerLog[answerLog.length - 1]
  } else {
  //typedV.textContent = storeForAlt + "%";
    typedA.textContent = answerLog[answerLog.length - 1];
  }
    
};

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

const subtract = function(array) {
  answer = parseFloat((array[0] - array[1]).toFixed(5));
  appendAnswer();
};

const divide = function(array) {
  answer = array[0] / array[1];
  appendAnswer();
};

const percent = function(array) {
  answer = (array[0] / 100 * array[1]);
  answerLog.push(answer);
  console.log("The last operator is equal to " + lastOperator[lastOperator.length - 2]);
  if (sortedTypedValue.length === 4) {
    typedV.textContent = array[0] + " " + lastOperator[lastOperator.length - 1] + " " + array[1] + "%";
  } else {
    typedV.textContent = array[0] + " " + lastOperator[lastOperator.length - 2] + " " + array[1] + "%";
  }
  let finalPercentCalc = [array[0], answer];
  whichFunc(lastOperator[lastOperator.length - 2], finalPercentCalc);
  endPercentLoop = 0;
};

function whichFunc(operator, ray) {
  if (operator === 'x') {
    multiply(ray);
  } else if (operator === '+') {
      sum(ray);
  } else if (operator === '-') {
      subtract(ray);
  } else if (operator === '/') {
      divide(ray);
  } 
  let checkPercent = sortedTypedValue[sortedTypedValue.length - 1];
  console.log("The check percent is " + checkPercent)
  if (checkPercent === '%' && endPercentLoop === 0) {
    endPercentLoop = 1;
    percent(ray);
  }
  
}

function operate() {
  // Preparing the array to be run through it's relevant operator for the first time:
  let arrOperate = [];
  if (sortedTypedValue.length === 4) {
    arrOperate.push(sortedTypedValue[0]);
    arrOperate.push(sortedTypedValue[2]);
    console.log("The two numbers that are going to be used for the calculation are " + arrOperate);
    whichFunc(sortedTypedValue[1], arrOperate);

  // After the first calculation, for every following operator pressed:
  } else if (sortedTypedValue.length > 4 && sortedTypedValue.length % 2 === 0) {
      arrOperate = [];
      stvTrack = sortedTypedValue.length;
      arrOperate.push(answer.toString());
      arrOperate.push(sortedTypedValue[stvTrack - 2]);
      console.log("The two numbers that are going to be used for the calculation are " + arrOperate);
      let checkOp = sortedTypedValue[sortedTypedValue.length - 3];
      whichFunc(checkOp, arrOperate);
    }
}

function answerContainerUpdates() {
  if (sortedTypedValue.length === 1) {
    typedA.textContent = sortedTypedValue.join(' ');
  } else if (sortedTypedValue.length % 2 !== 0) {
    typedA.textContent = sortedTypedValue[sortedTypedValue.length - 1];
  } 
  // Note that the appendAnswer() function also alters the answerContainer
}

function valueContainerUpdates() {
  let resultEnd = " " + sortedTypedValue[sortedTypedValue.length - 3] + " " + sortedTypedValue[sortedTypedValue.length - 2]  + " =";
  let lastTyped = sortedTypedValue[sortedTypedValue.length - 1];
  if (sortedTypedValue.length === 2) {
    typedV.textContent = sortedTypedValue.join(' ');
  } else if (sortedTypedValue.length === 4 && lastTyped === '=') {
      typedV.textContent = sortedTypedValue[sortedTypedValue.length - 4] + resultEnd;
  } else if (sortedTypedValue.length > 4 && lastTyped === '=') {
      typedV.textContent = answerLog[answerLog.length - 2] + resultEnd;
  }
  // Note that the appendAnswer() function also alters the equationContainer
}

let storeValue = function(number) {
  typedValue.push(number);
  edgeCaseFix(); 
  sortedTypedValue = combineNumbers(typedValue);
  operate();
  answerContainerUpdates();
  valueContainerUpdates();
  consoleHelp("At the end of the storValue function");
};

let clearValue = function() {
    typedValue = [];
    lastTyped = 0;
    typedV.textContent = typedValue.join('');
    multiAnswer = "";
    typedA.textContent = multiAnswer;
    answerLog = [];
};

let clearLastValue = function() {
    sortedTypedValue.pop();
    if (typeof typedValue[typedValue.length - 2] === 'number' || typedValue[typedValue.length - 2] === '.') { 
      typedValue.pop();
      sortedTypedValue = combineNumbers(typedValue);
      operate();
      answerContainerUpdates();
      valueContainerUpdates();
      consoleHelp("After something was removed when there was a number before it");
    } else if (operators.includes(typedValue[typedValue.length - 2])) {
        backCheck = 'true';
        typedValue.pop();
        consoleHelp("Just after pop");
        typedValue.push(0);
        consoleHelp("Just after pushing 0");
        sortedTypedValue.push(0);
        typedA.textContent = 0;
        consoleHelp("After something was removed when there was an operator before it");
      } else if (typedValue.length === 1) {
          clearValue();
        }
};

document.addEventListener('keydown', function(event) {
  if (event.key >= 0 && event.key <= 9) {
    storeValue(parseInt(event.key));
  } else if (operators.includes(event.key) || event.key === '.' || event.key === '=') {
      storeValue(event.key);
  } else if (event.key === 'Escape') {
      clearValue();
  } else if (event.key === 'Backspace') {
      clearLastValue();
  } else if (event.key === 'Enter') {
      storeValue("=");
  } else if (event.key === '*') {
      storeValue("x");
  } 
    event.preventDefault()
});

const buttonAC = document.createElement('btn');
btnCreator(buttonAC, "AC");
buttonAC.classList.add("opBTN");
buttonAC.addEventListener('click', function() {
    clearValue();
  });

const buttonC = document.createElement('btn');
btnCreator(buttonC, "C");
buttonC.classList.add("opBTN");
buttonC.addEventListener('click', function() {
    clearLastValue();
  });

const buttonPercent = document.createElement('btn');
btnCreator(buttonPercent, "%");
buttonPercent.classList.add("opBTN");
buttonPercent.addEventListener('click', function() {
    storeValue("%");
  });

const buttonDivide = document.createElement('btn');
btnCreator(buttonDivide, "/");
buttonDivide.classList.add("opBTN");
buttonDivide.addEventListener('click', function() {
    storeValue("/");
  });

const buttonSeven = document.createElement('btn');
btnCreator(buttonSeven, "7");
buttonSeven.classList.add("numBTN")
buttonSeven.addEventListener('click', function() {
    storeValue(7);
  });

const buttonEight = document.createElement('btn');
btnCreator(buttonEight, 8);
buttonEight.classList.add("numBTN")
buttonEight.addEventListener('click', function() {
    storeValue(8);
  });

const buttonNine = document.createElement('btn');
btnCreator(buttonNine, "9");
buttonNine.classList.add("numBTN")
buttonNine.addEventListener('click', function() {
    storeValue(9);
  });

const buttonPlus = document.createElement('btn');
btnCreator(buttonPlus, "+");
buttonPlus.classList.add("opBTN");
buttonPlus.addEventListener('click', function() {
    storeValue("+");
  });

const buttonFour = document.createElement('btn');
btnCreator(buttonFour, "4");
buttonFour.classList.add("numBTN")
buttonFour.addEventListener('click', function() {
    storeValue(4);
  });

const buttonFive = document.createElement('btn');
btnCreator(buttonFive, "5");
buttonFive.classList.add("numBTN")
buttonFive.addEventListener('click', function() {
    storeValue(5);
  });

const buttonSix = document.createElement('btn');
btnCreator(buttonSix, "6");
buttonSix.classList.add("numBTN")
buttonSix.addEventListener('click', function() {
    storeValue(6);
  });

const buttonSubtract = document.createElement('btn');
btnCreator(buttonSubtract, "-");
buttonSubtract.classList.add("opBTN");
buttonSubtract.addEventListener('click', function() {
    storeValue("-");
  });

const buttonOne = document.createElement('btn');
btnCreator(buttonOne, "1");
buttonOne.classList.add("numBTN")
buttonOne.addEventListener('click', function() {
    storeValue(1);
  });

const buttonTwo = document.createElement('btn');
btnCreator(buttonTwo, "2");
buttonTwo.classList.add("numBTN")
buttonTwo.addEventListener('click', function() {
    storeValue(2);
  });

const buttonThree = document.createElement('btn');
btnCreator(buttonThree, "3");
buttonThree.classList.add("numBTN")
buttonThree.addEventListener('click', function() {
    storeValue(3);
  });

const buttonMultiply = document.createElement('btn');
btnCreator(buttonMultiply, "x");
buttonMultiply.classList.add("opBTN");
buttonMultiply.addEventListener('click', function() {
    storeValue("x");
  });

const buttonZero = document.createElement('btn');
btnCreator(buttonZero, "0");
buttonZero.classList.add("numBTN")
buttonZero.addEventListener('click', function() {
    storeValue(0);
  });

const buttonPoint = document.createElement('btn');
btnCreator(buttonPoint, ".");
buttonPoint.classList.add("opBTN");
buttonPoint.addEventListener('click', function() {
    storeValue(".");
  });

const buttonEqual = document.createElement('btn');
btnCreator(buttonEqual, "=");
buttonEqual.classList.add("opBTN");
buttonEqual.style.width = "44%";
buttonEqual.addEventListener('click', function() {
    storeValue("=");
  });

  // const operatorButtons = document.querySelectorAll('.opBTN');
  // operatorButtons.forEach(operatorButton => {
  //   operatorButton.style.background = "linear-gradient(to bottom, #808080 0%, #313638 200%)";
  // });

  const operatorButtons = document.querySelectorAll('.opBTN, .numBTN');

  operatorButtons.forEach(operatorButton => {
    operatorButton.style.width = "20%";
    operatorButton.style.background = "linear-gradient(to bottom, #808080 0%, #313638 200%)";
    operatorButton.style.border = "solid 1px white";
    operatorButton.style.color = "white";
    operatorButton.style.cursor = "pointer";
    operatorButton.style.position = "relative";
    operatorButton.style.zIndex = 0;
    operatorButton.style.userSelect = "none";
    operatorButton.style.borderRadius = "10px";
    operatorButton.style.margin = "5px";
  
    const before = document.createElement("div");
    before.style.content = "";
    before.style.background = "linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)";
    before.style.position = "absolute";
    // before.style.top = "1px";
    // before.style.left = "1px";
    before.style.backgroundSize = "100%";
    before.style.zIndex = -1;
    before.style.filter = "blur(5px)";
    before.style.width = "calc(100%)";
    before.style.height = "calc(100%)";
    before.style.animation = "glowing-button-85 20s linear infinite";
    before.style.transition = "opacity 0.3s ease-in-out";
    before.style.borderRadius = "10px";
  
    const after = document.createElement("div");
    after.style.zIndex = -1;
    after.style.content = "";
    after.style.position = "absolute";
    after.style.width = "100%";
    after.style.height = "100%";
    after.style.background = "#222";
    after.style.left = 0;
    after.style.top = 0;
    after.style.borderRadius = "10px";
    
    operatorButton.appendChild(before);
    operatorButton.appendChild(after);
  });

  let style = document.createElement("style");
  style.innerHTML = `

  @keyframes glowing-button-85 {
    0% {
      box-shadow: 0 0 3px #ff0000;
      transform: translateY(0);
    }
    20% {
      box-shadow: 0 0 40px #ff7300;
      transform: translateY(-1px);
    }
    40% {
      box-shadow: 0 0 3px #fffb00;
      transform: translateY(0);
    }
    60% {
      box-shadow: 0 0 40px #48ff00;
      transform: translateY(-1px);
    }
    80% {
      box-shadow: 0 0 3px #00ffd5;
      transform: translateY(0);
    }
    100% {
      box-shadow: 0 0 40px #7a00ff;
      transform: translateY(-1px);
    }
  }

  .basic {
    padding: 0.6em 2em;
    border: none;
    outline: none;
    color: rgb(255, 255, 255);
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    margin: 5px;
    //margin-top: 20px;
  }
  
  .basic:before {
    content: "";
    background: linear-gradient(
      45deg,
      #000000,
      #9f9f9f,
      #b4b4b4,
      #797979,
      #525353,
      #292929,
      #000000,
      #000000,
      #000000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100%);
    height: calc(100%);
    animation: glowing-button-85 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }
  
  .basic:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #222;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
  `;
  document.head.appendChild(style);
  
  buttonEqual.style.width = "44%";












