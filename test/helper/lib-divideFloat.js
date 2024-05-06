const divideWithPrecision = (num, parts, precision = 2) => {
    const formattedValue = (num / parts).toFixed(precision).replace('.', ',');
    return { parts, value: formattedValue };
};

export default divideWithPrecision;

//got this code from https://www.tutorialspoint.com/dividing-a-floating-number-rounding-it-to-2-decimals-and-calculating-the-remainder-in-javascript