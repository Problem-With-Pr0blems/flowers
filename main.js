
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
const btn = document.querySelector(".send")
const inp1 = document.querySelector(".inp1")
const inp2 = document.querySelector(".inp2")
const inp3 = document.querySelector(".inp3")


btn.onclick =()=>{
    if(inp1.value == 15 && inp2.value == 1 && inp3.value==24 ){
        block1.style.display = "block"
        block2.style.display = "none"
        if (music.paused) {
            console.log("rabotayet");
            music.play();

        } else {

            music.pause();
        }}
}