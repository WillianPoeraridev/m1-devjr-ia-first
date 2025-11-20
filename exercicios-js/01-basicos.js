// 1. somar dois números
function somar(a, b) {
    return a + b;
}

// 2. Inverter uma string
function inverterString(str) {
    return str.split('').reverse().join('');
}

// 3. Encontrar o maior número em um array
function maiorNumero(arr) {
    let maior = arr[0];
    for (let num of arr) {
        if (num > maior) maior = num;
    }   
    return maior;
}

