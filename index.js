const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    if (output.includes('%')) {
      const parts = output.split(/([+-])/);
      for (let i = 0; i < parts.length; i++) {
        if (parts[i].includes('%')) {
          // Replace '%' with '/100' within the part
          parts[i] = parts[i].replace(/%/g, '/100*');
        }
      }
      output = parts.join('');
    }
    output = eval(output);
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
