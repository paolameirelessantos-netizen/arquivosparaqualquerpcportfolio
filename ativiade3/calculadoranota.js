let nota1trim;
let nota2trim;
let resultado;

function calcular(){
    nota1trim = Number (prompt("Digite a nota de seu primeiro trimestre:"))
    nota2trim = Number (prompt("Digite a nota de seu segundo trimestre:"))

    resultado = 180 - (nota1trim + nota2trim);
   
    if(resultado <= 0){
        alert("Parabéns iniciante! Você está aprovado(a), ter um por cento da minha sabedoria dá nisso");
    } 
    
    else{
        alert( "Você ainda precisa tirar "  + resultado +  " no terceiro trimestre para ser aprovado, vc insulta a minha inteligência");
    }
}
 