
const letters = ['A', 'B', 'G', 'D', 'E', 'Z', 'H', 'T', 'I', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'Y', 'P', 'X', 'W', 'a', 'b', 'g', 'd', 'e', 'z', 'h', 't', 'i', 'k', 'l', 'm', 'v', 'o', 'p', 'r', 's', '6', 'u', 'x', 'w'];

const sum = array => array.reduce((whole, part) => whole + part, 0);

const calculateScore = (text, query) => {
  const textCharacters = text.split('');
  const characters = query.split('');
  const matchScore = text === query ? 10 : 0
  const existenceScores = textCharacters.map(character => {
    if (characters.indexOf(character) === -1) {
      return -1;
    }

    return 0;
  });
  const positionScores = characters.map((character, index) => {
    const textPosition = textCharacters.indexOf(character);

    if (textPosition === -1) {
      return -2;
    }

    return 4 - Math.abs(textPosition - index);
  });
  const letterScores = characters.map(character => {
    if (letters.indexOf(character) !== -1 && textCharacters.indexOf(character) !== -1) {
      return 10;
    }

    return 0;
  });

  const total = matchScore + sum(existenceScores) + sum(positionScores) + sum(letterScores);

  return total;
};

export default calculateScore;
