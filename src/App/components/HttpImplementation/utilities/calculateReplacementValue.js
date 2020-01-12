
const calculateReplacementValue = (value, query, active) => {
  if (value.length < active.length) {
    return active;
  }

  const valueWithoutQuery = value.slice(0, -query.length);

  return valueWithoutQuery + active;
};

export default calculateReplacementValue;
