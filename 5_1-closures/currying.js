function greet(greeting, name) {
    return `${greeting}, ${name}`;
}

function curryGreet(greeting) {
    return function (name) {
        return `${greeting}, ${name}`;
    }
}

const greetItalian = curryGreet('Ciao');
greetItalian('Alonzo');

const greetSpanish = curryGreet("Hola");
greetSpanish("Alonzo");