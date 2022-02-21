const btnPlayer = document.querySelector(".changeBtn"),
      btnStart = document.querySelector('.play'),
      btnPause = document.querySelector('.stop'),
      navItems = document.querySelector(".nav-items"),
      navListItem = document.querySelector(".list-item"),
      navListItemAll = document.querySelectorAll(".list-item"),
      birdImages = document.querySelectorAll('.bg');
    
  
const audio = new Audio();

     
     btnPause.classList.add("hidden");   
      btnPlayer.addEventListener('click', changeButton);
      btnStart.addEventListener('click', playAudio);
      btnPause.addEventListener('click', pauseAudio);


function changeButton(){
  btnStart.classList.toggle("hidden");
  btnPause.classList.toggle("hidden"); 
}

function playAudio() { 
  audio.src = `./assets/audio/forest.mp3`; 
  audio.currentTime = 0;
  audio.play();
 

}


function pauseAudio(){
  audio.pause();
}

function changeImage(event) {
 if(event.target.classList.contains('list-item')) {
  birdImages.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.set}/${index}.jpg`);
  audio.src = `./assets/audio/${event.target.dataset.audio}.mp3`
  audio.play();
  navListItemAll.forEach((element) => {    
    element.classList.remove('active');  
   
  });
    navItems.addEventListener('click', (event) => {  
    event.target.classList.add('active'); 
    btnPause.classList.remove("hidden");
    btnStart.classList.add("hidden");
    });
}   
  };

navItems.addEventListener('click', changeImage);
/*
navListItemAll.addEventListener("click", ()=>{
  let isPlaying = navItems.classList.contains('active');
  navListItemAll.forEach(()=>{
    if(isPlaying){
      btnPause.classList.add("hidden");
      }else{
    //  btnStart.classList.add("hidden");
  //  btnPause.classList.remove("hidden");
     }
    
  });
});*/

  
    