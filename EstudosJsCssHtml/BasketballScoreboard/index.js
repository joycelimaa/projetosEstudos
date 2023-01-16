let count1 = 0;
let count2 = 0;

let contador1 = document.getElementById("contador1");
let contador2 = document.getElementById("contador2");

function add1(){
    count1++;
    contador1.textContent = count1;
}

function add11(){
    count2++;
    contador2.textContent = count2;
}

function add2(){
    count1+=2;
    contador1.textContent = count1;
}

function add22(){
    count2+=2;
    contador2.textContent = count2;
}

function add3(){
    count1+=3;
    contador1.textContent = count1;
}

function add33(){
    count2+=3;
    contador2.textContent = count2;
}