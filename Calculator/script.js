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
                inputNum(button[i].value);
                getDisplay();
            }
            if (button[i].classList.contains("operator"))
            {
                inputOperator(button[i].value);
                getDisplay();
            }
            if (button[i].classList.contains("equal"))
            {
                inputEqual();
                getDisplay();
            }
            if (button[i].classList.contains("clear"))
            {
                inputClear();
                getDisplay();
            }
            if (button[i].classList.contains("delete"))
            {
                inputDelete();
                getDisplay();
            }
            if (button[i].classList.contains("percent"))
            {
                inputPercent(displayValue);
                getDisplay();
            }
            if (button[i].classList.contains("sign"))
            {
                inputSign(displayValue);
                getDisplay();
            }
            if (button[i].classList.contains("dot"))
            {
                inputDot(button[i].value);
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
        else if ( firstNum === displayValue)
        {
            displayValue = number;
        }
        else
        {
            displayValue += number;
        }
    }
    else
    {
        if ( firstNum === displayValue)
        {
            displayValue = number;
        }
        else
        {
            displayValue += number;
        }
    }

}


function inputOperator(operator)
{
    if (firstOperator === null && secondOperator === null)
    {
        firstOperator = operator;
        firstNum = displayValue;
    }
    else if (firstOperator != null && secondOperator === null)
    {
        secondOperator = operator;
        secondNum = displayValue;
        result = operate(Number(firstNum), Number(secondNum), firstOperator)
        displayValue = roundAccurately(result, 15).toString();
        firstNum = displayValue;
        result = null;
    }
    else if (firstOperator != null  && secondOperator != null)
    {
        secondNum = displayValue;
        result = operate(Number(firstNum), Number(secondNum), secondOperator);
        secondOperator = operator;
        displayValue = roundAccurately(result, 15).toString();
        firstNum = displayValue;
        result = null;
    }
}


function inputEqual()
{
    if (firstOperator === null)
    {
        displayValue = displayValue;
    }
    else if (secondOperator != null)
    {
        secondNum = displayValue;
        result = operate(Number(firstNum), Number(secondNum), secondOperator);
        if (result === "ERROR")
        {
            displayValue = "ERROR";
        }
        else
        {
            displayValue = roundAccurately(result, 15).toString();
            firstNum = displayValue;
            secondOperator = null;
            secondNum = null;
            result = null;
        }
    }
    else //(firstOperator != null && secondOperator === null)
    {
        secondNum = displayValue;
        result = operate(Number(firstNum), Number(secondNum), firstOperator)
        if (result === "ERROR")
        {
            displayValue = "ERROR";
        }
        else
        {
            displayValue = roundAccurately(result, 15).toString();
            firstNum = displayValue;
            secondNum = null;
            firstOperator = null;
            secondOperator = null;
            result = null;
        }
    }
   
}




function inputClear()
{
    displayValue = 0;
    firstNum = null;
    secondNum= null;
    firstOperator= null;
    secondOperator= null;
    result= null;
}

function inputDelete()
{
    displayValue = displayValue.toString().slice(0, -1);
}

function inputPercent(num)
{
    displayValue = (num/100).toString();
}

function inputSign(num)
{
   displayValue = -num.toString();
}

function inputDot(dot)
{
    if(displayValue === firstNum || displayValue === secondNum) 
    {
        displayValue = '0';
        displayValue += dot;
    } 
    else if (!displayValue.includes(dot))
    {
        displayValue += dot;
    } 
}






function operate (x, y, operator){
    switch (operator)
    {
        case "+":
            return x+y;
            
        case "-":
            return x-y;
            
        case "*":
            return x*y;
            
        case "/":
            if (y == 0){
                return "ERROR";
            };
            return x/y;
            
    }
       
}

function roundAccurately(num, places) {
    return parseFloat(Math.round(num + 'e' + places) + 'e-' + places);
}