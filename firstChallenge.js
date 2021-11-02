const arrayFilter = (array) => {
  const charArray = [];
  const numberArray = [];

  for (let value of array) {
    if (typeof value === 'string') {
      charArray.push(value);
    } else {
      numberArray.push(value);
    }
  }

  const sortedArray = numberArray.sort((a, b) => a - b);

  return {
    charArray,
    numberArray,
    maxNumber: sortedArray[sortedArray.length - 1],
  };
};
