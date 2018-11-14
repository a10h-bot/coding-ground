// function to be implemented
// insert(data)
// remove(data)

// Helper function
// findMinNode()
// getRootNode()
// inorder(node)
// preorder(node)
// postorder(node)
// search(node, data)

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(data) {
    let newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertInBST(this.root, newNode);
    }
  }
  insertInBST(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertInBST(node.left, newNode);
      }
    } else {
      if (newNode.data > node.data) {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertInBST(node.left, newNode);
        }
      }
    }
  }
  removeInBST(data) {
    if (root === null) {
      return null;
    }
  }

  preorder(node) {
    if (node != null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }
  getRoot() {
    return this.root;
  }
}

let x = new BST();
x.insert(5);
x.insert(8);
x.insert(2);

console.log(x);
