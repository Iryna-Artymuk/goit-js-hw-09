

 const body = document.querySelector('body')
 const start = document.querySelector('[data-start]')
 const end = document.querySelector('[data-stop]')
 start.addEventListener('click',changeColor)
 end.addEventListener('click',stopChangeColor)
let changeColorId = null;
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
  
  console.log(getRandomHexColor())

function changeColor() {
    start.setAttribute('disabled', " ")
    console.log(start)
    changeColorId =setInterval(() => {
        const randomColor = getRandomHexColor() 
       body.style.backgroundColor= randomColor
      },1000)
}


function stopChangeColor() {
     clearInterval(changeColorId)
 }