"use strict";
/**
 * s = "abc", t = "ahbgdc"
 * i = 0, counter = 0, s[0] = "a" | t[0] = "a"
 * i = 1, counter = 1, s[1] = "b" | t[1] = "h"
 * i = 2, counter = 1, s[1] = "b" | t[2] = "b"
 * i = 3, counter = 2, s[2] = "c" | t[3] = "g"
 * i = 4, counter = 2, s[2] = "c" | t[4] = "d"
 * i = 5, counter = 2, s[2] = "c" | t[5] = "c"
 * counter = 3
 */
function isSubsequence(s, t) {
    let counter = 0;
    for (let i = 0; i < t.length; i++) {
        if (s[counter] === t[i])
            counter++;
    }
    return counter === s.length;
}
