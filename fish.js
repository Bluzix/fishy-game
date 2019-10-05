class Fish{
    constructor(x,y,size,dx){
        this.x = x;
        this.y = y;
        this.size = size;
        this.dx = dx;
    }
    draw(ctx){
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.arc(this.x, this.y-this.size/3, this.size/2.2, 0, 2 * Math.PI);
        ctx.stroke(); 
        ctx.font = this.size + "px Georgia";
        // Show the different textAlign values
        ctx.textAlign = "center"; 
        ctx.fillText('🐟', this.x, this.y);
    }
    update(){
        this.x += this.dx;
    }
}