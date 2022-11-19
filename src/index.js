const clearBtn = document.querySelector(".ac");
const buttons = document.querySelector(".buttons");
const output = document.querySelector(".calcScreen p");
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const actions = ["-", "+", "X", "/"];

let = a = ""; // first number
let b = ""; // second number
let sign = ""; // operation sign
let finish = false; // end of calculation

// clear screen of our calculator
    const clearScreen = () => {
        debugger;
    a = "";
    b = "";
    sign = "";
    finish = false;
    output.textContent = 0;
    };

// adding event listener to the ac btn
clearBtn.addEventListener("click", clearScreen);

    // adding even to the div
    buttons.addEventListener("click", (e) => {
    // pressed not button
    if (!e.target.classList.contains("btn")) return;
    // pressed ac button which has own event listener
    if (e.target.classList.contains(".ac")) return;
    output.textContent = "";
    // getting pressed button
    const btnKey = e.target.textContent;
    // checking if was pressed a button (0 - 9 or .)
    if (numbers.includes(btnKey)) {
        if (b === "" && sign === "") {
        a += btnKey;
        output.textContent = a;
        } else if (a !== "" && b !== "" && finish) {
        b = btnKey;
        finish = false;
        output.textContent = b;
        } else {
        b += btnKey;
        output.textContent = b;
        }
        console.log(a, b, sign);
        return;
    }
    // checking if was pressed a button (-, +, X, /)
    if (actions.includes(btnKey)) {
        sign = btnKey;
        output.textContent = sign;
        console.log(a, b, sign);
        return;
    }
    // pressed button '='
    if (btnKey === "=") {
        if(b === "") {
            b = a;
        }
        switch (sign) {
        case "+":
            a = +a + +b;
            break;
        case "-":
            a = a - b;
            break;
        case "X":
            a = a * b; 
            break;
        case "/":
            if(b === '0') {
                output.textContent = 'Error';
                a ='';
                b = '';
                sign = '';
                return
            }
            a = a / b;
            break;
        }
        finish = true;
        output.innerText = a;
        console.log(a, b, sign);
    }
    });
