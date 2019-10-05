class Player{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.size = 10;
    }
    draw(ctx){
        ctx.beginPath();
        ctx.strokeStyle = 'white';
        ctx.arc(this.x, this.y, 50, 0, 2 * Math.PI);
        ctx.stroke(); 
        ctx.font = this.size + "px Georgia";
        ctx.fillText('🐋', this.x, this.y);
    }
    update(){
        
    }
}