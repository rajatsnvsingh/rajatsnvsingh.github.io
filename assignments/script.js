let input = "";
let output = "";
let c_state = "AC";

document.addEventListener("click", function(event) {
  if (event.target.tagName !== "BUTTON") return;
  buttonPressed(event.target.id);
});

function buttonPressed(id) {
  if (id === "=") {
    output = input + " =";
    try {
      input = eval(input);
      c_state = "AC";
    } catch (err) {
      output = output + "ERROR";
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
  document.getElementById("expression-text").innerHTML = output;
  document.getElementById("main-display-text").innerHTML = input;
  c_state === "C" && input !== ""
    ? (document.getElementById("C").innerHTML = "C")
    : (document.getElementById("C").innerHTML = "AC");
}
