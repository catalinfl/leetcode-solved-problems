function minFallingPathSum(matrix: number[][]): number {
    var n = matrix[0].length;
    for (let i=1; i<matrix.length; i++) {
      matrix[i][0] += Math.min(matrix[i-1][0], matrix[i-1][1]);
      matrix[i][n-1] += Math.min(matrix[i-1][n-1], matrix[i-1][n-2]);
      for (let j=n-2; j>0; j--) {
        matrix[i][j] += Math.min(matrix[i-1][j], matrix[i-1][j-1], matrix[i-1][j+1])
      }
    }
    return Math.min(...matrix[matrix.length-1])
  }