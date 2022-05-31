const palindromes = function (str) {


    
        var nopunctuation = str.replace(/\W/g,"");
        var nospaces = nopunctuation.replace(/\s/g,"");
        var finalstring = nospaces.toLowerCase();
      
        var len = finalstring.length;
        for ( var i = 0; i < Math.floor(len/2); i++ ) {
          if (finalstring[i] !== finalstring[len - 1 - i]) {
            return false;
          }
        }
        return true;    
      

};

// Do not edit below this line
module.exports = palindromes;
