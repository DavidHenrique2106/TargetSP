function inverterString(str) {
    let invertida = "";
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }
    return invertida;
}

const stringOriginal = "Home Office";
const stringInvertida = inverterString(stringOriginal);

console.log(`Original: ${stringOriginal}`);
console.log(`Invertida: ${stringInvertida}`);
