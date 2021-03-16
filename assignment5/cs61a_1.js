function a_plus_abs_b(a, b) {
    if (b < 0) {
        return a - b;
    }
    else {
        return a + b;
    }
}

function two_of_three(x, y, z) {
    return Math.min(x*x + y*y, x*x + z*z, y*y + z*z);
}

function largest_factor(n) {
    var i;
    var largest;
    for (i = 0; i < n; i++) {
        if (n % i == 0) {
            largest = i;
        }
    }
    return largest;
}


function if_function(condition, true_result, false_result) {
    if (condition) {
        return true_result;
    }
    else {
        return false_result;
    }
}

function with_if_statement() {
    if (cond()) {
        return true_func();
    }
    else {
        return false_func();
    }
}

function with_if_function() {
    return if_function(cond(), true_func(), false_func());
}

function cond() {
    return true;
}

function true_func() {
    console.log("Welcome to");
}

function false_func() {
    console.log("61A");
}


function hailstone(n) {
    var i;
    i = 1
    console.log(n);
    while (n != 1) {
        if (n % 2 == 0) {
            n = Math.floor(n / 2);
        }
        else {
            n = n * 3 + 1;
        }
        console.log(n);
        i += 1;
    }
    return i;
}

console.log(hailstone(10));
