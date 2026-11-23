conta

function sorte(){
    let min = 1;
    let max = 100;
    let dif = max - min;
    let aleatorio = Math.random();
    let num = min + Math.trunc(dif * aleatorio);

    let mostrar = document.getElementById('resultado');



    if(num > 50){
        contasorte++;
        mostrar.innerHTML =  `<img src="https://img.magnific.com/psd-premium/lucky-em-portugues-clover-com-a-palavra-sorte-em-renderizacao-3d_363450-7386.jpg?semt=ais_hybrid&w=740&q=80">`;
    }else{
        contaazar++;
        mostrar.innerHTML
    }

}