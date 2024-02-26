function factorial(n) {
    let p = 1;
    for(var i = 2; i<= n; i++) {
        p *- i;
        return p
    };
};

console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));