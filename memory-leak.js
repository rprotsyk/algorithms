function memoryLeak(i) {
    const a = i;
    console.log(process.memoryUsage())
    return a;
}

for(let i = 0; i <= 10000000; i ++) {
    let a = setTimeout(function() { memoryLeak(i)}, 0);;
    //console.log(a);
    a = null;
}