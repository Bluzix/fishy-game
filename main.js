let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let game = new Game();
let controller = new Controller(canvas);

document.getElementById('start_screen').addEventListener('click', ()=>{
    //start game
    init();
});

canvas.addEventListener('mousemove', (evt)=>{
    controller.move(evt.x, evt.y);
});

canvas.addEventListener('touchmove', function(e){
    let x,y;
    x = e.changedTouches[0].clientX - canvas.getBoundingClientRect().left;
    y = e.changedTouches[0].clientY - canvas.getBoundingClientRect().top;    
    controller.move(x, y);
});

canvas.addEventListener('touchstart', function(e){
    let x,y;
    x = e.changedTouches[0].clientX - canvas.getBoundingClientRect().left;
    y = e.changedTouches[0].clientY - canvas.getBoundingClientRect().top;
    controller.move(x, y);
});

canvas.addEventListener('click', ()=>{

});

function animate(){
    game.update(c, controller.mouse, canvas);
    game.draw(c);
    requestAnimationFrame(animate);
}

function init(){
    //hide start and show canvas
    document.getElementById('start_screen').style.display = "none";
    canvas.style.display = "block";
    animate();
}
