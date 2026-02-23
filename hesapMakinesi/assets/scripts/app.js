//Şhitf + alt+ F tuşları ile otomatik biçimlendirme yapılır.
let defaultResult = 0;
let currentResult = defaultResult;

let logEntries = []; //bu değişkenin bir dizi olduğunu belirtiyorum.
/* 
Bu fonksiyon girdi olarak alınan değeri İnteger bir  değere çevirmek için kullanılmıştır.
*/
function getUserEnterNumberInput() {
  return parseInt(userInput.value);
}

/* BU fonksiyon girilen deger ile eski değer arasında gelen operatör sayesinde yapılacak işlemi yapar ve çıkan sonucu yazdırır.
 */
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}
function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operations: "add",
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculationResult(calculationType) {
  const enteredNumber = getUserEnterNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  /* if (
    calculationResult !== "ADD" &&
    calculationResult !== "SUBTRACT" &&
    calculationResult !== "DIVIDE" &&
    calculationResult !== "MULTIPLY"
  ) {
    return;    //Burada return kullanmamızın nedeni bu koşulu sağlarsa bundan sonraki kodları çalıştırmasın.
  } */
   if (
     calculationResult === "ADD" &&
     calculationResult === "SUBTRACT" &&
     calculationResult === "DIVIDE" &&
     calculationResult === "MULTIPLY"
   ) {
     if (calculationResult === "ADD") {
       currentResult += enteredNumber;
       mathOperator = "+";
     } else if (calculationResult === "SUBTRACT") {
       currentResult -= enteredNumber;
       mathOperator = "-";
     } else if (calculationResult === "MULTIPLY") {
       currentResult *= enteredNumber;
       mathOperator = "*";
     } else if (calculationResult === "DIVIDE") {
       currentResult /= enteredNumber;
       mathOperator = "/";
     }

     createAndWriteOutput(mathOperator, initialResult, enteredNumber);
     writeToLog(calculationResult, initialResult, enteredNumber, currentResult);
   }
   }

  

function add() {
  /* const initialResult = currentResult;
  const enteredNumber = getUserEnterNumberInput();
  currentResult += enteredNumber; //Burada "+=" operatörünü kullandık. currentResult =currentResult + enteredNumber ile anlam ifade ediyor.
  createAndWriteOutput("+", initialResult, enteredNumber);
  writeToLog("ADD", initialResult, enteredNumber, currentResult); */
  calculationResult('ADD');
}
function multiply() {
  calculationResult('MULTIPLY');
  c;
}

function subtract() {
  calculationResult('SUBTRACT');
}
function divide() {
  calculationResult('DIVIDE');
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
