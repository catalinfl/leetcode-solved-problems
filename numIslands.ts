function numIslands(grid: string[][]): number {
    const row = grid.length;
    const column = grid[0].length;
    var islands:  number = 0;
    if (row === 0) return 0;
    for (let i=0; i<row; i++) {
      for (let j=0; j<column; j++) {
        if (grid[i][j]==="1") {
          islands++;
          dfs(row, column, grid, i, j);
        }
      }
    }
    return islands;
  };
  
  var dfs = (row: number, column: number, grid: string[][], rowIndex: number, colIndex: number) => {
      grid[rowIndex][colIndex] = "0"
      if (rowIndex+1 < row && grid[rowIndex+1][colIndex] === "1") {
        dfs(row, column, grid, rowIndex+1, colIndex);
      }
      if (rowIndex-1 > -1 && grid[rowIndex-1][colIndex] === "1") {
        dfs(row, column, grid, rowIndex-1, colIndex);
      }
      if (colIndex-1 > -1 && grid[rowIndex][colIndex-1] === "1") {
        dfs(row, column, grid, rowIndex, colIndex-1);
      }
      if (colIndex+1 < column && grid[rowIndex][colIndex+1] === "1") {
        dfs(row, column, grid, rowIndex, colIndex+1)
      }
      }