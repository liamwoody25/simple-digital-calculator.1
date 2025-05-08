const display = document.getElementById('display')
const numButtons = document.querySelectorAll('.number-key')


function displayOutput(value){
  const displayInput = document.getElementById('display');
 

}


function numInput() {
  for(const button of numButtons) {
    button.addEventListener('click', function(){
      display.value += button.textContent;
    })
  }
}

numInput()
