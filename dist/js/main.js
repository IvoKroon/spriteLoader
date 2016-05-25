var Game = (function () {
    function Game() {
        this.i = 0;
        this.canvas = document.getElementsByTagName("canvas")[0];
        this.context = this.canvas.getContext('2d');
        this.Sprite = new Sprite([11], 256, 256, 5, '../images/sprites1.png', 250, 250, 100, 100);
        this.loop();
    }
    Game.prototype.loop = function () {
        var _this = this;
        this.i++;
        console.log(this.i);
        this.Sprite.move(1, 1, 2);
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.Sprite.create();
        requestAnimationFrame(function () { return _this.loop(); });
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Sprite = (function () {
    function Sprite(array, spriteW, spriteH, speed, src, x, y, w, h) {
        if (w === void 0) { w = spriteW; }
        if (h === void 0) { h = spriteH; }
        this.time = 0;
        this.currentStep = 0;
        this.row = 0;
        this.spriteW = spriteW;
        this.spriteH = spriteH;
        this.w = w;
        this.h = h;
        this.speed = speed;
        this.src = src;
        this.spriteArray = array;
        this.x = x;
        this.y = y;
        this.loadImage();
    }
    Sprite.prototype.loadImage = function () {
        this.image = new Image();
        this.image.src = this.src;
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext('2d');
        this.render();
    };
    Sprite.prototype.move = function (xas, yas, moveSpeed) {
        this.newX = xas;
        this.newY = yas;
        if (xas == 0) {
            this.newX = this.x;
        }
        if (yas == 0) {
            this.newY = this.y;
        }
        if (this.x < this.newX) {
            this.x += moveSpeed;
        }
        if (this.x > this.newX) {
            this.x -= moveSpeed;
        }
        if (this.y < this.newY) {
            this.y += moveSpeed;
        }
        if (this.y > this.newY) {
            this.y -= moveSpeed;
        }
    };
    Sprite.prototype.render = function () {
        this.ctx.drawImage(this.image, this.spriteW * this.currentStep, this.spriteH * this.row, this.spriteW, this.spriteH, this.x, this.y, this.w, this.h);
    };
    Sprite.prototype.create = function () {
        this.render();
        if (this.time % this.speed == 1) {
            this.currentStep++;
            if (this.currentStep == this.spriteArray[this.row]) {
                this.currentStep = 0;
                this.row++;
            }
            if (this.row == this.spriteArray.length) {
                this.row = 0;
                this.currentStep = 0;
            }
        }
        this.time++;
    };
    return Sprite;
}());
//# sourceMappingURL=main.js.map