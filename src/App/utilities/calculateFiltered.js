
import truncateQuery from './truncateQuery';
import calculateScore from './calculateScore';

const calculateFiltered = (characters, query) => {
  if (!query) {
    return characters;
  }

  const truncated = truncateQuery(query);
  const scored = characters.map(({ key, value }) => {
    const score = calculateScore(key, truncated);

    return { key, value, score };
  });
  const filtered = scored.filter(({ score }) => score > 10);
  const sorted = filtered.sort(({ score: a }, { score: b }) => b - a);

  return sorted;
};

export default calculateFiltered;
