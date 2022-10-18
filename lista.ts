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
// let arrayA: number[] = [1,2,6,9,2,3,5]
// let arrayB: number[] = [1,3,5,6,8,1,2]
// let arrayC: number[] = []
// //let continuar: boolean = true

// // while(continuar){
// //     let opcao: number = parseInt(prompt("Digite 1 para inserir no vetor A / 2 - Adicionar no Vetor B / 3 - Exibir Vetor C. / 4 - Encerrar")!)
// //     if(opcao == 1){
// //         let inserirNumero: number = parseInt(prompt("Digite um numero:")!)
// //         arrayA.push(inserirNumero)
// //     }
// //     else if(opcao == 2){
// //         let inserirNumero: number = parseInt(prompt("Digite um numero:")!)
// //         arrayB.push(inserirNumero)
// //     }
// //     else if(opcao == 3){
// //         ExibirVetorC()
// //     }
// //     else{
// //         continuar = false
// //     }
// // }
// console.log(ExibirVetorC())


//  function ExibirVetorC(){
//     for (let index = 0; index < arrayA.length; index++) {
//         for (let index2 = 0; index2 < arrayA.length; index2++) {
//             if(arrayA[index] == arrayB[index2]){
//                 arrayC = arrayA
//             }
//         }
//     }
//  }

//Ex 4
let array: number[] = []
let index: number = 0
for (let index = 0; index < array.length; index++) {
    let inserirNoArray = parseInt(prompt("Digite um numero para ser inserido no array:")!)
    array.push(inserirNoArray)
    if(array[index] == 0){
        array.splice(index,1)
    }
}

