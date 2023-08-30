"use strict";
function mergeAlternately(word1, word2) {
    let res = "";
    let maxLength = Math.max(word1.length, word2.length);
    for (let i = 0; i < maxLength; i++) {
        const a = word1[i] || "";
        const b = word2[i] || "";
        res += a + b;
    }
    return res;
}
