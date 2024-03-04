class BinarySearchTreeNode<T> {
  value: T;
  rightNode?: BinarySearchTreeNode<T>;
  leftNode?: BinarySearchTreeNode<T>;

  constructor(value: T) {
    this.value = value;
  }
}

class BinarySearchTree<T> {
  root?: BinarySearchTreeNode<T>;

  isEmpty(): boolean {
    return this.root === undefined;
  }

  add(value: T): void {
    if (this.isEmpty()) {
      this.root = new BinarySearchTreeNode(value);
    } else {
      this._add(value, this.root!);
    }
  }

  private _add(value: T, node: BinarySearchTreeNode<T>) {
    if (value > node.value) {
      if (node.rightNode) {
        this._add(value, node.rightNode);
      } else {
        node.rightNode = new BinarySearchTreeNode(value);
      }
    } else if (value < node.value) {
      if (node.leftNode) {
        this._add(value, node.leftNode);
      } else {
        node.leftNode = new BinarySearchTreeNode(value);
      }
    }
  }

  // Depth first search
  contains(value: T): boolean {
    if (this.isEmpty()) return false;
    return this._contains(value, this.root);
  }

  private _contains(
    value: T,
    node: BinarySearchTreeNode<T> | undefined,
  ): boolean {
    if (node === undefined) return false;
    if (value > node.value) {
      return this._contains(value, node.rightNode);
    } else if (value < node.value) {
      return this._contains(value, node.leftNode);
    } else {
      return true;
    }
  }

  walkInPreOrder(curr: BinarySearchTreeNode<T> | undefined, path: T[]): T[] {
    if (!curr) {
      return path;
    }

    // pre
    path.push(curr.value);

    // recurse
    this.walkInPreOrder(curr.leftNode, path);
    this.walkInPreOrder(curr.rightNode, path);

    // post
    return path;
  }

  preOrderSearch() {
    return this.walkInPreOrder(this.root, []);
  }

  walkInOrder(curr: BinarySearchTreeNode<T> | undefined, path: T[]): T[] {
    if (!curr) {
      return path;
    }

    // recurse
    this.walkInOrder(curr.leftNode, path);
    path.push(curr.value);
    this.walkInOrder(curr.rightNode, path);

    // post
    return path;
  }

  inOrderSearch() {
    return this.walkInOrder(this.root, []);
  }

  walkInPostOrder(curr: BinarySearchTreeNode<T> | undefined, path: T[]): T[] {
    if (!curr) {
      return path;
    }

    // recurse
    this.walkInPostOrder(curr.leftNode, path);
    this.walkInPostOrder(curr.rightNode, path);

    // post
    path.push(curr.value);
    return path;
  }

  postOrderSearch() {
    return this.walkInPostOrder(this.root, []);
  }

  // Breadth first search
  bfs(value: T): boolean {
    const q = [this.root];

    while (q.length) {
      const curr = q.shift() as BinarySearchTreeNode<T>;

      if (curr.value === value) {
        return true;
      }

      if (curr.leftNode) q.push(curr.leftNode);
      if (curr.rightNode) q.push(curr.rightNode);
    }

    return false;
  }
}

function campare(
  a: BinarySearchTreeNode<number> | undefined,
  b: BinarySearchTreeNode<number> | undefined,
): boolean {
  if (a === undefined && b === undefined) {
    return true;
  }

  if (a === undefined || b === undefined) {
    return false;
  }

  if (a.value !== b.value) {
    return false;
  }

  return campare(a.leftNode, b.leftNode) && campare(a.rightNode, b.rightNode);
}

// {
const tree = new BinarySearchTree<number>();
tree.add(10);
tree.add(5);
tree.add(2);
tree.add(8);
tree.add(1);
tree.add(3);
tree.add(7);
tree.add(9);
tree.add(15);
tree.add(12);
tree.add(18);
tree.add(11);
tree.add(14);
tree.add(17);
tree.add(19);
tree.add(20);

const tree2 = new BinarySearchTree<number>();
tree2.add(10);
tree2.add(5);
tree2.add(2);
tree2.add(8);
tree2.add(1);
tree2.add(3);
tree2.add(7);
tree2.add(9);
tree2.add(15);
tree2.add(12);
tree2.add(18);
tree2.add(11);
tree2.add(14);
tree2.add(17);
tree2.add(19);
tree2.add(20);

// console.log(tree.contains(17)); // true
// console.log(tree.contains(21)); // false

// console.log(tree.preOrderSearch());
// console.log(tree.inOrderSearch());
// console.log(tree.postOrderSearch());

console.log(campare(tree.root, tree2.root));
// }

//            10
//          /    \
//        5       15
//       / \     /  \
//      2   8   12   18
//     / \ / \  / \   / \
//    1  3 7 9 11 14 17 19
//                        \
//                         20
