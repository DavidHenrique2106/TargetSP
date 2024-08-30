const faturamento = [
    {"dia": 1, "valor": 22174.1664},
    {"dia": 2, "valor": 24537.6698},
    {"dia": 3, "valor": 26139.6134},
    {"dia": 4, "valor": 0.0},
    {"dia": 5, "valor": 0.0},
    {"dia": 6, "valor": 26742.6612},
   
];

function analisarFaturamento(faturamento) {
    let menorValor = Number.MAX_VALUE;
    let maiorValor = 0;
    let soma = 0;
    let diasComFaturamento = 0;
    let diasAcimaMedia = 0;

    faturamento.forEach(dia => {
        if (dia.valor > 0) { 
            if (dia.valor < menorValor) menorValor = dia.valor;
            if (dia.valor > maiorValor) maiorValor = dia.valor;
            soma += dia.valor;
            diasComFaturamento++;
        }
    });

    const mediaMensal = soma / diasComFaturamento;

    faturamento.forEach(dia => {
        if (dia.valor > mediaMensal) {
            diasAcimaMedia++;
        }
    });

    return {
        menorValor,
        maiorValor,
        diasAcimaMedia
    };
}

const resultado = analisarFaturamento(faturamento);
console.log(`Menor valor: ${resultado.menorValor}`);
console.log(`Maior valor: ${resultado.maiorValor}`);
console.log(`Dias com faturamento acima da média: ${resultado.diasAcimaMedia}`);
