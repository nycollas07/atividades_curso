// //1 - Números de 1 a 20
// for (let i = 1; i <= 20; i++){
//     console.log(i)
// }
// //2 - Tabela de Multiplicação 
//  let number = 2;

//   for(let i = 1; i <= 10; i++){
//     console.log(`tabuada ${number}: ${number} X ${i} = ${number * i}`)
//   }
// //3 - Média de Notas
// const numNotas =  parseFloat(prompt("Digite quantas notas você deseja inserir: "));
// let total = 0;

// for (let i = 1; i <= numNotas; i++) {
//     let nota = parseFloat(prompt(`Digite a nota: ${i}`));
//     total += nota;
// }
// const media = total / numNotas;
// alert(`A média das notas é: ${media}`);
// //4 - Contagem de Dígitos em um Número
// let number = parseInt(prompt("Digite um número: "));
// let count = 0;

// while(number> 0 ){
//     number = Math.floor(number / 10);
//     count ++;
// }
// alert(`O número de dígitos é: ${count}`)
// //5 - Exibir Números de Fibonacci
// const quantidadenumeros = parseInt(prompt("Digite quantos números deseja ver: "));
// let numero01 = 0;
// let numero02 = 1;

// for(let i = 0; i < quantidadenumeros; i++){
//     alert(numero01);

//     const proximoNumero = numero01 + numero02;
//     numero01 = numero02;
//     numero02 = proximoNumero;
// }