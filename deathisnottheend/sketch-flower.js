// setCookie("responseArray", null, null);

// custom cursor
// document.body.onmousemove = function(e) {
//   document.documentElement.style.setProperty (
//     '--x', (
//       e.clientX+window.scrollX
//     )
//     + 'px'
//   );
//   document.documentElement.style.setProperty (
//     '--y', (
//       e.clientY+window.scrollY
//     ) 
//     + 'px'
//   );
// }


let responseArray = [
  {name:"Chris", scale: 50}, 
  {name:"Dianna", scale: 30},
  {name:"Val", scale: 100},
  {name:"Alex", scale: 16},
  {name:"Janice", scale: 70},
  {name:"Kevin", scale: 22},
  {name:"Talia", scale: 78},
  {name:"Lakeisha", scale: 80},
  {name:"Anna", scale: 40},
  {name:"James", scale: 80},
  {name:"Maria", scale: 46},
  {name:"Zi", scale: 79}
];

var responseCount = responseArray.length;

// Data input
let dotButton = document.querySelector("#dotButton");
let dotScale = document.querySelector("#dotScale");
let diameter = 15;
let maxDiameter = 150;

let openView = false;
if (openView) {
  questions.style.display = "none";
}

dotButton.addEventListener("mousedown", ()=>{
  let interval = setInterval(() => {
    if(diameter>maxDiameter){
      diameter=10;
      dotButton.style.width = `${diameter}px`
      dotScale.innerHTML = Math.round(map(diameter, 15, maxDiameter, 1, 100));
    }else{
      diameter=diameter+1;
      dotButton.style.width = `${diameter}px`
      dotScale.innerHTML = Math.round(map(diameter, 15, maxDiameter, 1, 100));
    }
  }, 20);
  dotButton.addEventListener("mouseup", ()=>{
    clearInterval(interval);
  })
})

let submit = document.querySelector("#submit");
submit.addEventListener("click", ()=>{
  //get name
  //get diameter
  //add to array

  let nameInput = document.querySelector("#nameInput").value;
  let responseLength = diameter;
  
  responseArray[responseArray.length] = {name: "", scale: 0};
  console.log(responseArray);
  responseArray[responseArray.length-1].name = nameInput;
  responseArray[responseArray.length-1].scale = responseLength;
  responseCount = responseArray.length;

  let json_str = JSON.stringify(responseArray);

  setCookie("responseArray", json_str, 3000);
  setCookie("orbCount", responseCount, 3000);

  let questions = document.querySelector("#questions");
  questions.style.display = "none";
  createFlower(responseArray[responseArray.length-1])

  openView = false;
})

if (getCookie("responseArray") == ''){
  console.log("Nothing has happened.")
} else {
  responseLength = getCookie("responseArray");
  cookieArray = getCookie("responseArray");
  console.log(getCookie("responseArray"));
  responseArray = JSON.parse(getCookie("responseArray"));
  responseCount = responseArray.length;
}

let flowerList = [];
let over = false;

class Flower {
  constructor(d, fillColor, name) {
    this.x = random(width);
    this.y = random(height);
    this.diameter = d;
    this.speed = .3;
    this.fillColor = fillColor;
    this.angle = 0;
    this.d = round(map(d, 15, 150, 1, 100));
    this.name = name;
    this.over = false;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
    this.angle += 10;
    if (this.angle === 10) {
      this.angle = 0
    }
    if(mouseX > this.x - this.diameter && 
      mouseX < this.x + this.diameter &&
      mouseY > this.y - this.diameter && 
      mouseY < this.y + this.diameter) { 
        this.over = true;
      } else {
        this.over = false;
      }
  }


  display() {
    push();
    translate(this.x, this.y);
    push();
    strokeWeight(.2);
    stroke("#554D46");
    rotate(this.angle);
    fill(this.fillColor);
    for (let i = 0; i < 10; i ++) {
    ellipse(0, this.diameter/4, 11, this.diameter/2);
    rotate(PI/5);
    }
    pop();
    if (!openView && this === flowerList[flowerList.length - 1]) {
      textAlign(CENTER);
      textSize(20);
      textFont('Optima');
      fill("#cc2228");
      text(this.name, 0, 0);
      text(this.d, 0, 20);
    }
    if (this.over === true) {
      textAlign(CENTER);
      textSize(20);
      textFont('Optima');
      fill("#cc2228");
      text(this.name, 0, 0);
      text(this.d, 0, 20);
    }
    pop();
  }
}

function createFlower(data) {
  var d = data.scale;    
  let name = data.name;
  let chosenColor = "#DAC8B2"; 
  let currentFlower = new Flower(d, chosenColor, name);
  flowerList.push(currentFlower)
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  canvas.getContext("2d", {
    willReadFrequently: true,
  });
  frameRate(60)

  for (var i = 0; i < responseCount; i+=1) {
    var d = responseArray[i].scale;  
    let name = responseArray[i].name;  
    let chosenColor = "#DAC8B2";
    let currentFlower = new Flower(d, chosenColor, name);
    flowerList.push(currentFlower)
	}
  console.log(flowerList)
}

function draw(){
  let bg = color("#13100C");
  background(bg);

  for (let i = 0; i < flowerList.length; i++) {
    flowerList[i].move();
    flowerList[i].display();
  }
}




// stuff to ignore
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max-min) + min);
}

// cookie set-up code
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function deleteCookie(name) {
  setCookie(cname, null, null);
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
      c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
      }
  }
  return "";
}

function checkCookie(cname) {
  if (!getCookie(cname) === undefined) {
      return true;
  } else {
      return false;
  }
}