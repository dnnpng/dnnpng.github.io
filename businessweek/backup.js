let letterHolder = document.getElementById('container');

// let letter1 = document.getElementById('letter1');
// let letter2 = document.getElementById('letter2');
// let letter3 = document.getElementById('letter3');
// let letter4 = document.getElementById('letter4');
// let letter5 = document.getElementById('letter5');
// let letter6 = document.getElementById('letter6');
// let letter7 = document.getElementById('letter7');
// let letter8 = document.getElementById('letter8');
// let letter9 = document.getElementById('letter9');
// let letter10 = document.getElementById('letter10');
// let letter11 = document.getElementById('letter11');
// let letter12 = document.getElementById('letter12');


let startDate = "2012-05-28";
let endDate = "2019-05-06";



function map(value, low1, high1, low2, high2) {
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

function dist(x1, y1, x2, y2) {
  let a = x1 - x2;
  let b = y1 - y2;
  return Math.sqrt(a * a + b * b);
}


const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'dc6caf6600msh4789e5460114817p14af3fjsndd4451ec5fcc',
    'X-RapidAPI-Host': 'yh-finance-complete.p.rapidapi.com'
  }
};

fetch('https://yh-finance-complete.p.rapidapi.com/yhfhistorical?ticker=%5EGSPC&sdate=2023-04-01&edate=2023-04-20', options)
  .then(response => response.json())
  .then(response => {
    console.log(response)

    // for (let i = 0; i < response.length; i++) {

    //   let words = ["b", "u", "s", "i", "n", "e", "s", "s", "w", "e", "e", "k"];
    //   for (let j = 0; j < words.length; j++) {
    //     // let letter[i] = document.getElementById('letter1');
    //     let letter = document.createElement('div')
    //     letter.classList.add("letter")
    //     letter.setAttribute("id", "letter"+[j+1]);
        
    //     let container = document.getElementById("container");
    //     container.appendChild(letter);
    //     letter.innerHTML = words[j];
 
    //   }

    //   let candleStick = Math.round(response[i].close) - Math.round(response[i].open);
    //   console.log(candleStick);
    //   // letter[i].style.transform = "scale(1," + candleStick / 10 + ")";
    //   let letterContainer = document.querySelector("letter" + [i+2])
    //   let newTop = map(response[i].open, 3700, 4500, 500, 0);
    //   letter[i].style.top = newTop + "px";

    //   console.log(newTop)

    // }


    let words = ["b", "u", "s", "i", "n", "e", "s", "s", "w", "e", "e", "k"];
    for (let j = 0; j < words.length; j++) {
      // let letter[i] = document.getElementById('letter1');
      let letter = document.createElement('div')
      letter.classList.add("letter")
      letter.setAttribute("id", "letter"+[j+1]);
      
      let container = document.getElementById("container");
      container.appendChild(letter);
      letter.innerHTML = words[j];

      // let candleStick = Math.round(response[j].close) - Math.round(response[j].open);
      // console.log(candleStick);
      // letter[j].style.transform = "scale(1," + candleStick / 10 + ")";
      // // let letterContainer = document.querySelector("letter" + [i+2])
      // let newTop = map(response[j].open, 3700, 4500, 500, 0);
      // letter[j].style.top = newTop + "px";
  
      // console.log(newTop)

    }

    // let candleStick = Math.round(response[i].close) - Math.round(response[i].open);
    // console.log(candleStick);
    // // letter[i].style.transform = "scale(1," + candleStick / 10 + ")";
    // let letterContainer = document.querySelector("letter" + [i+2])
    // let newTop = map(response[i].open, 3700, 4500, 500, 0);
    // letter[i].style.top = newTop + "px";

    // console.log(newTop)
//     let letter1 = document.getElementById('letter1');
// let letter2 = document.getElementById('letter2');
// let letter3 = document.getElementById('letter3');
// let letter4 = document.getElementById('letter4');
// let letter5 = document.getElementById('letter5');
// let letter6 = document.getElementById('letter6');
// let letter7 = document.getElementById('letter7');
// let letter8 = document.getElementById('letter8');
// let letter9 = document.getElementById('letter9');
// let letter10 = document.getElementById('letter10');
// let letter11 = document.getElementById('letter11');
// let letter12 = document.getElementById('letter12');

    for(let i = 1; i < 13; i++){
      let letter = document.getElementById('letter'+[i]);
      let candleStick1 = Math.round(response[i].close) - Math.round(response[i].open);
      console.log(candleStick1);
      letter.style.transform = "scale(1," + candleStick1/10 + ")";
      let newTop1 = map(response[i].open, 3700, 4500, 500, 0);
      letter.style.top = newTop1 + "px";
  
      console.log(newTop1)

    }

    // let candleStick1 = Math.round(response[0].close) - Math.round(response[0].open);
    // console.log(candleStick1);
    // letter1.style.transform = "scale(1," + candleStick1/10 + ")";
    // let newTop1 = map(response[0].open, 3700, 4500, 500, 0);
    // letter1.style.top = newTop1 + "px";

    // console.log(newTop1)


    // let candleStick2 = Math.round(response[1].close) - Math.round(response[1].open);
    // console.log(candleStick2);
    // letter2.style.transform = "scale(1," + candleStick2/10 + ")";
    // let newTop2 = map(response[1].open, 3700, 4500, 500, 0);
    // letter2.style.top = newTop2 + "px";

    // console.log(newTop2)


    // let candleStick3 = Math.round(response[2].close) - Math.round(response[2].open);
    // console.log(candleStick3)
    // letter3.style.transform = "scale(1," + candleStick3/10 + ")";
    // let newTop3 = map(response[2].open, 3700, 4500, 500, 0);
    // letter3.style.top = newTop3 + "px";


    // console.log(newTop3)


    // let candleStick4 = Math.round(response[3].close) - Math.round(response[3].open);
    // console.log(candleStick4)
    // letter4.style.transform = "scale(1," + candleStick4/10 + ")";
    // let newTop4 = map(response[3].open, 3700, 4500, 500, 0);
    // letter4.style.top = newTop4 + "px";



    // let candleStick5 = Math.round(response[4].close) - Math.round(response[4].open);
    // console.log(candleStick5)
    // letter5.style.transform = "scale(1," + candleStick5/10 + ")";
    // let newTop5 = map(response[4].open, 3700, 4500, 500, 0);
    // letter5.style.top = newTop5 + "px";



    // let candleStick6 = Math.round(response[5].close) - Math.round(response[5].open);
    // console.log(candleStick6)
    // letter6.style.transform = "scale(1," + candleStick6/10 + ")";
    // // letter6.style.top = map(response[5].open, 3700, 4500, 100, 0) + "vh";
    // let newTop6 = map(response[5].open, 3700, 4500, 500, 0);
    // letter6.style.top = newTop6 + "px";


    // let candleStick7 = Math.round(response[6].close) - Math.round(response[6].open);
    // console.log(candleStick7)
    // letter7.style.transform = "scale(1," + candleStick7/10 + ")";
    // letter7.style.top = map(response[6].open, 3700, 4500, 500, 0) + "px";

    // let candleStick8 = Math.round(response[7].close) - Math.round(response[7].open);
    // console.log(candleStick8)
    // letter8.style.transform = "scale(1," + candleStick8/10 + ")";
    // letter8.style.top = map(response[7].open, 3700, 4500, 500, 0) + "px";

    // let candleStick9 = Math.round(response[8].close) - Math.round(response[8].open);
    // console.log(candleStick9)
    // letter9.style.transform = "scale(1," + Math.abs(candleStick9)/10 + ")";
    // letter9.style.top = map(response[8].open, 3700, 4500, 500, 0) + "px";


    // let candleStick10 = Math.round(response[9].close) - Math.round(response[9].open);
    // console.log(candleStick10)
    // letter10.style.transform = "scale(1," + Math.abs(candleStick10)/10 + ")";
    // letter10.style.top = map(response[9].open, 3700, 4500, 500, 0) + "px";


    // let candleStick11 = Math.round(response[10].close) - Math.round(response[10].open);
    // console.log(candleStick10)
    // letter11.style.transform = "scale(1," + Math.abs(candleStick11)/10 + ")";
    // letter11.style.top = map(response[10].open, 3700, 4500, 500, 0) + "px";


    // let candleStick12 = Math.abs(Math.round(response[11].close) - Math.round(response[11].open))
    // console.log(candleStick12)
    // letter12.style.transform = "scale(1," + candleStick12/10 + ")";
    // letter12.style.top = map(response[11].open, 3700, 4500, 500, 0) + "px";

  })


  .catch(err => console.error(err));