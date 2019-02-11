(function() {
  // Adding event listners to all buttons
  var buttons = document.querySelectorAll("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener(
      "click",
      function(event) {
        buttonPressed(event.target.id);
      },
      false
    );
  }
})();

// Button Pressed Method to handle press events
let buttonPressed = function(id) {
  // Retrieve Current Values from the Calculator
  let input = document.getElementById("main-display-text").innerHTML;
  let output = document.getElementById("expression-text").innerHTML;
  let c_state = document.getElementById("C").innerHTML;

  if (id === "=") {
    output = input + " =";
    try {
      input = eval(input);
      c_state = "AC";
    } catch (err) {
      output = output + "ERROR";
      c_state = "AC";
    }
  } else if (id === "C") {
    if (c_state === "AC") {
      input = output = "";
    } else {
      input = input.substring(0, input.length - 1);
    }
  } else {
    c_state = "C";
    input = input + id;
  }

  // Update HTML based on the state of the variables
  document.getElementById("expression-text").innerHTML = output;
  document.getElementById("main-display-text").innerHTML = input;
  c_state === "C" && input !== ""
    ? (document.getElementById("C").innerHTML = "C")
    : (document.getElementById("C").innerHTML = "AC");
};
