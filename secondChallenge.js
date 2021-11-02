const mathOperations = {
  sum: (numbers) => {
    if (numbers.length === 1) {
      return numbers[0];
    }

    return numbers[0] + mathOperations.sum(numbers.splice(1));
  },

  subtraction: (numbers) => {
    if (numbers.length === 1) {
      return numbers[0];
    }

    return numbers[0] - mathOperations.sum(numbers.splice(1));
  },

  multiplication: (numbers) => {
    if (numbers.length === 1) {
      return numbers[0];
    }

    return numbers[0] * mathOperations.sum(numbers.splice(1));
  },

  division: (a, b) => {
    if (b === 0) {
      return "Can't divide by 0"
    }

    return a / b;
  }
};
