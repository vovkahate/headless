const tree = {
    a: 1,
    b: 0,
    c: {
        e: 1,
        r: 0,
        w: {
            q: 0,
        },
    },
};

var f = obj => {
    let res = {};

    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            res[key] = obj[key] === 1 ? 0 : 1;
        } else {
            res[key] = f(obj[key]);
        }
    }

    return res;
};

console.log(f(tree));
