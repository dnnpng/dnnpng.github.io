let startDate = "2023-01-30";
let endDate = "2023-02-15";


function map(value, low1, high1, low2, high2) {
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}


const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'dc6caf6600msh4789e5460114817p14af3fjsndd4451ec5fcc',
    'X-RapidAPI-Host': 'yh-finance-complete.p.rapidapi.com'
  }
};

fetch(`https://yh-finance-complete.p.rapidapi.com/yhfhistorical?ticker=%5EGSPC&sdate=${startDate}&edate=${endDate}`, options)
  .then(response => response.json())
  .then(response => {
    console.log(response)

    const reversedResponse = response.reverse()

    let words = ["b", "u", "s", "i", "n", "e", "s", "s", "w", "e", "e", "k"];
    for (let j = 0; j < words.length; j++) {
      let letter = document.createElement('div')
      letter.classList.add("letter")
      letter.setAttribute("id", "letter"+[j+1]);
      
      let container = document.getElementById("container");
      container.appendChild(letter);
      letter.innerHTML = words[j];
    }

    
    for(let i = 0; i < 12; i++){
      let letter = document.getElementById('letter'+[i+1]);
      let candleStick1 = reversedResponse[i].close - reversedResponse[i].open;
  
      let newTop;
  

      // if it's red
      if (candleStick1<=0) {
        letter.style.color = "red";
        letter.style.transformOrigin = "top";
        candleStick1 = Math.abs(candleStick1)
        newTop =  map(reversedResponse[i].open, 3700, 4500, 400, 0);
        letter.style.top = newTop + "px";

      } else {
      // if it's green
        letter.style.color = "green";
        letter.style.transformOrigin = "bottom";
        newTop =  map((reversedResponse[i].open), 3700, 4500, 400, 0);
        letter.style.top = newTop + "px";
      }

      let height = map(Math.abs(candleStick1), -10, 50, 0, 12);
      letter.style.transform = "scale(1," + height/10 + ")";


    }
  })


  .catch(err => console.error(err));