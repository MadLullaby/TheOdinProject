const sumAll = function(num1, num2) {

    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {return "ERROR"}
    if (num1 < 0 || num2 < 0) {return "ERROR"};

    if (num1 > num2)   // 5, 2
    {

        const newMin = num2;   // = 2
        num2 = num1;           // 2 = 5 -->  (5, 5);
        num1 = newMin;         // 5 = 2 -->  (2, 5);
        

    }


let sum = 0;

    if (num1 <= num2)
    {

        for (let i = num1; i < num2 + 1; i++)
        {

            sum += i;

        }

        return sum;
    }

};

sumAll();

// Do not edit below this line
module.exports = sumAll;
