function isFibonacci(num) {
    let a = 0, b = 1, temp;

    while (b < num) {
        temp = b;
        b = a + b;
        a = temp;
    }

    if (b === num || num === 0) {
        console.log(`${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${num} não pertence à sequência de Fibonacci.`);
    }
}

isFibonacci(21);
