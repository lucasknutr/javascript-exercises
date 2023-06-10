// Receive the string
// Receive the number
// * Use a loop
//

const repeatString = function(string, num) {
    if(num < 0) return 'ERROR';
    let results = "";
        for (i = 0; i < num; i++) {
            results += string;       
        }
    return results;
};

// Do not edit below this line
module.exports = repeatString;
