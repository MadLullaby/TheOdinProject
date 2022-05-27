const leapYears = function(year) 
{

    //is leap: /4 and /400 
    //isnot leap: /100, odd numbers

    if (year % 400 != 0 && year % 100 == 0 || year % 2 == 1)  // i had to add 400 to not combine it with the other if
    {

        return false;

    }
    if (year % 4 == 0 || year % 400 == 0)
    {

        return true;

    }

};

leapYears();

// Do not edit below this line
module.exports = leapYears;
