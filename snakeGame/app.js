let canvas = document.getElementById("canvas");
let pen = canvas.getContext("2d");
// console.log("go");

let X = 20,
  Y = 10;
let cell_size = 40;
pen.fillStyle = "black";

let snake = {
  cells: [],
  length: 5,
  direction: "down",
  randomCoOrdinates: null,
  init: function () {
    document.addEventListener("keypress", (e) => {
      if (e.key == "d") {
        // console.log("D is pressed");
        this.direction = "right";
      }
      if (e.key == "a") {
        this.direction = "left";
      }
      if (e.key == "s") {
        this.direction = "down";
      }
      if (e.key == "w") {
        this.direction = "up";
      }
      let len = this.cells.length;
      let me = this.cells[len - 1];
    });
    // console.log("hi");
    pen.fillStyle = "black";
    pen.fillRect(0, 0, cell_size * X, cell_size * Y);

    for (let i = 0; i < this.length; i++) {
      let newObj = {
        x: i,
        y: 0,
      };
      this.cells.push(newObj);
    }
    // this.drawSnake();
  },
  drawSnake: function () {
    // console.log("drawing");
    let oldCol = pen.fillStyle;
    pen.fillStyle = "yellow";
    // console.log(oldCol);
    // console.log(this.cells);
    for (let i = 0; i < this.cells.length; i++) {
      // console.log(this.cells[i].x,this.cells[i].y);
      pen.fillRect(
        this.cells[i].x * cell_size,
        this.cells[i].y * cell_size,
        cell_size - 1,
        cell_size - 1
      );
    }
    pen.fillStyle = oldCol;
  },
  moveSnake: function () {
    // if(this.randomCoOrdinates!=null)
    // this.drawRandomFood(this.randomCoOrdinates);
    let nextX, nextY;

    if (this.direction === "right") {
      let len = this.cells.length;
      let me = this.cells[len - 1];
      nextX = me.x + 1;
      nextY = me.y;

      let newObj = {
        x: nextX,
        y: nextY,
      };
      this.cells.push(newObj);
    }
    if (this.direction === "left") {
      let len = this.cells.length;
      let me = this.cells[len - 1];
      nextX = me.x - 1;
      nextY = me.y;

      let newObj = {
        x: nextX,
        y: nextY,
      };
      this.cells.push(newObj);
    }
    if (this.direction === "down") {
      let len = this.cells.length;
      let me = this.cells[len - 1];
      nextX = me.x;
      nextY = me.y + 1;
      let newObj = {
        x: nextX,
        y: nextY,
      };
      this.cells.push(newObj);
    }
    if (this.direction === "up") {
      let len = this.cells.length;
      let me = this.cells[len - 1];
      nextX = me.x;
      nextY = me.y - 1;

      let newObj = {
        x: nextX,
        y: nextY,
      };
      this.cells.push(newObj);
    }

    // console.log("calling draw");
    let len = this.cells.length;
    let me = this.cells[len - 1];
    if (
      (me.x + 1) * cell_size > X * cell_size ||
      (me.y + 1) * cell_size > Y * cell_size
    ) {
      clearInterval(id);
      alert("game over, reload to play again");
      return;
    }
    if (me.x < 0 || me.y < 0) {
      clearInterval(id);
      alert("game over, reload to play again");
      return;
    }

    // console.log(snake);
    if (this.randomCoOrdinates != null) {
      let len = this.cells.length;
      let me = this.cells[len - 1];
      if (
        me.x === this.randomCoOrdinates.x &&
        me.y == this.randomCoOrdinates.y
      ) {
        // this.randomCoOrdinates=
        this.length++;
        this.getFood();
        // console.log(this.randomCoOrdinates);
      } else {
        this.cells.shift();
      }
    }
    pen.fillRect(0, 0, cell_size * X, cell_size * Y);
    this.drawRandomFood(this.randomCoOrdinates);
    this.drawSnake(this.randomCoOrdinates);
  },
  drawRandomFood: function (obj) {
    let oldCol = pen.fillStyle;
    pen.fillStyle = "red";
    pen.fillRect(
      obj.x * cell_size,
      obj.y * cell_size,
      cell_size - 1,
      cell_size - 1
    );
    pen.fillStyle = oldCol;
  },
  getFood: function () {
    let x_rand = Math.floor(Math.random() * 1000) % X;
    let y_rand = Math.floor(Math.random() * 1000) % Y;
    for (let obj of this.cells) {
      if (obj.x == x_rand * cell_size && obj.y == y_rand * cell_size) {
        return this.getFood();
        break;
      }
    }
    let newObj = {
      x: x_rand,
      y: y_rand,
    };
    // this.drawRandomFood(newObj);
    this.randomCoOrdinates = newObj;
    // return newObj;
  },
};

snake.init();

let id = setInterval(() => {
  snake.moveSnake();
  //   console.log("hi");
}, 200);

snake.getFood();
// console.log(snake.randomCoOrdinates);
