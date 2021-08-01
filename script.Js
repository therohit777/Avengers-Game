score=0;
cross=true;
audiogo = new Audio('gameover.mp3');
audio = new Audio('music.mp3');
setTimeout(()=>{
    audio.play()
},1000)

document.onkeydown = function(e){
    console.log("keycode:",e.keyCode);
    if(e.keyCode == 38){
        capo = document.querySelector(".america");
        capo.classList.add('cape');
        setTimeout( () => {
            capo.classList.remove('cape');
        },700);
    }
    if(e.keyCode == 39){
        capo = document.querySelector(".america");
       capx = parseInt(window.getComputedStyle(captain,null).getPropertyValue('left'));
       capo.style.left = capx + 160 + "px";        
    }
    if(e.keyCode == 37 ){
        capo = document.querySelector(".america");
       capx = parseInt(window.getComputedStyle(captain,null).getPropertyValue('left'));
       capo.style.left = (capx -  110) + "px";        
    }




}

setInterval( () => {
    captain = document.querySelector(".america");
    gameover = document.querySelector('.gameover');
    thanos = document.querySelector('.thanos');


    dx = parseInt(window.getComputedStyle(captain,null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(captain,null).getPropertyValue('bottom'));

    ox = parseInt(window.getComputedStyle(thanos,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(thanos,null).getPropertyValue('bottom'));


    a = Math.abs(dx-ox);
    b = Math.abs(dy-oy); 
    console.log(a,b); 

    if(a<180 && b<52){
        gameover.innerHTML="Game Over - Reload the Window to play again";
        gameover.style.visibility="visible";
        thanos.classList.remove("thanus");
        audiogo.play()
        setTimeout(()=>{
           audiogo.pause()
           audio.pause()
        },1000)
          

 
    }
    else if(a<220 && cross) {
        score+=1;
        updatescore(score);
        cross=false;
        setTimeout(() => {
            cross = true;
        }, 1000);

        setTimeout(()=>{
            anid = parseFloat(window.getComputedStyle(thanos,null).getPropertyValue('animation-duration'));
            newd = anid - 0.1;
            thanos.style.animationDuration = newd
 +'s';

        },500)
    }



},10)

function updatescore(score){
    scor.innerHTML = score;
}
 