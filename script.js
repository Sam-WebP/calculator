const container = document.querySelector('.container');
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.border = "solid 5px red";
container.style.height = "100%";

const calculatorContainer = document.createElement('div');
calculatorContainer.classList.add('calculator')
calculatorContainer.style.border = "solid 3px black";
calculatorContainer.style.width = "30%";
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
screenContainer.appendChild(equationContainer);

const answerContainer = document.createElement('div');
answerContainer.style.border = "solid 1px black";
answerContainer.style.margin = "1px";
answerContainer.style.minHeight = "35px";
answerContainer.style.borderRadius = "10px";
screenContainer.appendChild(answerContainer);

const buttonContainer = document.createElement('div');
buttonContainer.style.border = "solid 2px red";
buttonContainer.style.margin = "7px";
buttonContainer.style.minHeight = "350px";
buttonContainer.style.borderRadius = "10px";
calculatorContainer.appendChild(buttonContainer);






