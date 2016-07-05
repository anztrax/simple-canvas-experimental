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
  }

  function doCanvasNotSupported(){
    alert('your element is not supported canvas rendering');
  }
});

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