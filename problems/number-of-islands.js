 function dfs(grid, row, column){
        var totalRows = grid.length;
        var totalColumns = grid[0].length;
        
        if(row < 0 || column < 0 || row > totalRows || column > totalColumns || grid[row][column] === '0') {
            return;
        }
        
        grid[row][column] = '0';
        
        dfs(grid, row-1, column);
        dfs(grid, row+1, column);
        dfs(grid, row, column-1)
        dfs(grid, row, column+1);
    }

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(grid === null || grid.length===0){
        return 0
    }
    
    const totalRows = grid.length;
    const totalColumns = grid[0].length;
    let count= 0;
    
    for(let row=0; row < totalRows; ++row){
        for(let col=0; col< totalColumns; ++col){
            if(grid[row][col] === 1){
                count++
                dfs(grid,row, col );
                
            }
        }
    }
    
    return count;
    
};

### Cleaner

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;

  // Iterate through matrix
  for (let i = 0; i < grid.length; i++){
    for (let j = 0; j < grid[0].length; j++){
      // Start island traversal when start of island is seen
      if (grid[i][j] === "1"){
        visitIsland(i, j, grid);
        // After entire island has been visited, increment count
        count++;
      }
    }
  }
  return count;
};


function visitIsland (i, j, grid) {
  // Mark island as visited
  grid[i][j] = "0";

  // Check bordering positions, if island, recurse to it
  if (grid[i - 1] && grid[i - 1][j] === "1") visitIsland(i - 1, j, grid)
  if (grid[i + 1] && grid[i + 1][j] === "1") visitIsland(i + 1, j, grid)
  if (grid[i][j + 1] === "1") visitIsland(i, j + 1, grid);
  if (grid[i][j - 1] === "1") visitIsland(i, j - 1, grid);
}