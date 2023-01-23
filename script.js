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

// let calculations = function() {
// //Create another array that joins together the numbers between operator
// console.log("This is the array that the calc function is using " + sortedTypedValue)
//   const xRay = [];
//   let currentNumber = '';
//   for (const element of sortedTypedValue) {
//     if((element === 'x')) {
//       currentNumber = sortedTypedValue.indexOf('x')
//       xRay.push(sortedTypedValue[currentNumber - 1]);
//       xRay.push(sortedTypedValue[currentNumber + 1]);
      
//       console.log("This do be the " + xRay);
//       currentNumber = '';
//     }

function checkAround(arr, i, name) {
  arr.push(sortedTypedValue[i - 1]);
  arr.push(sortedTypedValue[i + 1]);
  console.log(name + arr);
};

// function checkAround(arr, i, name) {
//   arr.push(sortedTypedValue[i - 1]);
//   arr.push(sortedTypedValue[i + 1]);
//   sortedTypedValue.splice(sortedTypedValue[i - 1]);
//   sortedTypedValue.splice(sortedTypedValue[i + 1]);
//   console.log(name + arr);
// };

// function choose(operator, arr, i, lookFor, name) {
//   else if (sortedTypedValue[i] === operator && sortedTypedValue[i - 2] === lookFor) {
//     arr.push(sortedTypedValue[i - 1]);
//     arr.push(sortedTypedValue[i + 1]);
//     console.log(name + arr) 
//   }
// }

//----------------------------------------------------------------------------------------------//
//I need to make it so that the user cannot make their first input an operator and that they can't use two operators in a row
    
const multiPos = []; //For positive multiplication
const multiNeg = []; //For negative multiplication
const multiMulti = []; // For multiplication on multiplication 

// let calculations = function() {
//       console.log("This is the array that the calc function is using " + sortedTypedValue)
//       for (let i = 0; i < sortedTypedValue.length; i++) {
//         //When x has a multiplication number before it
//         if (sortedTypedValue[i] === 'x' && sortedTypedValue[i + 2] === 'x') {
//           for (let z = i + 2; sortedTypedValue[z] === 'x'; z--) {
//             checkAround(multiMulti, z, "multiMulti = ");
//           }
//       } //When x has a positive number before it
//         else if (sortedTypedValue[i] === 'x' && sortedTypedValue[i - 2] === '+' || i === 1) {
//           checkAround(multiPos, i, "multiPos = ");
//         } //When x has a negative number before it
//         else if (sortedTypedValue[i] === 'x' && sortedTypedValue[i - 2] === '-') {
//           checkAround(multiNeg, i, "multiNeg = ");
//         } 
//       }
//       typedA.textContent = multiPos;
    
//     }
      /*
          calculations function explained:
          
          Step a - break the sortedTypedValue array up
          1a) If the value in the array is "x", check the next operator to the right. 
          2a) Depending on the value the operator is, store it in it's own array to then by calculated separately
          
          Step b - 


      */

      /* 
      The operator before a number is called a opType

      The number operator after a number is called a opConnect

      Numbers can be chained together through opConnect but only if they share the same opConnect

      Numbers needs to be sorted into arrays based off their opConnect value and the opType value of the first number
      
      */

      // function sortDirection (operatorType, number, connectType) {
      //   if (operatorType === 'x' && connectType === 'x') {
      //     multiMulti.push(number);
      //   }
      // }

      // let calculations = function() {
      //   console.log("This is the array that the calc function is using " + sortedTypedValue)
      //   for (let i = 0; i < sortedTypedValue.length && typeof i === 'number'; i++) {
      //     let operatorType = sortedTypedValue[i - 1];
      //     let number = i;
      //     let connectType = sortedTypedValue[i + 1];
      //     sortDirection(operatorType, number, connectType);
      //     //If there is a chain of the same operators, push them all into the array the belong into
      //     if (connectType === operatorType || i === 0) {
      //       for (let z = i + 3; sortedTypedValue[z] === connectType; z += 2) {
      //         sortDirection(operatorType, number, connectType);
      //       }
      //     }
      //   }
      // }

      //Grab the position of where the x sign is
