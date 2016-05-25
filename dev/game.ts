/**
 * Main
 */
class Game {
    private context: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;
    private Sprite:Sprite;
    public i:number = 0;
    
    constructor(){
        this.canvas = document.getElementsByTagName("canvas")[0];
        this.context = this.canvas.getContext('2d');
        this.Sprite = new Sprite([11],256,256,5,'../images/sprites1.png',250,250,100,100);
        this.loop();
    }
    
    private loop(): void {
        this.i++;
        console.log(this.i);
        this.Sprite.move(1,1,2);
        // if(this.i == 300){}
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.Sprite.create();
        requestAnimationFrame(() => this.loop());
    }
}