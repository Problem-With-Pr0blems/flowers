
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

let block1 = document.querySelector(".part_1")

block1.style.display = "none"



let block2 = document.querySelector(".part2")
const music = document.getElementById('music');

block2.onclick =()=>{
  block1.style.display = "block"
  block2.style.display = "none"
  if (music.paused) {
    console.log("rabotayet");
    music.play();
    
} else {
    
    music.pause();
}
}