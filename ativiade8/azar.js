let contasorte = 0;
let contaazar = 0;

function sorte(){
    let min = 0;
    let max = 100;
    let dif = max - min +1;
    let aleatorio = Math.random();
    let num = min + Math.trunc(dif * aleatorio);

    let mostrar = document.getElementById('resultado');
    

    if(num > 50){
        contasorte++;
        mostrar.innerHTML = `<p>SORTE: ${num}</p><img src="https://img.magnific.com/psd-premium/lucky-em-portugues-clover-com-a-palavra-sorte-em-renderizacao-3d_363450-7386.jpg?semt=ais_hybrid&w=740&q=80">`;

    }else{
        contaazar++;
        mostrar.innerHTML = `<p>AZAR: ${num}</p><img src="https://blogs.correiobraziliense.com.br/aricunha/wp-content/uploads/sites/13/2024/09/azar.png">`;

    }
 
    
     if(num == 100){

        alert ("Mas daí é fácil, roubou toda a sorte do mundo pra você né");
    }

    if(num == 67){

        alert ("Azar fortíssimo filho");
    }
}