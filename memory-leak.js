let a = null;
function memoryLeak(i) {
    a = i;
    console.log(process.memoryUsage());
}

for(let i = 0; i <= 10000000; i ++) {
    let a = setTimeout(function() { memoryLeak(i)}, 0);;
    a = null;
}