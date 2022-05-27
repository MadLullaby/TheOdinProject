const ftoc = function(fahr)
{
  
  let celsius = (fahr - 32) * (5/9);

  return Math.round(celsius * 10) / 10;

};

const ctof = function(cels)
{

    let fahrenheit = (cels * 1.8) + 32;

    return Math.round(fahrenheit * 10) / 10;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
