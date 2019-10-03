class Fish{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.size = 10;
    }
    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.rect(this.x,this.y,this.size,this.size);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(60+this.x, 50);
        ctx.lineTo(100+this.x, 75);
        ctx.lineTo(100+this.x, 25);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(140+this.x, 50);
        ctx.lineTo(100+this.x, 75);
        ctx.lineTo(100+this.x, 25);
        ctx.moveTo(this.x, 50);
        ctx.lineTo(this.x, 75);
        ctx.lineTo(this.x, 25);
        ctx.fill();

        ctx.beginPath();
        
        ctx.fill();
    }
    update(){
        this.x++;
    }
}