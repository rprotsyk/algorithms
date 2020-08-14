const s1 = "abc";
const t1 = "ahbg65345345dc";
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isSubsequence = function(s, t, count = 0) {
    let text = t.split('');
    let search = s.split('');
    if(search.length > 0 || text.length > 0) {
        console.log(text, search, search.length > 0 || text.length > 0)
        for(let i=0; i<search.length; i++) {
            const index = text.findIndex(c => c === search[i]);
            if(index > -1) {
                count++;
                console.log(count)
                if(count >= t1.length) {
                    return true;
                }
                console.log('S:', s.substring(i + 1), 'T:', t.substring(index + 1))
                isSubsequence(s.substring(i + 1), t.substring(index + 1), count)   
            } 
        }
    } 

    if(count >= s1.length) {
        return true;
    } else {
        return false;
    }
};

console.log(isSubsequence(s1,t1))

