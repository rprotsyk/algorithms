let node = {
    val: 6,
    left: null,
    right: null
}
//       6
//     /   \ 
//    4      3
//   / \    /  \
//  9   1  null 8 
          
class TreeNode {
    left: TreeNode;
    right: TreeNode;
    val: number;
}
const root: TreeNode = { val: 6, left: null, right: null} as TreeNode;
root.left = {val: 4} as TreeNode;
root.right = {val: 3} as TreeNode;
root.left.left = {val: 9} as TreeNode;
root.left.right = {val: 1} as TreeNode;
root.right.right = {val: 8} as TreeNode;

/**9
4
1
6
3
8
undefined */
const inorder = (node) => {
    if(!node) {
        return null;
    }
    inorder(node.left);
    console.log(node.val);
    inorder(root.right);
}

/*6
4
9
1
3
8
undefined*/
const preorder = (node) => {
    if(!node) {
        return null;
    }
    console.log(node.val);
    preorder(node.left);
    preorder(node.right);
}
/** 9
1
4
8
3
6
undefined
 */
const postorder = (node) => {
    if(!node) {
        return null;
    }
    postorder(node.left);
    postorder(node.right);
    console.log(node.val);
}

const levelOrder = (node) => {
    let queue: TreeNode[] = [];
    queue.push(node);
    while (queue.length > 0) {
        const currentNode = queue.shift();
        if(currentNode === undefined) {
            continue;
        }
        console.log(currentNode.val);
        queue.push(currentNode.left);
        queue.push(currentNode.right);
    }
}
console.log(levelOrder(root))