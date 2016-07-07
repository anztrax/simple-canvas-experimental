$(function(){
  (function initCanvas(){
    var myCanvas = $('#myCanvas');
    const isElemGetContext = myCanvas[0].getContext;

    if(isElemGetContext){
      //note : you can manipulate width & height of canvas in 2 way : using canvasAPI or (directly set height & width at HTML elem)
      doCanvas();
    }else{
      doCanvasNotSupported();
    }
  })();

  function doCanvas(){
    console.log('this browser support canvas');
    createPalauFlag(createCanvas(400,200));
    createGreeceFlag(createCanvas(400,200));
    createGuyanaFlag(createCanvas(400,200));
    createBahrainFlag(createCanvas(400,200));
  }

  function doCanvasNotSupported(){
    alert('your element is not supported canvas rendering');
  }
});

function createBahrainFlag(canvasElem){
  var canvas = canvasElem;
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;
  var triangleHeight =  height / 5;
  var triangleWidth = width / 8;

  context.fillStyle = '#CE1126';
  context.fillRect(0,0,width,height);

  context.fillStyle = 'white';
  context.beginPath();
  context.lineTo(width/4,0);

  for(var i=0;i<5;i++){
    //create triangles
    context.lineTo(width/4 + triangleWidth, (i + 0.5)*triangleHeight);
    context.lineTo(width/4, (i + 1)*triangleHeight);
  }

  context.lineTo(width/4,height);
  context.lineTo(0,height);
  context.lineTo(0,0);
  context.closePath();
  context.fill();
}

function createGuyanaFlag(canvasElem){
  var canvas = canvasElem;
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;
  var gap = (width /10) / 2.5;

  context.fillStyle = '#009E49';
  context.fillRect(0,0,width,height);
  fillTriangle(context,0,0, width,height/2, 0,height,'white','white');
  fillTriangle(context,0,gap, width - gap*2.5,height/2, 0,height-gap,'#FCD116','#FCD116');
  fillTriangle(context,0,0, width/2,height/2, 0,height,'black','black');
  fillTriangle(context,0,gap, width /2 - (gap*1.5),height/2, 0,height-gap,'#CE1126','#CE1126');
}

function fillTriangle(context, x1, y1, x2, y2, x3, y3, fillColor, strokeColor){
  context.fillStyle = fillColor;
  context.strokeStyle = strokeColor;
  context.beginPath();
  context.moveTo(x1,y1);
  context.lineTo(x2,y2);
  context.lineTo(x3,y3);
  context.lineTo(x1, y1);
  context.closePath();
  context.stroke();
  context.fill();
}


function createGreeceFlag(canvasElem){
  var canvas = canvasElem;
  var context = canvas.getContext('2d');    //we want to manipulate in 2d
  var width = canvas.width;
  var height = canvas.height;
  var lineCount = 9;
  var lineHeight = height / lineCount;
  var offset = lineHeight / 2;

  context.fillStyle = '#000080';
  context.fillRect(0,0,width,height);

  context.strokeStyle = '#ffffff';
  context.lineWidth = lineHeight;

  for(var i=0;i < lineCount;i++){
    if(i % 2 == 1) {
      context.moveTo(0, i * lineHeight + offset);
      context.lineTo(width, i * lineHeight + offset);
    }
  }
  //this stroke is not done, but if you group it it will be done by then
  context.stroke();

  //this is clear and start new drawing context
  context.beginPath();
  var rw = lineHeight * 5;
  context.fillRect(0,0,rw,rw);

  //stroke style in is white
  context.moveTo(0,rw/2);
  context.lineTo(rw,rw/2);

  context.moveTo(rw/2,0);
  context.lineTo(rw/2,rw);
  context.stroke();
}

//mark : create canvas section
function createPalauFlag(canvasElem){
  var canvas = canvasElem;
  var context = canvas.getContext('2d');    //we want to manipulate in 2d
  var width = canvas.width;
  var height = canvas.height;

  context.fillStyle = '#4AADD6';
  context.fillRect(0,0,width,height);

  context.fillStyle = '#FFDE00';
  //width , height, radius, start angle, end angle (Math.PI = half circle), counter clockwise
  context.arc(width/2.4, height/2,height/3,0,2*Math.PI,false);    //imaginary arc
  context.fill();
}

function createCanvas(width,height){
  var mainContainerElem = $('#mainContainer');
  var canvasElem = $("<canvas />",{
    class : 'humble-canvas'
  });
  canvasElem[0].width = width;
  canvasElem[0].height = height;

  mainContainerElem.append(canvasElem);

  return canvasElem[0];
}