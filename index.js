var numberOfButtons = document.querySelectorAll(".drum").length;
var i=0;


while(i<numberOfButtons){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       var buttonInnderHtml= this.innerHTML;
       buttonAnimation(buttonInnderHtml);
       switch(buttonInnderHtml){
        case "w":
            var mySound = new Audio("sounds/crash.mp3"); 
            mySound.play(); 
        break;

        case "a":
            var mySound = new Audio("sounds/kick-bass.mp3"); 
            mySound.play(); 
        break;
        case "s":
            var mySound = new Audio("sounds/snare.mp3"); 
            mySound.play(); 
        break;
        case "d":
            var mySound = new Audio("sounds/tom-1.mp3"); 
            mySound.play(); 
        break;
        case "j":
            var mySound = new Audio("sounds/tom-2.mp3"); 
            mySound.play(); 
        break;
        case "k":
            var mySound = new Audio("sounds/tom-3.mp3"); 
            mySound.play(); 
        break;
        case "l":
            var mySound = new Audio("sounds/tom-4.mp3"); 
            mySound.play(); 
        break;
        default:
            alert("nothing");

       }
        
    });
    i++;
   
}
document.addEventListener("keypress",function(event){
    var keyPressed=event.key;
    buttonAnimation(keyPressed);
    if(keyPressed=="w"){
        var mySound = new Audio("sounds/crash.mp3"); 
        mySound.play(); 
    }
    else if(keyPressed=="a"){
        var mySound = new Audio("sounds/kick-bass.mp3"); 
        mySound.play(); 
    }
    else if(keyPressed=="s"){
        var mySound = new Audio("sounds/snare.mp3"); 
        mySound.play(); 
    }
    else if(keyPressed=="d"){
        var mySound = new Audio("sounds/tom-1.mp3"); 
        mySound.play(); 
    }
    else if(keyPressed=="j"){
        var mySound = new Audio("sounds/tom-2.mp3"); 
        mySound.play(); 
    }
    else if(keyPressed=="k"){
        var mySound = new Audio("sounds/tom-3.mp3"); 
        mySound.play(); 
    }
    else if(keyPressed=="l"){
        var mySound = new Audio("sounds/tom-4.mp3"); 
        mySound.play(); 
    }
    else{

    }
   

});
function buttonAnimation(k){
    var activeButton=document.querySelector("."+k);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
