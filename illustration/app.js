// let houses = document.querySelectorAll('.house');
let containerDivs = document.querySelectorAll(".container > div")
const cursor = document.querySelector("#cursor");

for (let elem of containerDivs) {
    elem.addEventListener("mouseover", function(e){
        elem.style.width = Math.random() * 50 + 50 + "px";
        elem.style.top = (Math.random() * 100) + "vh";
        elem.style.left = window.innerWidth + "px";
})
}

// for (let house of houses) {
//     house.addEventListener("mouseover", function(e){
//        house.style.width = Math.random() * 50 + 50 + "px";
//        house.style.top = (Math.random() * 100) + "vh";
//        house.style.left = window.innerWidth + "px";
//     })
// }

document.addEventListener("mousemove", function(e){
    cursor.style.top = e.clientY + "px"
    cursor.style.left = e.clientX + "px"
  })