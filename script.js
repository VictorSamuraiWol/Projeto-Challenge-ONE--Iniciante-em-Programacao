// As "chaves" de criptografia que utilizaremos são:
// A letra "a" é convertida para "ai"
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

let textarea = document.getElementById('textarea-main')
let btnCript = document.getElementById('btn-cript');
let btnDecript = document.getElementById('btn-decript');
let result = document.getElementById('result');
let resultSpan = document.getElementById('result-span');
let asideImg = document.getElementById('aside-img');
let asideText = document.getElementById('aside-text');
let btnCopy = document.getElementById('btn-copy');

//----print das variáveis----
console.log(textarea);
console.log(btnCript);
console.log(btnDecript);
console.log(result);
console.log(resultSpan);
console.log(asideImg);
console.log(asideText);
console.log(btnCopy);

function defaultZero() {
    textarea.value = '';
}

btnCript.addEventListener('click', () => {
    asideImg.classList = 'hidden';
    asideText.classList = 'hidden';
    result.classList = 'flex';
    let str = textarea.value;
    let newStr = '';
    var regExp = /^[a-z\s/]+$/;
 
    if ((regExp.test(str)) && (str.includes('a') || str.includes('e') || str.includes('i') || str.includes('o') || str.includes('u') || (regExp.test(str)) )) {
        newStr = str.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat');

        console.log((regExp.test(str)));
    } else {
        newStr = 'Por favor, digite somente letras minúsculas e sem acento.';
    };

        resultSpan.innerText = newStr;
        console.log(str);
        console.log(newStr);
        console.log((regExp.test(str)));

    defaultZero();
    
});
    

btnDecript.addEventListener('click', () => {
    asideImg.classList = 'hidden';
    asideText.classList = 'hidden';
    result.classList = 'flex';
    let str = textarea.value;
    let newStr = '';
    var regExp = /^[a-z\s/]+$/;
 
    if ((regExp.test(str)) && (str.includes('ai') || str.includes('enter') || str.includes('imes') || str.includes('ober') || str.includes('ufat') || (regExp.test(str)) )) {
        newStr = str.replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u');

        console.log((regExp.test(str)));
    } else {
        newStr = 'Por favor, digite somente letras minúsculas e sem acento.';
    };

        resultSpan.innerText = newStr;
        console.log(str);
        console.log(newStr);
    
    defaultZero();
});

//----evento para reiniciar o aside----
textarea.addEventListener('click', () => {
    asideImg.classList = '';
    asideText.classList = '';
    result.classList = 'hidden';
});

//----função do botão copiar----
async function copyText() {
    let campoTexto = resultSpan.innerText;
    try {
        await 
    navigator.clipboard.writeText(campoTexto);
        alert("Texto copiado para a área de transferência!");
    } catch (err) {
        console.error("Erro ao copiar o texto:", err);
    }
};

//----estilização dos btn em js----
btnCript.addEventListener('mouseover', () => {
    btnCript.style.color = '#da721e';
    btnCript.style.backgroundColor = '#910900';
});

btnCript.addEventListener('mouseout', () => {
    btnCript.style.color = '';
    btnCript.style.backgroundColor = '';
});

btnDecript.addEventListener('mouseover', ()=> {
    btnDecript.style.color = '#910900';
    btnDecript.style.backgroundColor = '#da721e';
});

btnDecript.addEventListener('mouseout', ()=> {
    btnDecript.style.color = '';
    btnDecript.style.backgroundColor = '';
});

btnCopy.addEventListener('mouseover', ()=> {
    btnCopy.style.color = '#910900';
    btnCopy.style.backgroundColor = '#da721e';
});

btnCopy.addEventListener('mouseout', ()=> {
    btnCopy.style.color = '';
    btnCopy.style.backgroundColor = '';
});


