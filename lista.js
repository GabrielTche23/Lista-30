"use strict";
//Ex 1
// let numeros:number[]
// let par:number
// par = 2%0
// let impar:number
// impar = 3%0
// numeros = [1,2,3,-4,-5]
// numeros.forEach(numero =>{
//     if(numero == par ){
//         numero = 1
//     }
//     else{
//         numero = -1
//     }
// })
// console.log(numeros)
//Ex.2
// let array:string[]
// let index:number
// let numero:string 
// function InserirNoArray(){
//     for (let index = 0; index < 5; index++) {
//         numero = prompt("Digite um numero:")!
//         array.push(numero)
//         if(array[index] == numero){
//             alert("Você já digitou este numero,por favor digite outro.")
//         }
//     }
// }
//Ex 3
let arrayA = [1, 2, 6, 9, 2, 3, 5];
let arrayB = [1, 3, 5, 6, 8, 1, 2];
let arrayC = [];
let continuar = true;
while (continuar) {
    let opcao = parseInt(prompt("Digite 1 para inserir no vetor A / 2 - Adicionar no Vetor B / 3 - Exibir Vetor C. / 4 - Encerrar"));
    if (opcao == 1) {
        let inserirNumero = parseInt(prompt("Digite um numero:"));
        arrayA.push(inserirNumero);
    }
    else if (opcao == 2) {
        let inserirNumero = parseInt(prompt("Digite um numero:"));
        arrayB.push(inserirNumero);
    }
    else if (opcao == 3) {
        ExibirVetorC(arrayA);
    }
    else {
        continuar = false;
    }
}
function ExibirVetorC(array) {
    if (arrayA.find(array) == arrayB.find(array)) {
        arrayC.push();
    }
}
