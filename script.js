// Greet the user by name
document.getElementById('greetBtn').onclick = function() {
  var name = document.getElementById('nameInput').value;
  if(name.trim() === "") {
    document.getElementById('greet').textContent = "Welcome!";
  } else {
    document.getElementById('greet').textContent = "Hello, " + name + "!";
  }
}

// Change background color
document.getElementById('bgBtn').onclick = function() {
  // Pick a random color
  var colors = ["#FFD700", "#90EE90", "#87CEEB", "#FFB6C1", "#D3D3D3"];
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

// Print numbers 1–10 to console
document.getElementById('numbersBtn').onclick = function() {
  let output = ""; // create an empty string
  for (let i = 1; i <= 10; i++) {
    output += i + "<br>"; // add each number on a new line
  }
  document.getElementById('numbersOutput').innerHTML = output; // print to the webpage
}


// Show/Hide message
var hidden = false;
document.getElementById('toggleBtn').onclick = function() {
  hidden = !hidden;
  var msg = document.getElementById('hiddenMsg');
  if(hidden){
    msg.style.display = "block";
    this.textContent = "Hide Message";
  }else{
    msg.style.display = "none";
    this.textContent = "Show Message";



    
  }
}
