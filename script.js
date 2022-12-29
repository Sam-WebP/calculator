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
equationContainer.style.padding = "2px";
equationContainer.style.display = "flex";
equationContainer.style.flexWrap = "wrap-reverse";
equationContainer.style.justifyContent = "end";
screenContainer.appendChild(equationContainer);

const answerContainer = document.createElement('div');
answerContainer.style.border = "solid 1px black";
answerContainer.style.margin = "1px";
answerContainer.style.minHeight = "35px";
answerContainer.style.borderRadius = "10px";
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
const typedV = document.createElement('div');
equationContainer.appendChild(typedV);

const multiply = function(array) {
  return array.reduce((total, prop) => total * prop);
}; 

let calculations = function() {
  if((typedValue.includes('x'))) {
    //Grab the position of where the x sign is
    let xPosition = typedValue.indexOf('x');
    let firstX = typedValue[xPosition - 1];
    let secondX = typedValue[xPosition + 1];
    multiRay = [];
    multiRay.push(firstX);
    multiRay.push(secondX);
    console.log(multiRay);
    let multiRayInt = multiRay.map(val => parseInt(val));
    console.log(multiRayInt);
    multiAnswer = multiply(multiRayInt);

  }
  console.log(multiAnswer);
};

let storeValue = function(number) {
    typedValue.push(number);
    typedV.textContent = typedValue.join(' ');
};

let clearValue = function() {
    typedValue = [];
    typedV.textContent = typedValue.join(' ');
};

let clearLastValue = function() {
    typedValue.pop();
    typedV.textContent = typedValue.join(' ');
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
  });

const buttonDivide = document.createElement('btn');
btnCreator(buttonDivide, "/");
buttonDivide.addEventListener('click', function() {
    storeValue("/");
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
  });

const buttonEqual = document.createElement('btn');
btnCreator(buttonEqual, "=");
buttonEqual.style.width = "44%";
buttonEqual.addEventListener('click', function() {
    storeValue("=");
    calculations();
  });























