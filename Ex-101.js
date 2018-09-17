// Write a JavaScript program to check whether a given string contains only 
// Latin letters and no two uppercase and no two lowercase letters 
// are in adjacent positions.

function isLowerCaseChar( ch ) {
    return ch == ch.toLowerCase();
}

function isUpperCaseChar( ch ) {
    return ch == ch.toUpperCase();
}

function checkConditions ( s ) {
    var ans = true;

    for(var i = 0; i < s.length-1; i++) {
        if(isLowerCaseChar(s[i]) && isLowerCaseChar(s[i+1])) {
            ans = false;
            break;
        }
        if(isUpperCaseChar(s[i]) && isUpperCaseChar(s[i+1])) {
            ans = false;
            break;
        }
    }

    return ans;
}