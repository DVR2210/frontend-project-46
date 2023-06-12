import ymal from 'js-yaml';

const parse = (data, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(data);
    case 'yml':
      return ymal.load(data);
    case 'yaml':
      return ymal.load(data);
    default:
      throw new Error(`Invalid format: ${format}`);
  }
};
export default parse;
