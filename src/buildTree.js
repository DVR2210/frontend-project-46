import _ from 'lodash';

const buildTree = (object1, object2) => {
  const clone1 = _.cloneDeep(object1);
  const clone2 = _.cloneDeep(object2);

  const keys = _.sortBy(_.union(_.keys(clone1), _.keys(clone2)));

  const tree = keys.map((key) => {
    if (!_.has(clone2, key)) {
      return { name: key, status: 'deleted', value: clone1[key] };
    }
    if (!_.has(clone1, key)) {
      return { name: key, status: 'added', value: clone2[key] };
    }
    if (_.isObject(clone1[key]) && _.isObject(clone2[key])) {
      return { name: key, status: 'nested', children: buildTree(clone1[key], clone2[key]) };
    }
    if (_.isEqual(clone1[key], clone2[key]) === true) {
      return { name: key, status: 'unchanged', value: clone1[key] };
    }
    return {
      name: key, status: 'changed', value1: clone1[key], value2: clone2[key],
    };
  });
  return tree;
};
export default buildTree;