
let greeting = "";
if(new Date().getHours() > 12) {
  greeting = "Good Afternoon";
}
else {
  greeting = "Good Morning"
}
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[new Date().getDay()];
let calendar = (new Date().getMonth() + 1) + "/" + (new Date().getDate()) + "/" + (new Date().getFullYear());
document.querySelector('.Greeting').innerText = greeting + " User it's " + day + " " + calendar + ". Let's start tracking!";

const button = document.getElementById("button");

button.addEventListener('click',function(eventObj) {
  const selection = document.getElementById("selection").options[document.getElementById("selection").selectedIndex].text;
  const text = document.getElementById("textbox").value;
  let value = "";
  console.log(selection);
  if(selection === "Heart Beat"){
    value = text + " BPM"
  }
  else if (selection === "Blood Pressure"){
    value = text + " mmHg"
  }
  else {
    value = text + " Kg"
  }
  document.getElementById("list").innerHTML +='<tr><td>'+selection+'</td><td>'+value+'</td></tr>';
});

document.querySelector('#a').innerText = "Measures recorded on " + day + " " + calendar + "";
