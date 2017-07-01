import Tree from '../lib/tree';
import Node from '../lib/tree_node';

function minimalTree(array) {
  if (array === undefined || array.length === 0) {
    return null;
  }

  const middle = Math.floor(array.length / 2);
  const root = new Node(array[middle]);

  if (middle > 0) {
    root.left = minimalTree(array.slice(0, middle)).root;
  }

  if (middle < array.length - 1) {
    root.right = minimalTree(array.slice(middle + 1, array.length)).root;
  }

  return new Tree(root);
}

export default minimalTree;
