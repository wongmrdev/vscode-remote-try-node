class TreeNode {
  data: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function newNode(data: number) {
  return new TreeNode(data);
}

function insert(node: TreeNode | null, data: number): TreeNode {
  if (node === undefined) throw new Error("root node required");
  if (node === null) return newNode(data);
  if (data <= node.data) {
    node.left = insert(node.left, data);
  } else {
    node.right = insert(node.right, data);
  }
  return node;
}

function size(node: TreeNode | null): number {
  if (node === null || node === undefined) return 0;
  return 1 + size(node.left) + size(node.right);
}

function maxDepth(node: TreeNode | null): number {
  if (node === null) return 0;
  if (node.left === null && node.right === null) return 1;
  return maxDepth(node.left) >= maxDepth(node.right)
    ? 1 + maxDepth(node.left)
    : 1 + maxDepth(node.right);
}

function minValue(node: TreeNode | null): number {
  if (node === null) throw new Error("node cannot be null");
  if (node.left !== null) return minValue(node.left);
  return node.data;
}

function maxValue(node: TreeNode | null): number {
  if (node === null) throw new Error("node cannot be null");
  if (node.right !== null) return maxValue(node.right);
  return node.data;
}

function printTreeInOrder(node: TreeNode | null): number[] {
  if (node === null) return [];
  let result: number[] = [];
  const traverse = (node: TreeNode | null): void => {
    if (node === null) return;
    traverse(node.left);
    result.push(node.data);
    traverse(node.right);
  };
  traverse(node);
  return result;
}

function printTreePostOrder(node: TreeNode | null): number[] {
  if (node === null) return [];
  let result: number[] = [];
  const traverse = (node: TreeNode | null): void => {
    if (node === null) return;
    traverse(node.left);
    traverse(node.right);
    result.push(node.data);
  };
  traverse(node);
  return result;
}

function hasPathSum(node: TreeNode | null, sum: number): boolean {
  const pathSums: number[] = [];
  const buildPathSums: (node: TreeNode | null, sum: number) => void = (
    node,
    sum = 0
  ) => {
    if (!node) return;
    sum += node.data;
    if (!node.left && !node.right) {
      pathSums.push((sum));
    }
    if (node.left) {
      buildPathSums(node.left, sum);
    }
    if (node.right) {
      buildPathSums(node.right, sum);
    }
  };

  buildPathSums(node, 0);
  console.log("pathSums: ", pathSums);
  return pathSums.includes(sum);
}

function printPathsRecur(
  node: TreeNode | null,
  path: number[],
  pathLen: number
) {}

const root = insert(null, 4);
insert(root, 2);
insert(root, 5);
insert(root, 1);
insert(root, 3);
insert(root, 50);

const root2 = insert(null, 5);
insert(root2, 1);
insert(root2, 3);
insert(root2, 5);
insert(root2, 50);
insert(root2, 10);
insert(root2, 11);
insert(root2, 12);
insert(root2, 13);
insert(root2, 14);
insert(root2, 15);
insert(root2, 16);
insert(root2, 17);

[root, root2].forEach((root) => {
  console.log({ root });
  console.log("size root: ", size(root));
  console.log("maxDepth root: ", maxDepth(root));
  console.log("minValue: ", minValue(root));
  console.log("maxValue: ", maxValue(root));
  console.log("TreeInOrder", printTreeInOrder(root));
  console.log("TreePostOrder", printTreePostOrder(root));
  console.log("hasPathSum 7: ", hasPathSum(root, 7));
  console.log("hasPathSum 9: ", hasPathSum(root, 9));
  console.log("hasPathSum 10: ", hasPathSum(root, 10));
  console.log("hasPathSum 59:", hasPathSum(root, 59));
  console.log("hasPathSum 14: ", hasPathSum(root, 14));
  console.log("hasPathSum 163:", hasPathSum(root, 163));
});
