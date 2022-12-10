export function maxProduct (root: TreeNode | null) {
    let total: number = 0;
    let modulo = 1e9 + 7;
    let result = Number.MIN_SAFE_INTEGER;

    function totalSumOfNodes(root: TreeNode | null) {
      if (root == null) {
        return
      }
      total += root.val as number;
      totalSumOfNodes(root.left)
      totalSumOfNodes(root.right)
    }
    totalSumOfNodes(root)

    function dfs(root: TreeNode | null) {
      if (root == null) return 0;
      const left = dfs(root.left);
      console.log("Left: " + left)
      const right = dfs(root.right);
      console.log("Right: " + right)
      const sum: number = (root.val as number + left + right) % modulo;
      const product = (total - sum) * sum;
      result = Math.max(product, result)
      return sum
    }
    dfs(root)
    return result%modulo
  }