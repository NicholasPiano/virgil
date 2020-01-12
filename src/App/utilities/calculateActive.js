
import findIndex from 'lodash/findIndex';

const calculateActive = (characters, active, command) => {
  let activeIndex = findIndex(characters, ({ key }) => key === active);

  if (command === 1) {
    activeIndex -= 1;
  }

  if (command === 2) {
    activeIndex += 1;
  }

  if (command === 3) {
    activeIndex -= 8;
  }

  if (command === 4) {
    activeIndex += 8;
  }

  activeIndex = activeIndex > characters.length - 1 ? characters.length - 1 : activeIndex;
  activeIndex = activeIndex < 0 ? 0 : activeIndex;

  return characters[activeIndex].key;
};

export default calculateActive;
