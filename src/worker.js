function fibonacci(n) {
    return n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2)
}

var onmessage = function (event) {
    var number = event.data;
    var result = fibonacci(number);
    postMessage(result);
}

function fn(a) {
    a = a + 1;
}

var a = 1;
fn(a);
console.log(a);