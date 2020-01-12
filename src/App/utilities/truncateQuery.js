
import indexOfLastCharacter from './indexOfLastCharacter';

const truncateQuery = query => {
  if (!query) {
    return null;
  }

  const { length } = query;
  const position = indexOfLastCharacter(length);
  const lastCharacter = query.slice(position);

  return lastCharacter || query.slice(-4);
}

export default truncateQuery;
