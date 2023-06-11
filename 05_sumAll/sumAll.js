const sumAll = (a, b) => {
    if(isNaN(a) === true || isNaN(b) === true || a < 0 || b < 0) return 'ERROR';
    let array = [];
    if (b > a){
        const newB = b;
        b = a;
        a = newB; 
    }
    for (i = b; i <= a; i++) {
        array.push(i);
    }

    return array.reduce((acc, num) => acc + num, 0);
}

// Do not edit below this line
module.exports = sumAll;
