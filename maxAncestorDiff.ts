export function maxAncestorDiff(root: TreeNode | null): number {
    if (root===null) {
      return 0;
    }
    const helper = (node: TreeNode | null, min: number, max: number): number => {
      if (!node) return 0;
      const newMin = Math.min(min, node.val);
      const newMax = Math.max(max, node.val);

      const left = helper(node.left, newMin, newMax);
      const right = helper(node.right, newMin, newMax);

      return Math.max(newMax - newMin, left, right);
    }

    return helper(root, root.val, root.val);
  }
