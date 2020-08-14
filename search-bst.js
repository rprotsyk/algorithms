/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var tree = {
    left: {
      left: {
        value: 1
      },
      right: {
        value: 3
      },
      value: 2
    },
    right: {
      left: {
        value: 6
      },
      right: {
        value: 9
      },
      value: 7
    },
    value: 4
  }
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  if(!root) {
    return null;
  }
 
  searchBST(root.left, val);
  if(root.value == val) {
   //console.log(root);
   return root
  }
  //console.log(root.value, val)

  searchBST(root.right, val);
  
};
console.log(searchBST(tree, 4))