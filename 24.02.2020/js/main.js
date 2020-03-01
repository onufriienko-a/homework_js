
function Figure(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.draw = function(ctx) {
	}
}


function Rect(x, y, width, height, color) {
    Figure.call(this, x, y, color);
    this.width = width;
    this.height = height;

    this.draw = function(ctx) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
		  ctx.fillRect(this.x, this.y, this.width, this.height);

	}

}


function Circle(x, y, r, color) {
    Figure.call(this, x, y, color);
    this.r = r;

    this.draw = function(ctx) {
      ctx.strokeStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
      ctx.stroke();
	}
}

function Canvas() {
    let canvas = document.getElementById('canvasID');
    let ctx = canvas.getContext('2d');
    this.add = function() {
        for (let i = 0; i < arguments.length; i++) {
                arguments[i].draw(ctx);
        }
    }
}


function Line(x1, y1, x2, y2, color) {
    Figure.call(this, null, null, color);
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
    this.draw = function(ctx) {
      ctx.strokeStyle = this.color;
      ctx.beginPath();
      ctx.moveTo(this.x1, this.y1);
      ctx.lineTo(this.x2, this.y2);
      ctx.stroke();
    };
}

let circle1 = new Circle(20, 50, 10, 'black');
let rect1 = new Rect(10, 80, 20, 50, 'black');
let circle2 = new Circle(80, 70, 30, 'red');
let circle3 = new Circle(140, 70, 30, 'red');
let line1 = new Line(50, 85, 110, 130, 'red');
let line2 = new Line(170, 85, 110, 130, 'red');
let line3 = new Line(160, 130, 200, 130, 'black');
let line4 = new Line(200, 130, 200, 30, 'black');
let line5 = new Line(260, 30, 220, 30, 'black');
let line6 = new Line(220, 30, 220, 80, 'black');
let line7 = new Line(220, 80, 260, 80, 'black');
let line8 = new Line(260, 80, 260, 130, 'black');
let line9 = new Line(260, 130, 220, 130, 'black');

let drawArea = new Canvas('canvasID');
drawArea.add( circle1, rect1, circle2, circle3, line1, line2, line3, line4, line5, line6, line7, line8, line9);
