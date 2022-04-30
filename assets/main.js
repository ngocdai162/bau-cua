const imgBlock = document.querySelectorAll(".img");
const audio = document.querySelector("audio");
const bumAudio  = document.querySelector(".bum");
const imgSrc = [];
const h1_1 = document.querySelector("#h1-1")
const h1_2 = document.querySelector("#h1-2")
const startBtn = document.querySelector(".container-btn button")

h1_1.classList.add("noneBlock")
imgSrc[0] ="./assets/img/bau.png";
imgSrc[1] ="./assets/img/cua.png";
imgSrc[2] ="./assets/img/tom.jpg";
imgSrc[3] ="./assets/img/ca.png";
imgSrc[4] ="./assets/img/ga.png";
imgSrc[5] ="./assets/img/nai.png";
for(let i = 0; i <imgBlock.length ; i++){
    imgBlock[i].src = "./assets/img/tien.png"
}
var randomNumber= [];
const randomImg = () =>{
    randomNumber[0] = Math.ceil((Math.random()*6)) - 1;
    randomNumber[1] = Math.ceil((Math.random()*6)) - 1;
    randomNumber[2] = Math.ceil((Math.random()*6)) - 1;
    for(let i = 0; i <imgBlock.length ; i++) {
        imgBlock[i].src = imgSrc[randomNumber[i]];
    }
}


const bang = document.querySelector(".pyro");
bang.classList.add("noneBlock")
const bum = ()=>{
    bang.classList.remove("noneBlock");
    bumAudio.play();
    setTimeout(()=> {
        bang.classList.add("noneBlock");
        bumAudio.pause();
    },2000)
}

const handleRandom = () =>{
    const reRandom = setInterval(()=> {
        randomImg();
      },80)
      
      setTimeout(()=> {
          clearInterval(reRandom)
          bum();
      },2000)
}
startBtn.onclick = () => {
   h1_1.classList.remove("noneBlock")
   h1_2.classList.add("noneBlock")
   audio.play();
   handleRandom();
}