/**
 * Sprite
 */
class Sprite {
    
    private image: HTMLImageElement;
    private canvas;
    private ctx;
    //the time 
    private time: number = 0;
    //the currentStep
    private currentStep: number= 0;
    //the steps needed to load full motion
    private speed: number;
    //the row number
    private row:number = 0;
    //the height and width of the area of the sprite
    private spriteH: number;
    private spriteW: number;
    //the height and width of the sprite
    private w:number;
    private h:number;
    
    //for the position
    private x: number;
    private y: number;
    //the link to the image
    private src: string;
    //sprite Array
    private spriteArray:Array<number>;
    //for moving
    private newX:number;
    private newY:number;
    
    
    constructor(array:Array<number>, spriteW:number, spriteH:number,speed:number, src:string,x:number,y:number,w:number = spriteW , h:number = spriteH) {
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
    
    private loadImage():void{
        //create the image
        this.image = new Image();
        this.image.src = this.src;
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext('2d');
        this.render();
    }
    //move sprite
    //use 0 to stay on the same position
    public move(xas:number, yas:number,moveSpeed:number){
        this.newX = xas;
        this.newY = yas;
        if(xas == 0){
            this.newX = this.x;
        }
        if(yas == 0){
            this.newY = this.y;
        }
        if(this.x < this.newX)
        {
            this.x += moveSpeed;
        }
        
        if(this.x > this.newX)
        {
            this.x -= moveSpeed;
        }
        
        if(this.y < this.newY)
        {
            this.y += moveSpeed;
        }
        
        if(this.y > this.newY)
        {
            this.y -= moveSpeed;
        }
        
    }
    
    private render():void{
        this.ctx.drawImage(
            this.image, //image src
            this.spriteW * this.currentStep, //x-as on spritesheet of the sprite
            this.spriteH * this.row, // y-as on spritesheet of the sprite of image
            this.spriteW, // width of sprite
            this.spriteH, // height of sprite
            this.x, // position of image
            this.y, // position of image
            this.w, // size of image
            this.h  // size of image
        );
    }
    
    public create():void{
        //update the sprite
        this.render();
        if(this.time % this.speed == 1) {
            this.currentStep++;
            if(this.currentStep == this.spriteArray[this.row]){
                this.currentStep = 0;
                this.row++;
            }
            
            if(this.row == this.spriteArray.length){
                
                this.row = 0;
                this.currentStep = 0;
            }
            
        }
        this.time++;
    }
}