//       if((typedValue.includes('x'))) {
//       let xPosition = typedValue.indexOf('x');
//       let firstX = typedValue[xPosition - 1];
//       let secondX = typedValue[xPosition + 1];
//       multiRay = [];
//       multiRay.push(firstX);
//       multiRay.push(secondX);
//       //console.log(multiRay);
//       let multiRayInt = multiRay.map(val => parseInt(val));
//       //console.log(multiRayInt);
//       multiAnswer = multiply(multiRayInt);
//     };
//     typedA.textContent = multiAnswer;
//   }
  
// };

//Issues with the above logic: 
//Doesn't register numbers above one digit
//Doesn't allow multiple uses of multiplication within the same equation

//--------Steps to Complete----------//

//When a button is pressed:
// - the value is put into the typedValue array which is then displayed in the valueContainer
// - 


//--------Basic Equations----------//

//Multiplication followed by division => (x * y / a = z) =>  
 
//Addition/Subtraction => (x + y = z) => push z to the totalArray unless the next operator is Multiplication or Division
//Addition/Subtraction => (x + y */ a) => y */ a gets pushed to totalArray and x gets pushed to totalArray separately
//Subtraction => (x - y */ a) => y */ a gets pushed to negativeTotalArray and x gets pushed to totalArray separately
//----------------------------------//

//--------Leftover Equations----------//
//These equations include a number that either has 
//a multiplication or division operation in it and also includes a negative number or
//

//I need a function that deals with left over values by summing the values of the totalArray
//and then performing their operation on it 
//and then updating the totalArray with that answer.

//Leftover equations include: 
//Multiplication => (x * y = z) => push z to the totalArray
//Division => (x / y = z) => push z to the totalArray


//-------------------------------------//

//Write a function that searches for all the x values in an array and then remove then splices the items in the array: 
//two and one position before the x, including the x and one position after the x. 
//after we have those values inside there own array then multiply them and add them to the the total array


//totalArray - negativeTotalArray will be what displays the final answer in the answerContainer

// Every even array number is an operation
// Every three values through an array need to be run through a function if there is no multiplication or division
// -------Target * signs that first
// Make it so that they get operated on first

//Tests
//12 + 7 - 5 * 3 = 42
//12 + 7 + 5 * 3 = 34
//12 + 7 - 5 * 3 * 2 = -11
//50 + 7 / 2 - 5 * 3 * 2 = 23.5
//50 + 7 / 2 -  5 * 3 / 2 * 3 = 31
//30 * 3 - 50 / 2 + 7 / 2 - 5 * 3 / 2 * 3 = 46
//101 + 40 + 3 - 30 * 3 - 50 / 2 + 7 / 2 -  5 * 3 / 2 * 3 = 10

/*
New Calc Functionality

After typed the first number: 
number shows up in the 


*/
let answerLog = [];

const multiply = function(array) {
  answer = array.reduce((total, prop) => total * prop);
  console.log(answer);
  //typedA.textContent = answer;
  
  answerLog.push(answer);
  typedV.textContent = answerLog[answerLog.length - 1] + " x ";
  typedA.textContent = answerLog[answerLog.length - 1]

  console.log("This is the answerLog = " + answerLog[answerLog.length - 1])
  console.log("answerLog = " + answerLog)

}; 

const sum = function(array) {
  if(array.length >= 1) {
    return array.reduce((total, prop) => total + prop);
  } else {
    return 0;
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

    }
    // After the first calculation, when an operator is pressed
  } else if (sortedTypedValue.length > 4 && sortedTypedValue.length % 2 === 0) {
    arrOperate = [];
    stvTrack = sortedTypedValue.length;
    //arrOperate.push(sortedTypedValue[stvTrack - 4]);
    arrOperate.push(answer);
    arrOperate.push(sortedTypedValue[stvTrack - 2]);
    console.log(arrOperate); 
    if (sortedTypedValue[1] === 'x') {
      multiply(arrOperate);
    } else if (sortedTypedValue[1] === '+') {

    }
  } else if (sortedTypedValue.length > 4 && sortedTypedValue.length % 2 !== 0) {
    // arrOperate = [];
    // stvTrack = sortedTypedValue.length;
    // //arrOperate.push(sortedTypedValue[stvTrack - 4]);
    // arrOperate.push(answer);
    // arrOperate.push(sortedTypedValue[stvTrack - 1]);
    // console.log(arrOperate); 
    // if (sortedTypedValue[sortedTypedValue.length] === 'x') {
    //   multiply(arrOperate);
    // } else if (sortedTypedValue[1] === '+') {

    // }
  }
}

