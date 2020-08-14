// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    const result = [];

    for(let i = 1; i < S.length && i < 4; i++) {
        const part1 = S.substring(0, i);
        if(!validIpNumber(part1)) {
            continue;
        }
        for(let j = 1; i + j < S.length && j < 4; j++) {
           const part2 = S.substring(i, i + j);
           if(!validIpNumber(part2)) {
              continue;
           }
           for(let k = 1; i + j + k < S.length && k < 4; k++) {
               let part3 = S.substring(i + j, i + j + k);
               let part4 = S.substring(i + j + k);
               if(!validIpNumber(part3) || !validIpNumber(part4)) {
                   continue;
               }

                result.push(`${part1}.${part2}.${part3}.${part4}`)
           }
        }
    }  

    return result; 
}

function validIpNumber(s) {
   if(s.indexOf('0') === 0 && s.length > 1) {
      return false;
   }
   const num = parseInt(s);
   return num >= 0 && num <= 255;
}

console.log(solution('4216712120'))