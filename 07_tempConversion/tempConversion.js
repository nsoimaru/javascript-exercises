const roundToOneDecimal = (num) => Math.round(num * 10) / 10;

const ftoc = function(frh) {
  let result = (frh - 32) * 5/9;  
  let resultRounded = roundToOneDecimal(result)

  return resultRounded;
};

const ctof = function(cls) {
  let result = cls * 9/5 + 32;
  let resultRounded = roundToOneDecimal(result)

  return resultRounded
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
