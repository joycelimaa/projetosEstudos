//document.getElementById("count-el").innerText = 5;

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let count = 0;

function increment(){
     count++;
     countEl.textContent = count;
}

function save(){
     let value = count + " - "
     saveEl.textContent += value; //se for usado o innerText aqui, 
     count = 0;
     countEl.textContent = count;                             //os espaços vazios não vão ser vistos 
}

// let welcomeEl = document.getElementById("welcome-el");

// let nome = "Joyce"
// let gretting = "Welcome "
// welcomeEl.innerText = gretting + nome;

// welcomeEl.innerText += "👋"
