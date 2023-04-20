// Write your code here
const bulb1 = document.querySelector("#lightbulb1")
const bulb2 = document.querySelector("#lightbulb2")
const bulb3 = document.querySelector("#lightbulb3")
const subtitle = document.querySelector(".subtitle")


bulb1.addEventListener("mouseover",counting)
bulb2.addEventListener("mouseover",counting)
bulb3.addEventListener("mouseover",counting)

let count = 0;
function counting(){
    count++
    console.log(count)
    subtitle.innerHTML = `You've hovered over the lights ${count} times`
    this.classList.toggle("active")
}
