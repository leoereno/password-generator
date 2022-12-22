import geraSenha from './geradores';


const caracteres = document.querySelector('.numero-caracteres');
const addNumeros = document.querySelector('.adicionar-numeros');
const addMaiusculas = document.querySelector('.adicionar-maiusculas');
const addMinusculas = document.querySelector('.adicionar-minusculas');
const addSimbolos = document.querySelector('.adicionar-simbolos');
const senhaField = document.querySelector('.senha-gerada');
const naoRepetir = document.querySelector('.nao-repetir');
const btGera = document.querySelector('.botao-gera');


const container = document.querySelector('.container');
const copyToClip = document.querySelector('.copy');

const copiedSuccesfull = document.createElement('p');
copiedSuccesfull.classList.add('mensagem-copia');

copiedSuccesfull.innerHTML = 'copied to clipboard!';
export default () => {
    btGera.addEventListener('click', () => {
        copiedSuccesfull.remove();
        senhaField.value = gera();
    });

    copyToClip.addEventListener('click', () => {
        navigator.clipboard.writeText(senhaField.value);
        container.append(copiedSuccesfull);
    });
};

function gera () {
    const senha = geraSenha(caracteres.value,
                            addMaiusculas.checked,
                            addMinusculas.checked,
                            addNumeros.checked,
                            addSimbolos.checked,
                            naoRepetir.checked
                            );
    return senha;
}

