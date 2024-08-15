const primeiroNumero = parseFloat(prompt("Digite o primeiro número: "));
const operador = prompt("Escolha o operador: +, -, * ou / ");
const segundoNumero = parseFloat(prompt("Digite o segundo número: "));

if (operador === "+"){
    let resultado = primeiroNumero + segundoNumero;
    alert(`O resultado da soma é: ${resultado}`);
}else if(operador === "-"){
    let resultado = primeiroNumero - segundoNumero;
    alert(`O resultado da subtração é: ${resultado}`);
}else if(operador === "*"){
    let resultado = primeiroNumero * segundoNumero;
    alert(`O resultado da multiplicação é: ${resultado}`);
}else if(operador === "/"){
    let resultado = primeiroNumero / segundoNumero;
    alert(`O resultado da divisão é: ${resultado}`);
} else {
    alert("Você não colocou um operador lógico")
}