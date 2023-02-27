const math = ()=>{}

// math.add = (...args) => {
  math.add = (a, b) => {
    sum = 0
    // for (i=0; i< args.length; i++)
    //   sum += args[i]
    return sum + a + b
}

math.subtract = (a, b) => {
  return a - b;
}

math.multiply = (a, b) => {
  return a * b;
}

math.divide = (a, b) => {
  if (b === 0) return "Invalid"
  return a / b;
}

module.exports = math;