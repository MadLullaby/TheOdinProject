const fibonacci = function(n) {

    if (n < 3 && n + 1 > 0) return 1;
    if (n < 0) return "OOPS"
    
   return  fibonacci(n-1) + fibonacci(n-2);  
    
   


};

// Do not edit below this line
module.exports = fibonacci;
