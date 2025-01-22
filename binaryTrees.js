var TreeNode = /** @class */ (function () {
    function TreeNode(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
function newNode(data) {
    return new TreeNode(data);
}
function insert(node, data) {
    if (node === undefined)
        throw new Error("root node required");
    if (node === null)
        return newNode(data);
    if (data <= node.data) {
        node.left = insert(node.left, data);
    }
    else {
        node.right = insert(node.right, data);
    }
    return node;
}
var root = insert(null, 2);
insert(root, 1);
insert(root, 3);
console.log({ root: root });
