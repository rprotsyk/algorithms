function solution(S, X, Y) {
    let r2 = Number.MAX_SAFE_INTEGER;
    let resultMap = new Map();
    for (let i = 0; i < S.length; i++) {
        let c = S[i];

        let d2 = X[i] * X[i] + Y[i] * Y[i];
        if (!resultMap.get(c)) {
            resultMap.set(c, d2);
        }
        else {
            if (d2 <= resultMap[c]) {
                r2 = Math.min(r2, mymap.get(c) - 1);
                resultMap.set(c, d2);
            }
            else r2 = Math.min(r2, d2 - 1);
        }
    }

    let count = 0;
    for (let i = 0; i < S.length; i++)
        if (X[i] * X[i] + Y[i] * Y[i] <= r2) {
            count++;
        }

    return count;
}

console.log(solution('ABB', [1, -2, -2], [1, -2, 2]))