// Q.1) Resutaldo = 78;
function somar(){
    let indice = 13;
    let soma = 0;
    let k = 0;
    
    for (;k < indice; k++){
        soma += k;
        console.log(soma);
    }  
}
somar()

 //====================================================//
// Q.2)

function fibo(){
    var numeroInformado = 13;
    var fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    

    for(var posicao = 2; posicao < 30; posicao++){
        fibonacci[posicao] = fibonacci[posicao - 1] + fibonacci[posicao - 2];
    }
    
    function respostaFoiEncontrado(){
        console.log(fibonacci)
        if(fibonacci.includes(numeroInformado)){
            return console.log(`O  número ${numeroInformado} pertence a sequência de Fibonacci`)
        }
        console.log(`O  número ${numeroInformado} não pertence a sequência de Fibonacci`)
    }
    respostaFoiEncontrado();
}
fibo();

// 3) Descubra a lógica e complete o próximo elemento:
// a) 1, 3, 5, 7, 9
// b) 2, 4, 8, 16, 32, 64, 128
// c) 0, 1, 4, 9, 16, 25, 36, 49
// d) 4, 16, 36, 64, 100
// e) 1, 1, 2, 3, 5, 8, 13
// f) 2,10, 12, 16, 17, 18, 19, 200

    //====================================================//
//4)
// Quando os dois carros se cruzarem, ambos estarão na mesma distância de Ribeirão Preto,
// visto que o carro terá percorrido 60 km e o caminhão 40 km. Porém, considerando que estejam em sentidos opostos,
// o caminhão vai estar mais perto de Ribeirão, considerando que seja uma reta e que não se possa fazer curvas nem contornos na pista.

//5)
function invertePalavra(palavra){

    let palavraInvertida = ''
    
    for(var i = palavra.length - 1; i >= 0; i--){
        palavraInvertida += palavra[i];
    }
    return palavraInvertida;
}

console.log(invertePalavra('gato'))
    
