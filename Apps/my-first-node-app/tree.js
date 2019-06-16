function simleTreeNode(value) {
  return {
    value: value,
    left: undefined,
    right: undefined
  };
}
function makeTree(nodeType) {
  let root = nodeType(0);
  root.left = nodeType(1);
  root.left.left = nodeType(2);
  root.right = nodeType(3);
  root.right.left = nodeType(4);
  root.right.right = nodeType(5);
  root.right.right.right = nodeType(6);
  return root;
}

let tree = makeTree(simleTreeNode);
console.log(tree);
