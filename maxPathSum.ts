function maxPathSum(root: TreeNode | null): number {
    let res = -Infinity;
    const helper = (node: TreeNode | null): number => {
      if (!node) return 0;
      const left = Math.max(0, helper(node.left));
      console.log("Left:" + left)
        const right = Math.max(0, helper(node.right));
      console.log("Right: " + right)
        res = Math.max(res, node.val + left + right)
        return node.val + Math.max(left, right);
    }
    helper(root);
    return res;
  }
