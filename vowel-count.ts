const vowelCount = (str) => {
    const res = str.match(/[aouei]/g);
    return res.length;
    /*
    let count = 0;
    for(const c of str) {
        if( c.match(/(a|o|u|i|e)/) ) {
            count++;
        }
    }
    return count;
    */
}

console.log(vowelCount('eurowqihfaadajdasdj;adflahfaoasodofsoaf'));