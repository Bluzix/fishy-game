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
        this.width = canvas.width;
        this.height = canvas.height;
        this.player = new Player(this.width/2,this.height/2);
    }

    draw(ctx){
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for(let i = 0; i<this.fishArray.length; i++){
        this.fishArray[i].draw(ctx);
      }
      this.player.draw(ctx);
    }
  
    update(ctx, mouse, canvas){
      this.player.x = mouse.x;
      this.player.y = mouse.y;

      if(this.fishArray.length < canvas.width/50){
        var chosenValue = Math.random() <= 0.5 ? true : false;
        if(chosenValue){//lets this for the right
          this.fishArray.push(new Fish(getRandomBetweenTwoValues(0, 100), getRandomBetweenTwoValues(0, this.height), getRandomBetweenTwoValues(10,100), getRandomBetweenTwoValues(1,2)));
        }else{
          this.fishArray.push(new Fish(getRandomBetweenTwoValues(this.width-110, this.width-10), getRandomBetweenTwoValues(0, this.height), getRandomBetweenTwoValues(10,100), getRandomBetweenTwoValues(-1,-2)));
        }
      }
      for(let i = 0; i < this.fishArray.length; i++){
        this.fishArray[i].update();
        if(this.fishArray[i].x < 0 || this.fishArray[i].x > this.width){
          this.fishArray.splice(i,1);
        }
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
  
  
  