// let storeValue = function(number) {
//     typedValue.push(number);
//     typedV.textContent = typedValue.join('');
//     console.log("This is typedValue = " + typedValue);
// };

let tvTrack = 0;
let tvNow = 0;
let altSwitch = [];

let storeValue = function(number) {
  typedValue.push(number);
  
  //typedV.textContent = typedValue.join(''); This line adds to the
  sortedTypedValue = combineNumbers(typedValue);
  operate(sortedTypedValue);

  console.log("sortedTypedValue length = " + sortedTypedValue.length)
  console.log("sortedTypedValue = " + sortedTypedValue)

  if (number === 'x' || number === '%' || number === '/' || number === '+' || number === '-') {
    altSwitch = [];
  }
  
  if (sortedTypedValue.length < 2) {
    
    typedA.textContent = sortedTypedValue.join(' ');
 
  } else if (sortedTypedValue.length < 4 && sortedTypedValue.length % 2 === 0) {
    typedV.textContent = sortedTypedValue.join(' ');

  } else if (sortedTypedValue.length % 2 !== 0) {
    typedA.textContent = sortedTypedValue[sortedTypedValue.length - 1];
  } 

};

let clearValue = function() {
    typedValue = [];
    typedV.textContent = typedValue.join('');
    multiAnswer = "";
    typedA.textContent = multiAnswer;
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
    //operate(sortedTypedValue);
  });

const buttonSeven = document.createElement('btn');
btnCreator(buttonSeven, "7");
buttonSeven.addEventListener('click', function() {
    storeValue(7);
   // sortedTypedValue = combineNumbers(typedValue)
    //operate(sortedTypedValue);
  });

const buttonEight = document.createElement('btn');
btnCreator(buttonEight, 8);
buttonEight.addEventListener('click', function() {
    storeValue(8);
    //sortedTypedValue = combineNumbers(typedValue)
    //operate(sortedTypedValue);
  });

const buttonNine = document.createElement('btn');
btnCreator(buttonNine, "9");
buttonNine.addEventListener('click', function() {
    storeValue(9);
    //sortedTypedValue = combineNumbers(typedValue)
    //operate(sortedTypedValue);
  });

const buttonPlus = document.createElement('btn');
btnCreator(buttonPlus, "+");
buttonPlus.addEventListener('click', function() {
    storeValue("+");
    sortedTypedValue = combineNumbers(typedValue)
    operate(sortedTypedValue);
  });

const buttonFour = document.createElement('btn');
btnCreator(buttonFour, "4");
buttonFour.addEventListener('click', function() {
    storeValue(4);
    //sortedTypedValue = combineNumbers(typedValue)
    //operate(sortedTypedValue);
  });

const buttonFive = document.createElement('btn');
btnCreator(buttonFive, "5");
buttonFive.addEventListener('click', function() {
    storeValue(5);
    //sortedTypedValue = combineNumbers(typedValue)
    //operate(sortedTypedValue);
  });

const buttonSix = document.createElement('btn');
btnCreator(buttonSix, "6");
buttonSix.addEventListener('click', function() {
    storeValue(6);
    //sortedTypedValue = combineNumbers(typedValue)
    //operate(sortedTypedValue);
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
    //sortedTypedValue = combineNumbers(typedValue)
    //operate(sortedTypedValue);
  });

const buttonTwo = document.createElement('btn');
btnCreator(buttonTwo, "2");
buttonTwo.addEventListener('click', function() {
    storeValue(2);
    //sortedTypedValue = combineNumbers(typedValue)
    //operate(sortedTypedValue);
  });

const buttonThree = document.createElement('btn');
btnCreator(buttonThree, "3");
buttonThree.addEventListener('click', function() {
    storeValue(3);
    //sortedTypedValue = combineNumbers(typedValue)
    //operate(sortedTypedValue);
  });

const buttonMultiply = document.createElement('btn');
btnCreator(buttonMultiply, "x");
buttonMultiply.addEventListener('click', function() {
    storeValue("x");
    //sortedTypedValue = combineNumbers(typedValue)
    //operate(sortedTypedValue);
  });

const buttonZero = document.createElement('btn');
btnCreator(buttonZero, "0");
buttonZero.addEventListener('click', function() {
    storeValue(0);
    //sortedTypedValue = combineNumbers(typedValue)
    //operate(sortedTypedValue);
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
    //sortedTypedValue = combineNumbers(typedValue);
    //calculations();
    //operate(sortedTypedValue);
    
  });























