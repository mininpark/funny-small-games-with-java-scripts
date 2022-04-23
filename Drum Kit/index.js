var drum = document.querySelectorAll("div .drum");
drum.forEach(function(btn){ 
  //forEach => for(var i=0; i<document.querySelectorAll("div .drum").length; i++)
  // anonymous function
  btn.addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
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
    //this.style.color="white";
    //identify to 

  });
});
//if you find the query "button", then addEventListner to the button by clicking the button to call function which is handleClick

// Here I don't call the function as handleClick(), but passing a function by wating until the click event happened
/* 
btn.addEventListener("click", handleClick);
function handleClick() {
  alert("I got click");
}
*/

window.addEventListener("keydown", function(event){
  console.log(event);
});

//entire webpage starts listenling for the key down
