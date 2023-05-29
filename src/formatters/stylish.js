const stringify = (data, replacer = ' ', spacesCount = 1) => {
  const iter = (iterData, depth) => {
    if (typeof iterData !== 'object' || iterData === null) {
      return String(iterData);
    }
    const startIndent = depth * spacesCount;
    const currentIndent = replacer.repeat(startIndent);
    const secondIndent = replacer.repeat(startIndent - spacesCount);

    const nodeArray = Object.entries(iterData);
    const lines = nodeArray.map(([key, value]) => {
      const nestedIndent = replacer.repeat((depth + 1) * spacesCount);

      return `${currentIndent}${nestedIndent}${key}: ${iter(value, depth + 1)}`;
    });

    const result = ['{', ...lines, `${secondIndent}}`].join('\n');

    return result;
  };
  return iter(data, 1);
};