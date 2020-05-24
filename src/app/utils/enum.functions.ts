export function enumSelector(definition) {
    return Object.keys(definition).filter(k => !isNaN(Number(k))).map(Number);
  }