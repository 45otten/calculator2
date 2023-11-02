const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["*", "/", "-", "+", "="]; // Remove "%" from specialChars
let output = "";

const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    output = eval(output.replace("%", "/100*"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } 
//   else if (btnValue === "%") {
//     const values = output.split("%");
//     if (values.length === 2) {
//       const leftOperand = parseFloat(values[0]);
//       const rightOperand = parseFloat(values[1]);
//       if (!isNaN(leftOperand) && !isNaN(rightOperand)) {
//         output = (leftOperand % rightOperand).toString();
//       }
//     }
//   } 
   else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});