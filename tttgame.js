// === Player class ===
function Player(name, symbol) {
    this.name = name;
    this.symbol = symbol;
  }
  
  // === Board class ===
  function Board() {
    // 3x3 grid represented by a 2D array
    this.grid = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];

  // Place symbol in row,col if empty
  this.placeSymbol = function(row, col, symbol) {
    if (this.grid[row][col] === "") {
      this.grid[row][col] = symbol;
      return true;
    } else {
      return false;
    }
  };
}