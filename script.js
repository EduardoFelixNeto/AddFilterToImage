var image = null;
var imageGray = null;
var imageRed = null;
var imageBlue = null;
var imageRainbow = null;

function upload(){
  var fileinput = document.getElementById("finput");
  var filename = fileinput.value;
  image = new SimpleImage(fileinput);
  imageGray = new SimpleImage(fileinput);
  imageRed = new SimpleImage(fileinput);
  imageBlue = new SimpleImage(fileinput);
  imageRainbow = new SimpleImage(fileinput);
  var canvas = document.getElementById("can");
  image.drawTo(canvas);
}
function makeGray(){
  if(imageGray != null){
  for (var px of imageGray.values()){
    var gryscl = (px.getRed() + px.getGreen() + px.getBlue())/3
    px.setRed(gryscl);
    px.setGreen(gryscl);
    px.setBlue(gryscl);
    }
  }else{
    alert("There's no picture uploaded");
  }
  var imgcanvas = document.getElementById("can")
  imageGray.drawTo(imgcanvas);
}
function makeRed(){
  if(imageRed != null){
  for (var px of imageRed.values()){
    var redscl = (px.getRed() + px.getGreen() + px.getBlue())/3;
    if(redscl < 128){
    px.setRed(2*redscl);
    px.setGreen(0);
    px.setBlue(0);
    }else{
    px.setRed(255);
    px.setGreen(2*redscl-255);
    px.setBlue(2*redscl-255);
    }
  }
  }else{
    alert("There's no picture uploaded");
  }
  var imgcanvas = document.getElementById("can")
  imageRed.drawTo(imgcanvas);
}
function makeBlue(){
  if(imageBlue != null){
  for (var px of imageBlue.values()){
    var bluscl = (px.getRed() + px.getGreen() + px.getBlue())/3
    if(bluscl < 128){
    px.setRed(0);
    px.setGreen(0);
    px.setBlue(2*bluscl);
    }else{
    px.setRed(2*bluscl-255);
    px.setGreen(2*bluscl-255);
    px.setBlue(255);
    }
    }
  }else{
    alert("There's no picture uploaded");
  }
  var imgcanvas = document.getElementById("can")
  imageBlue.drawTo(imgcanvas);
}
function resetImage(){
  var canvas = document.getElementById("can");
  image.drawTo(canvas);
  }
