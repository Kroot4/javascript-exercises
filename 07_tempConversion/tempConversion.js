const ftoc = function(temp) {
  convertedTemp  = (temp - 32) * (5/9);
  let rounded = Math.round(convertedTemp * 10) / 10
  return rounded;
};

const ctof = function(temp) {
  convertedTemp = ((temp * (9/5)) + 32);
  let rounded = Math.round(convertedTemp * 10) / 10
  return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
