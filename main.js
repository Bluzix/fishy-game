let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//setup mobileViewport
let mobileView = document.getElementById("mobileViewport");
let mobCon = mobileView.getContext("2d");

mobileView.width = 100;
mobileView.height = 100;

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

    //update mobileViewport; Suggestion: cancel when fish gets X big
    updateMobView(x, y);
});

canvas.addEventListener('touchstart', function(e){
    let x,y;
    x = e.changedTouches[0].clientX - canvas.getBoundingClientRect().left;
    y = e.changedTouches[0].clientY - canvas.getBoundingClientRect().top;
    controller.move(x, y);

    //update mobileViewport; Suggestion: cancel when fish gets X big
    updateMobView(x, y);
});

//to hide the mobileViewport when not in use
canvas.addEventListener('touchend', function(e){
    mobileView.style.display = "none";
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

//updates the mobileViewport with new content based on given x and y coord
function updateMobView(x, y){
    mobCon.fillRect(0, 0, mobileView.width, mobileView.height);
    mobCon.drawImage(canvas, x - 50, y - 50, 100, 100, 0, 0, 100, 100);
    if (y - 150 >= 0){
        mobileView.style.top = y - 150 + "px";
    }
    else{
        mobileView.style.top = y + 50 + "px";
    }
    mobileView.style.left = x - 50 + "px";
    mobileView.style.display = "block";
}
