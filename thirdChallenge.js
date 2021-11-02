const generateId = () => {
  let hexToken = '';

  for (let index = 0; index < 16; index += 1) {
    hexToken += Math.floor(Math.random() * 16).toString(16);
    if ((index + 1) % 4 === 0 && index < 15) {
      hexToken += '-';
    }
  }

  return hexToken;
}
