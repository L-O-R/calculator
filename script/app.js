document.addEventListener("DOMContentLoaded", () => {
  let buttons = document.querySelectorAll("[data-number]");
  let userInput = [];
  buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      let number = parseFloat(event.target.innerText);
      userInput.push(number);
      addInput();
    });
  });
  let operands = document.querySelectorAll("[data-action]");

  operands.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      let action = event.target.dataset.action;

      switch (action) {
        case "multiply":
          userInput.push("*");
          break;
        case "divide":
          userInput.push("/");
          break;
        case "add":
          userInput.push("+");
          break;
        case "subtract":
          userInput.push("-");
          break;
      }

      addInput();

      console.log(userInput);
    });
  });

  function addInput() {
    console.log(userInput);
    let display = document.getElementById("display");
    display.innerHTML = "";
    userInput.forEach((el) => {
      let span = document.createElement("span");

      span.innerText = el;
      display.appendChild(span);
    });
  }
});
