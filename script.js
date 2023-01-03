let buttons = document.querySelectorAll('button'); // We find all buttons (+), (-), (x), (:);
buttons.forEach((symbol) =>{ // For each button symbol;   symbol = + or - or x or : ;
    symbol.addEventListener('click', (event) => { // We add event for symbol
        calc(event.target.textContent) // All variants in this function === 1) '+', 2) '-', 3) 'x', 4) ':'
    })
})

// Calculate function
function calc(e){
    let result; // result block
    let num1 = Number(document.getElementById('numOne').value); // input number 1
    let num2 = Number(document.getElementById('numTwo').value); // input number 2

    // For me new conditional operator (switch case)
    switch (e){
        
        // If we click to button with +
        case '+':
            result = num1 + num2;
            break;

        // If we click to button with -
        case '-':
            result = num1 - num2;
            break;

        // If we click to button with x
        case 'x':
            result = num1 * num2;
            break;

        // If we click to button with :
        case ':':
            result = num1 / num2;
            break;
        
    }
    document.querySelector('.calc__result').value = result; // switch case answer we add to calc__result in html file
}