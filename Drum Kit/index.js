
//Detecting Button Press
var drum = document.querySelectorAll("div .drum");
drum.forEach(function(btn){ 
  //forEach => for(var i=0; i<document.querySelectorAll("div .drum").length; i++)
  // anonymous function
  btn.addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
});


// Detecting Keyboard Press
document.addEventListener("keypress", function(event) {

  makeSound(event.key);
  buttonAnimation(event.key);

});

function makeSound(key){
  switch (key) {
    case "w":
        var audioElementW = new Audio("sounds/crash.mp3");
        audioElementW.play(); 
      break;

    case "a":
        var audioElementA = new Audio("sounds/kick-bass.mp3");
        audioElementA.play(); 
      break;
    case "s":
        var audioElementS = new Audio("sounds/snare.mp3");
        audioElementS.play(); 
      break;

    case "d":
        var audioElementD = new Audio("sounds/tom-2.mp3");
        audioElementD.play(); 
      break;

    case "j":
        var audioElementJ = new Audio("sounds/tom-3.mp3");
        audioElementJ.play(); 
      break;
    
    case "k":
        var audioElementK = new Audio("sounds/tom-4.mp3");
        audioElementK.play(); 
      break;

    case "l":
        var audioElementL = new Audio("sounds/tom-1.mp3");
        audioElementL.play();              
      break;

    default: console.log(buttonInnerHTML);
  }
};

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
    //this.style.color="white";
    //identify to 
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
 
};