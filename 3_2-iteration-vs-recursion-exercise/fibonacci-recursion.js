function recursiveFibonacci(n) {
    if (n < 2) return n;
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

recursiveFibonacci(19);
// 0 1 1 2 3 5 8 13...