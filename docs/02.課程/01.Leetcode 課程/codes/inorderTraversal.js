// Binary Tree = 有 left , 就沒有 right , 反之亦然
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {

    // 可以算出 position , 一次 left = -1 , 一次 right = +1

    // 可以求出每個 TreeNode 各自的 position , 起始位置 = 0

    const result = [];

    const nodePush = (node, index) => {

        console.log('result=', result)
        console.log('node.val=', node.val)
        result.splice(index, 0, node.val);

        if (node.right) {

            console.log('right')
            nodePush(node.right, index + 1);
        }

        if (node.left) {

            console.log('left')
            nodePush(node.left, index)
        }
    }

    nodePush(root, 0);

    return result;
};

// Input: root = [1,null,2,3]
// Output: [1,3,2]
const input = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, null, null), null))

// Input: root = [3,1,2]
const input2 = new TreeNode(3, new TreeNode(1), new TreeNode(2))
console.log(inorderTraversal(input))
// console.log(inorderTraversal(input2))