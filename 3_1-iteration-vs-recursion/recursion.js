function sum(numbers) {
    if (numbers.length === 0) {
        // non-recursive case
        return 0;
    } else if (numbers.length === 1) {
        // non-recursive case
        return numbers[0];
    } else {
        // recursive case
        return numbers[0] + sum(numbers.slice(1));
    }
}

sum([0, 1, 2, 3, 4]);