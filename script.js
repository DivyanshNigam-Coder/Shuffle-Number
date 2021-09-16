var colorArr = ['#6f98a8','#2b8ead','#2f454e','#2b8ead','#2f454e','#bfbfbf','#bfbfbf','#6f98a8','#2f454e'];

var newArr = [[1,colorArr[0]], [2,colorArr[1]], [3,colorArr[2]], [4,colorArr[3]], [5,colorArr[4]], [6,colorArr[5]], [7,colorArr[6]], [8,colorArr[7]], [9,colorArr[8]]];

function createCard(newArr){
  document.getElementById("first-color").style.backgroundColor = newArr[0][1];
  document.getElementById("second-color").style.backgroundColor = newArr[1][1];
  document.getElementById("third-color").style.backgroundColor = newArr[2][1];
  document.getElementById("fourth-color").style.backgroundColor = newArr[3][1];
  document.getElementById("fivth-color").style.backgroundColor = newArr[4][1];
  document.getElementById("sixth-color").style.backgroundColor = newArr[5][1];
  document.getElementById("seventh-color").style.backgroundColor = newArr[6][1];
  document.getElementById("eighth-color").style.backgroundColor = newArr[7][1];
  document.getElementById("ninth-color").style.backgroundColor = newArr[8][1];

  var doTimeout = function(obj,text,timeout,i){
    setTimeout(function() {
      obj.style.opacity = 0; 
      setTimeout(function() {
        obj.innerHTML = text;
        obj.style.opacity = 1; 
      }, timeout);
    })
  }

  var numberArr = ["one","two","three","four","five","six","seven","eight","nine"];
  for(var i=0; i<=8;i++){
      var obj = document.getElementById(numberArr[i]);
      obj.style.transition = "0.5s";
      obj.style.opacity = 0;
      var text = newArr[i][0];
      var timeout = 500;
      doTimeout(obj,text,timeout,i);
  }
}
function shuffle(){
  newArr = newArr.sort(function(){ return Math.random() - 0.5});
  createCard(newArr);
}
function sort(){
  newArr.sort();
  createCard(newArr);
}
createCard(newArr);
