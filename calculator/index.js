let screen = document.getElementById('s');
buttons = document.querySelectorAll('button');
let screenValue = '';
let prev='';
for(item of buttons) {
    item.addEventListener('click', (v) => {
        buttonText = v.target.innerText;
        // console.log('Button text is ', buttonText);
         if (buttonText == 'c') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }else if(buttonText == 'd'){
            screen.value = screenValue.slice(0, -1);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
            prev = buttonText;
        }

    })
}

