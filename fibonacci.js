function* fibonacci() {
    let a = 0;
    let b = 1;
    while (true) {
         [a , b] = [b, a + b];
        /*const temp = a;
        a = b;
        b = b + temp;*/
        yield a;

    }
    
}
const fib = fibonacci();
for(let i = 0; i < 20; i++) {
    console.log(fib.next().value)
}
    