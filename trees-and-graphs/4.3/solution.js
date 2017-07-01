function listOfDepths(node, depth, list) {
  if (node === null) {
    return list;
  }

  if (list.length === depth) {
    const depthList = [node];
    list.push(depthList);
  } else {
    const depthList = list[depth];
    depthList.push(node);
  }

  listOfDepths(node.left, depth + 1, list);
  listOfDepths(node.right, depth + 1, list);

  return list;
}

export default function (root) {
  return listOfDepths(root, 0, []);
}
