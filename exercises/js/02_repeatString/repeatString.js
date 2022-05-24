
const repeatString = function(string, num) {
   
    let repeatedString = "";
while (num > 0){
    repeatedString += string;
   
    num  --;
}
if (num >= 0){


    return repeatedString;
}

else { return "ERROR" }

};
repeatString("", 10).match(/((hey))/g);

// Do not edit below this line
module.exports = repeatString;
