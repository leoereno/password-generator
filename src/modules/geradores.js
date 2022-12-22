const arraySimbolos = ['!', '*', '+', '#', '@', '$', '%', '(', ')', '&', '-', '.', ',', '/', '<', '>' ];
function geraMinuscula() {
    return String.fromCharCode(rand(97, 122));
}

function geraMaiuscula() {
    return String.fromCharCode(rand(65, 90));
}

function geraSimbolo() {
    //return String.fromCharCode(rand(33, 47));
    return String(arraySimbolos[rand(0, arraySimbolos.length)]);
}

function geraNumero(){
    return String.fromCharCode(rand(48, 57));
}


function rand(max, min){
    return Math.floor(Math.random() * (max-min) + min);
}


export default function geraSenha(tamanho, maiusculas, minusculas, numeros, simbolos, naoRepetir){
        let senha = '';
        tamanho = Number(tamanho);
        // let senha = [];
        let j;
        for(let i=1; senha.length < tamanho; i++){
            j = rand(1, 5);
            if(j === 1 && numeros && senha.length < tamanho) {
                if(naoRepetir){
                    let caracter = geraNumero();
                    while(caracter === senha.slice(-1)){
                        caracter = geraNumero();
                    }
                    senha = senha + caracter;
                }else{
                    senha = senha + geraNumero();
                }
            }
            if(j === 2 && maiusculas && senha.length < tamanho) {
                if(naoRepetir){
                    let caracter = geraMaiuscula();
                    while(caracter === senha.slice(-1)){
                        caracter = geraMaiuscula();
                    }
                    senha = senha + caracter;
                }else{
                    senha = senha + geraMaiuscula();
                }
            }
            if(j === 3 && minusculas && senha.length < tamanho) {
                if(naoRepetir){
                    let caracter = geraMinuscula();
                    while(caracter === senha.slice(-1)){
                        caracter = geraMinuscula();
                    }
                    senha = senha + caracter;
                }else{
                    senha = senha + geraMinuscula();
                }
            }
            if(j === 4 && simbolos && senha.length < tamanho) {
                if(naoRepetir){
                    let caracter = geraSimbolo();
                    while(caracter === senha.slice(-1)){
                        caracter = geraSimbolo();
                    }
                    senha = senha + caracter;
                }else{
                    senha = senha + geraSimbolo();
                }
            }
            
        }
        let senhaArray = Array.from(senha);

        return senhaArray.join('').slice(0, tamanho);
}
