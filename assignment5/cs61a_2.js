var add = (x, y) => x + y;

var mul = (x, y) => x * y;

var square = (x) => x * x;

var identity = (x) => x;

var triple = (x) => 3 * x;

var increment = (x) => x + 1;

function product(n, term) {
    var product = 1;
    for (var i = 1; i <= n; i++) {
        product *= term(i);
    }
    return product;
}

function square(x) {
    return x * x;
}

function accumulate(combiner, base, n, term) {
    var answer = base;
    for (var i = 1; i <= n; i++) {
        answer = combiner(answer, term(i));
    }
    return answer;
}

function summation_using_accumulate(n, term) {
    return accumulate(add, 0, n, term);
}

function product_using_accumulate(n, term) {
    return accumulate(mul, 1, n, term);
}

function compose1(func1, func2) {
    function f(x) {
        return func1(func2(x));
    }
    return f;
}

function make_repeater(func, n) {
    var f = func;
    for (var i = 1; i < n; i++) {
        f = compose1(f, func);
    }
    return f;
}
