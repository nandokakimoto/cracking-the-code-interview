import assert from 'assert';
import minimalTree from '../solution';

describe('Minimal Tree', () => {
  it('should return null when array is empty', () => {
    const array = [];
    const tree = minimalTree(array);

    assert.equal(tree, null);
  });

  it('should return tree with single node when array length is 1', () => {
    const array = [10];
    const tree = minimalTree(array);

    assert.equal(tree.root.data, 10);
    assert.equal(tree.depth(), 0);
  });

  it('should return tree with root node as the middle element', () => {
    const array = [0, 5, 10];
    const tree = minimalTree(array);
    const root = tree.root;

    assert.equal(root.data, 5);
    assert.equal(root.left.data, 0);
    assert.equal(root.right.data, 10);
    assert.equal(tree.depth(), 1);
  });

  it('should return tree with minimal depth', () => {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const tree = minimalTree(array);
    const root = tree.root;

    assert.equal(root.data, 5);
    assert.equal(root.left.data, 2);
    assert.equal(root.right.data, 8);
    assert.equal(tree.depth(), 3);
  });
});
