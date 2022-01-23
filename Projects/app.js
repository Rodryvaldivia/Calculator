// let fondo = document.querySelector(".wallpaper");
// let input = document.querySelector(".input");
// let button = document.querySelector(".button")

// button.addEventListener("click",()=>{
//     fondo.style.backgroundColor = `${input.value}`;
// });



let num1 = document.querySelector(".uno");
let num2 = document.querySelector(".dos");
let num3 = document.querySelector(".tres");
let num4 = document.querySelector(".cuatro");
let num5 = document.querySelector(".cinco");
let num6 = document.querySelector(".seis");
let num7 = document.querySelector(".siete");
let num8 = document.querySelector(".ocho");
let num9 = document.querySelector(".nueve");
let numCero = document.querySelector(".cero");

let suma = document.querySelector(".suma");
let resta = document.querySelector(".resta");
let multi = document.querySelector(".multi");
let division = document.querySelector(".division");

let borrarCero = document.querySelector(".CE");
let deleteLast = document.querySelector(".delete")


let valorUpdated = [];
let operacionUpdated = [];


num1.addEventListener("click",()=>{
    valorUpdated.push(1);
    document.querySelector(".screen").innerHTML = `${valorUpdated.join("")}`;
});

num2.addEventListener("click",()=>{
    valorUpdated.push(2);
    document.querySelector(".screen").innerHTML = `${valorUpdated.join("")}`;
});

num3.addEventListener("click",()=>{
    valorUpdated.push(3);
    document.querySelector(".screen").innerHTML = `${valorUpdated.join("")}`;
});

num4.addEventListener("click",()=>{
    valorUpdated.push(4);
    document.querySelector(".screen").innerHTML = `${valorUpdated.join("")}`;
});

num5.addEventListener("click",()=>{
    valorUpdated.push(5);
    document.querySelector(".screen").innerHTML = `${valorUpdated.join("")}`;
});

num6.addEventListener("click",()=>{
    valorUpdated.push(6);
    document.querySelector(".screen").innerHTML = `${valorUpdated.join("")}`;
});
num7.addEventListener("click",()=>{
    valorUpdated.push(7);
    document.querySelector(".screen").innerHTML = `${valorUpdated.join("")}`;
});

num8.addEventListener("click",()=>{
    valorUpdated.push(8);
    document.querySelector(".screen").innerHTML = `${valorUpdated.join("")}`;
});

num9.addEventListener("click",()=>{
    valorUpdated.push(9);
    document.querySelector(".screen").innerHTML = `${valorUpdated.join("")}`;
});

numCero.addEventListener("click",()=>{
    valorUpdated.push(0);
    document.querySelector(".screen").innerHTML = `${valorUpdated.join("")}`;
});



borrarCero.addEventListener("click",()=>{
    valorUpdated = [];
    document.querySelector(".screen").innerHTML = ``;
})

deleteLast.addEventListener("click",()=>{
    valorUpdated.pop();
    document.querySelector(".screen").innerHTML = `${valorUpdated.join("")}`;
})

suma.addEventListener("click",()=>{
    valorUpdated.push("+");
    document.querySelector(".screen").innerHTML = `${valorUpdated.join("")}`;
})



