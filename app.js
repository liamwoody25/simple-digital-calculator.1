const display = document.getElementById('display')
const numButtons = document.querySelectorAll('.number-key, #zero-btn')
const addBtns = document.querySelector('add-key')


function displayOutput(value){
  const displayInput = document.getElementById('display');
}

function showCalc() {
  if (value === '+') {
    console.log('add number')
  }
}


function numInput() {
  for(const button of numButtons) {
    button.addEventListener('click', function(){
      display.value += button.textContent;
    })
  }
}


// addBtns.addEventListener('click', function(){
//   showCalc()
// })

// showCalc()

numInput()

