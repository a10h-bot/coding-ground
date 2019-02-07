function node(data) {
  return {
    data: data,
    left: null,
    right: null

  };
}
let root;

function makeTree(nodeType) {
  root = nodeType(10);
  root.left = nodeType(3);
  root.right = nodeType(12)
  root.right.right = nodeType(17);
  root.left.left = nodeType(2)
}
var tree = makeTree(node);
console.log(root);