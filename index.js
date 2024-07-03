// Problem No 1
const count = document.querySelector(".number")
const btn1 = document.querySelector("#btn1")
let add = 0;


const addCount = () => {
    console.log("i am clicked")
    add++
    count.innerHTML = add
}
btn1.addEventListener("click", addCount)

// Problem No 2
const btn2 = document.querySelector("#btn2")
const para = document.querySelector(".para")

btn2.addEventListener("click", () => {
    para.classList.toggle("d-none")
    if (para.classList.contains("d-none")) {
        para.innerHTML = "Now you can't see me!"
        btn2.innerHTML= "Show me"
    } else {
        para.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quos harum ut sint tempora debitis ex et laborum, deserunt inventore id odio esse."
        btn2.innerHTML= "Hidden me"
    }
})


// Problem No 3
const inp = document.querySelector("#myInput")
const para2 = document.querySelector(".para2")

inp.addEventListener("input", () => {
    para2.innerHTML = inp.value;
})

// Problem No 4
const btn3 = document.querySelector("#btn3")
const inp2 = document.querySelector("#myInput2")
const listGroup = document.querySelector("ul")

btn3.addEventListener("click", () => {
    let createLi = document.createElement("li")
    createLi.setAttribute("class", "list")
    createLi.innerHTML = inp2.value
    listGroup.appendChild(createLi)
})


// Problem No 5
const btn4 = document.querySelector("#btn4")
const box = document.querySelector(".box")

let x,y,z;

btn4.addEventListener("click", ()=>{
    x = Math.floor(Math.random()* 256)
    y = Math.floor(Math.random()* 256)
    z = Math.floor(Math.random()* 256)
    let bgColor = `rgb(${x},${y},${z})`
    let boxStyle = box.style.background = bgColor
})