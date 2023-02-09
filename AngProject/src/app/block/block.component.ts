import { Component } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
})
export class BlockComponent {
  board: any[];
  isNext: boolean;
  winner: any;
  ngOnInit() {
    this.newGame();
  }
  newGame() {
    this.board = Array(9).fill(null);
    this.isNext = true;
    this.winner = null;
  }
  get player() {
    return this.isNext ? 'X' : 'O';
  }
  makeMove(index: number) {
    if (!this.board[index]) {
      this.board.splice(index, 1, this.player);
      this.isNext = !this.isNext;
    }
    this.calcWinner();
  }
  calcWinner() {
    const arr = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let index = 0; index < arr.length; index++) {
      const [a, b, c] = arr[index];
      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        return this.board[a];
      }
    }
    return null;
  }
}
