let displayValue = 0;
let firstNum = null;
let secondNum= null;
let firstOperator= null;
let secondOperator= null;
let result= null;
const button = document.querySelectorAll("button")



function getDisplay(){
    const display = document.querySelector(".display");
    display.innerHTML = displayValue;
    if (displayValue.length > 11)
    {
        display.innerHTML = displayValue.substring(0, 11);
    }
}

getDisplay();

function clickButton()
{
    for (let i=0; i < button.length; i++)
    {
        button[i].addEventListener("click", function()
        {
            if (button[i].classList.contains("number"))
            {
            inputNum(button[i].value)
            getDisplay();
            }
        })
    }
}
clickButton();

function inputNum(number)
{
    if (firstOperator === null)
    {
        if ( displayValue === "0" || displayValue === 0 )
        {
            displayValue = number;
        }
        else
        {
            displayValue += number;
        }
    }


}



function operate (x, operator, y){
    switch (operator)
    {
        case "+":
            return x+y;
            break;
        case "-":
            return x-y;
            break;
        case "*":
            return x*y;
            break;
        case "/":
            if (y == 0){
                return "lol";
            }
            return x/y;
            break;
    }
       
}