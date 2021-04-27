canvas=new fabric.Canvas("myCanvas");
var blockheight=30;
var blockwidth=30;
var playerx=10;
var playery=10;
var playerobject="";
function playerupdate() {
fabric.Image.fromURL("HULK.jpg",function(Img){
playerobject=Img;
playerobject.scaleToWidth(150);
playerobject.scaleToHeight(150);
playerobject.set({
    top:playery,
left:playerx
});
canvas.add(playerobject);

});
}
function newimage(getimage) {
  fabric.Image.fromURL(getimage,function(Img) {
  blockobject=Img;
  blockobject.scaleToHeight(blockheight);
  blockobject.scaleToWidth(blockwidth);
  blockobject.set({
      top:playery,
      left:playerx
  });
  canvas.add(blockobject);
  });  
}