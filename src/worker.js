function fibonacci(n) {
    return n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2)
}

var onmessage = function (event) {
    var number = event.data;
    var result = fibonacci(number);
    postMessage(result);
}

// Path: src/index.js
var worker = new Worker('worker.js');
worker.postMessage(40);
worker.onmessage = function (event) {
    console.log(event.data);
}

test__
