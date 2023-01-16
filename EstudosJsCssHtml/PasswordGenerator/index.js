const characters1 = ["A","B","C","D","E","F","G","H","I","J",
"K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y",
"Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
"o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", 
"2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
"$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",
",","|",":",";","<",">",".","?","/"];

const characters2 = ["A","B","C","D","E","F","G","H","I","J",
"K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y",
"Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
"o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", 
"2", "3", "4", "5", "6", "7", "8", "9"]

const characters3 = ["A","B","C","D","E","F","G","H","I","J",
"K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y",
"Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
"o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#",
"$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",
",","|",":",";","<",">",".","?","/"];

const characters4 = ["A","B","C","D","E","F","G","H","I","J",
"K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y",
"Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
"o","p","q","r","s","t","u","v","w","x","y","z"]

let palavra1, palavra2;

let caixa1 = document.getElementById("caixa1");
let caixa2 = document.getElementById("caixa2");

let checkbox1 = document.getElementsByClassName("toggle-input");
let checkbox2 = document.getElementsByClassName("toggle-input2");






function copy(){
    let texto = document.getElementById("caixa1").textContent;
    navigator.clipboard.writeText(texto);
    console.log('Content copied to clipboard');
}

function copy2(){
    let texto = document.getElementById("caixa2").textContent;
    navigator.clipboard.writeText(texto);
    console.log('Content copied to clipboard');
}


function generatePassword(){
   
    let valorAnterior = atualizaSelect();
    let valor = parseInt(valorAnterior);

    if(checkbox1.checked && checkbox2.checked){
        console.log("joy")
        
     }

    for (let i=6; i<=15; i++){

        if (valor === i){
            palavra1 = createPassword(palavra1, i);
            caixa1.textContent = palavra1;
        
            palavra2 = createPassword(palavra2, i);
            caixa2.textContent = palavra2;
        }
    }    
  
}


function atualizaSelect(){

    let select = document.querySelector('#select');
    let optionValue = select.options[select.selectedIndex];
    let value = optionValue.value;
    return value;
}


function createPassword(palavra, size){

    palavra = "";
    for(let i = 0; i<size; i++){
        let caractere = Math.floor(Math.random()*characters1.length);
        palavra += characters1[caractere];
    }
    return palavra;
}

