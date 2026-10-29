function aleatorio() {
    let min = 1;
    let max = 100;
    let dif = max - min;
    let aleatorio = Math.random();
    let num = min + Math.trunc(dif * aleatorio);

    let mostrar = document.getElementById('resultado');
    mostrar.innerHTML = `<p> Acabei de pensar no número ${num}.</p>`


  if(num == 67){

        alert ("*barulho do among us* Há um farmador de aura entre nós");
    }


    const botao = document.getElementById('botaoTocar');
const audio = document.getElementById('meuSom');

botao.addEventListener('click', () => {
    audio.currentTime = 0; // Reinicia o áudio se clicar rápido de novo
    audio.play();
});


}