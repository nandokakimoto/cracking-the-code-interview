import assert from 'assert';
import TreeNode from '../../lib/tree_node';
import listOfDepths from '../solution';

describe('List of Depths', () => {
  it('should return a single list when there is only the root', () => {
    const node = new TreeNode(10);

    const list = listOfDepths(node);

    assert.equal(list.length, 1);
    assert.equal(list[0].length, 1);
    assert.equal(list[0][0].data, 10);
  });

  it('should return two lists for the root and its children', () => {
    const node = new TreeNode(10);
    node.left = new TreeNode(5);
    node.right = new TreeNode(15);

    const list = listOfDepths(node);

    assert.equal(list.length, 2);

    assert.equal(list[0].length, 1);
    assert.equal(list[0][0].data, 10);

    assert.equal(list[1].length, 2);
    assert.equal(list[1][0].data, 5);
    assert.equal(list[1][1].data, 15);
  });

  it('should return three lists for all three depths of the tree', () => {
    let child = null;

    const node = new TreeNode(10);
    node.left = new TreeNode(5);
    node.right = new TreeNode(15);

    child = node.left;
    child.left = new TreeNode(2);
    child.right = new TreeNode(7);

    child = node.right;
    child.left = new TreeNode(13);
    child.right = new TreeNode(18);

    const list = listOfDepths(node);

    assert.equal(list.length, 3);

    assert.equal(list[0].length, 1);
    assert.equal(list[0][0].data, 10);

    assert.equal(list[1].length, 2);
    assert.equal(list[1][0].data, 5);
    assert.equal(list[1][1].data, 15);

    assert.equal(list[2].length, 4);
    assert.equal(list[2][0].data, 2);
    assert.equal(list[2][1].data, 7);
    assert.equal(list[2][2].data, 13);
    assert.equal(list[2][3].data, 18);
  });
});
