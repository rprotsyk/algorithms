const solution = (S, K) => {
    let resultLength = S.length;
    S.split('').forEach((char, index, arr) => {
        let tempStr = S.replace(S.substr(index, K), '')
        let count = {}
        tempStr.split('').forEach((char) => {
            count[char] == undefined ? (count[char] = 1) : count[char]++
        })
        let result = ''
        for (const currentChar in count) {
            result += `${count[currentChar] == 1 ? '' : count[currentChar]}${currentChar}`
        }
        resultLength = result.length < resultLength ? result.length : resultLength;
    })
    return resultLength;
}

console.log(solution("ABBBCDDCCC", 3))