var ball;
var i = 'black';
var z = 20;
var q =0;
var database;
var position, shapeColor , width
function setup(){
    database = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,z,z);
   ball.shapeColor = 'black'
   reset = createSprite(0,0,50,50)
   reset.shapeColor = 'orange'
   //var ballposition = database.ref('ball/position')
   //var ballcolor = database.ref('ball/shapeColor')
   //var ballwidth = database.ref('ball/width')

   //ballposition.on('value',readPosition, showerror)
   //ballcolor.on('value',readColor, showerror)
   //ballwidth.on('value',readWidth, showerror)
}

function draw(){
    q = z/2
    if(mousePressedOver(reset)){
        console.log('1')
        var hey = createSprite(50,50,1000,1000)

        hey.shapeColor = 'white'
        reset = createSprite(0,0,50,50)
   reset.shapeColor = 'orange'
        ball.x = 250
        ball.y = 250
    }
    if(keyDown("r")){
        ball.shapeColor = "red"
        i = 'red'
    }
    else if(keyDown("b")){
        ball.shapeColor = "blue"
        i = 'blue'
    }
    else if(keyDown("g")){
        ball.shapeColor = "green"
        i = 'green'
    }
    else if(keyDown("o")){
        ball.shapeColor = "orange"
        i = 'orange'
    }
    else if(keyDown("y")){
        ball.shapeColor = "yellow"
        i = 'yellow'
    }
    else if(keyDown("p")){
        ball.shapeColor = "pink"
        i = 'pink'
    }
    else if(keyDown("w")){
        ball.shapeColor = "black"
        i = 'white'
    }
    else if(keyDown("d")){
        ball.shapeColor = "grey"
        i = 'grey'
    }
    else if(keyDown("z")){
        ball.shapeColor = "black"
        i = 'black'
    }
    else if(keyDown("1")){
        z = 5
        ball.width = 5;
        ball.height =5;
    }
    else if(keyDown("2")){
        z = 10
        ball.width = 10;
        ball.height =10;
    }
    else if(keyDown("3")){
        z = 15
        ball.width = 15;
        ball.height =15;
    }
    else if(keyDown("4")){
        z = 20
        ball.width = 20;
        ball.height =20;
    }
    else if(keyDown("5")){
        z = 25
        ball.width = 25;
        ball.height =25;
    }
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-z,0);
        run(10,0)
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(z,0);
        run(-z,0)
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-z);
        run(0,z)
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,z);
        run(0,-z)
    }
    drawSprites();

}

function changePosition(x,y){
   //// database.ref('ball/position').set({
        //'x': position.x + x,
        //'y': position.y + y
        ball.x = ball.x + x
        ball.y = ball.y + y
//})
}
function changeColor(){
    database.ref('ball/shapeColor').set({
        'shapeColor': i
    })

}
function changeWidth(){
    database.ref('ball/Width').set({
        'width': z
    })

}
function run(f,b){
    var d = ball.x + f;
    var e = ball.y + b;
var a = createSprite(d,e,z,z);
    a.shapeColor = i
}
function mouseDragged(){
    
        ball.x =  mouseX,
        ball.y = mouseY

    var lan = createSprite(ball.x , ball.y, z ,z)
  
    lan.shapeColor = i

}
function showerror(){
    console.log('unable to read data')
}
function readPosition(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}
function readColor(data){
    color = data.val();
    i = color
}
function readWidth(data){
    width = data.val();
    z = width
}