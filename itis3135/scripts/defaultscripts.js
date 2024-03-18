function scriptTest(){
    alert("Hey my script is running");
}
function getCurrentDateTime() {
    const now = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[now.getDay()];
    const date = now.getDate();
    const month = now.toLocaleString('default', { month: 'long' });
    const year = now.getFullYear();
    let hours = now.getHours();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}${ampm}`;
    return `Today is ${timeString} on ${dayOfWeek}, ${date} ${month}, ${year}`;
  }
  
  function submitInfo() {
    const name = document.getElementById("nameInput").value;
    const feeling = document.getElementById("feelingInput").value;
    const number = Math.abs(Math.round(parseFloat(document.getElementById("numberInput").value)));
    let polygonName;
  
    if (number === 1) {
      polygonName = "Henagon";
    } else if (number === 2) {
      polygonName = "Digon (Bigon)";
    } else if (number === 3) {
      polygonName = "Trigon";
    } else if (number === 4) {
      polygonName = "Tetragon";
    } else if (number === 5) {
      polygonName = "Pentagon";
    } else if (number === 6) {
      polygonName = "Hexagon";
    } else if (number === 7) {
      polygonName = "Heptagon";
    } else if (number === 8) {
      polygonName = "Octagon";
    } else if (number === 9) {
      polygonName = "Enneagon";
    } else if (number === 10) {
      polygonName = "Decagon";
    } else {
      polygonName = "Invalid input. Please enter a number between 0 and 10.";
    }
  
    alert(`Welcome to Our Company, ${name}! We're glad you are feeling ${feeling}!\n\nYour favorite number corresponds to a ${polygonName}.`);
  }
  document.getElementById("dateTime").innerText = getCurrentDateTime();
  function compliment(){
    alert("I bet my website is better than yours");
  }
  function stock(){
    alert("The only item in stock is the Krusty Krab Grill")
  }
  function grillDepth(){
    const depth = Math.floor(Math.random() * 1000);
  alert(`The grill can safely operate at a depth of ${depth} meters underwater.`);
  }
  function mynumberOpinion(){
    const number = Math.abs(Math.round(parseFloat(document.getElementById("numberInput").value)));
    if (number === 7) {
        alert("You're a genius! 7");
      } else {
        alert("No");
      }
  }
  function whatIsThisButton(){
    alert("It tells you a color and your color is blue");
  }
  

