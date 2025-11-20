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



// === Game class ===
function Game(player1, player2) {
    this.players = [player1, player2];
    this.currentPlayerIndex = 0;
    this.board = new Board();
    this.gameOver = false;
  
    // === Render the board in the HTML page ===
    this.renderBoard = function() {
      var boardDiv = document.getElementById("board");
      boardDiv.innerHTML = ""; // clear previous cells
  
      // Loop through the grid to create cells
      for (var row = 0; row < 3; row++) {
        for (var col = 0; col < 3; col++) {
          var cell = document.createElement("div"); // create a div for each cell
          cell.className = "cell"; // add CSS class
          cell.dataset.row = row;   // store row in data attribute
          cell.dataset.col = col;   // store col in data attribute
          cell.innerText = this.board.grid[row][col]; // show X, O, or empty
          boardDiv.appendChild(cell);
        }
      }
    };

 // === Switch to the next player ===
 this.switchPlayer = function() {
    this.currentPlayerIndex = 1 - this.currentPlayerIndex; // toggles 0 and 1
  };

  // === Make a move when a cell is clicked ===
  this.handleCellClick = function(event) {
    if (this.gameOver) return; // ignore clicks if game over

    var row = event.target.dataset.row;
    var col = event.target.dataset.col;

    // Place symbol if cell is empty
    var currentPlayer = this.players[this.currentPlayerIndex];
    var success = this.board.placeSymbol(row, col, currentPlayer.symbol);
    if (success) {
      this.renderBoard(); // update the display
      document.getElementById("message").innerText =
        "Next Turn: " + this.players[1 - this.currentPlayerIndex].name;
      this.switchPlayer();
    } else {
      alert("Cell already taken!");
    }
  };

