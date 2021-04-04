function iterativeFactorial(n) {
    let product = 1;
    while (n > 0) {
        product = product * n;
        n--;
    }
    return product;
}