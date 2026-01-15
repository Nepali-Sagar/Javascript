console.log("--CALCULATOR--");
console.log(
  "It is a prompt and alert based calculator which is design to do the basic calculation like addition, substraction, multiplication and division."
);

function addition(firstValue, secondValue) {
  alert(`${firstValue} + ${secondValue} = ${firstValue + secondValue}`);
}

function substraction(firstValue, secondValue) {
  alert(`${firstValue} - ${secondValue} = ${firstValue - secondValue}`);
}

function multiplication(firstValue, secondValue) {
  alert(`${firstValue} * ${secondValue} = ${firstValue * secondValue}`);
}

function divide(firstValue, secondValue) {
  if (secondValue == 0) {
    alert("Can't be divide by ZERO");
  } else {
    alert(`${firstValue} / ${secondValue} = ${firstValue / secondValue}`);
  }
}

function calculator() {
  const operaterChoose = Number(
    prompt(
      "Choose\n1. Addition\n2. Substraction \n3. Multiplication \n4. Divide"
    )
  );

  if (isNaN(operaterChoose)) {
    alert("Invalid input.");
    return;
  } else if (operaterChoose > 4 || operaterChoose < 1) {
    alert("Choose from given options.");
    return;
  } else {
    const firstValue = Number(prompt("Enter first value."));
    const secondValue = Number(prompt("Enter second value."));

    if (isNaN(firstValue) || isNaN(secondValue)) {
      alert("Invalid input.");
      return;
    } else {
      if (operaterChoose === 1) {
        addition(firstValue, secondValue);
      } else if (operaterChoose === 2) {
        substraction(firstValue, secondValue);
      } else if (operaterChoose === 3) {
        multiplication(firstValue, secondValue);
      } else if (operaterChoose === 4) {
        divide(firstValue, secondValue);
      }
    }
  }
}
