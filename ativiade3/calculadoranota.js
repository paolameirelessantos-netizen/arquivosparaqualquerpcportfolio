let nota1trim;
let nota2trim;
let resultado;

function calcular(){
    nota1trim = Number (prompt("Digite a nota de seu primeiro trimestre:"))
    nota2trim = Number (prompt("Digite a nota de seu primeiro trimestre:"))

    resultado = 180 - nota1trim + nota2trim;
}