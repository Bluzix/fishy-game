/*
  This class holds all the game logic

  TODO:
  Im thinking about using a json file of levels maybe, like where enemies 
*/
class Game {
    constructor() {
        this.color  = "rgb(0,0,0)";
        this.colors = [0, 0, 0];
        this.shifts = [0, 0, 0];
        this.fishArray = [];
        this.fishArray.push(new Fish(10,10));
    }

    draw(ctx){
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for(let i = 0; i<this.fishArray.length; i++){
        this.fishArray[i].draw(ctx);
      }
    }
  
    update(ctx, mouse, canvas){
      for(let i = 0; i < this.fishArray.length; i++){
        this.fishArray[i].update();
      }
  
      for (let index = 0; index < 3; index ++) {
          let color = this.colors[index];
          let shift = this.shifts[index];        
          if (color + shift > 255 || color + shift <= 0) {
            shift = (shift < 0) ? Math.floor(Math.random() * 5) + 1 : Math.floor(Math.random() * -5) - 1;
          }
          color += shift;        
          this.colors[index] = color;
          this.shifts[index] = shift;
          // change position
      }      
      this.color = "rgb(" + this.colors[0] + "," + this.colors[1] + "," + this.colors[2] + ")";      
    }
  }
  
  
  