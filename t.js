let arr = [
    {
        type: '1',
        desc: 'desc'
    },
    {
        type: '2',
        desc: 'desc'
    },
    {
        type: '1',
        desc: 'desc'
    }
]

var dup = []
let d = arr.map(e => e.type)
    .sort()
    .reduce((prev, curr, cI, ar) => {
        
        if (prev && curr == prev) dup.push(curr)
        return dup
    })

console.log(d)

/*const jj = require('js-joda')

console.log(jj.convert(jj.LocalDate.now(), jj.ZoneOffset.UTC).toDate())
*/
// let array = [
//     {a: 1},
//     {a: 4},
//     {a: 6},
//     {a: 1},
//     {a: 7}
// ]

// /*
// 1. find all encounters more than 1 times
// 2. show them to user
// */
// let duplicates = []

// array.forEach((v,i,arr) => {
//     let cnt = arr.filter( el => el.a === v.a ).length;
//     if (cnt > 1) duplicates.push(v.a) 
// })

// console.log(JSON.stringify(duplicates, 0, 3))
/*

let obj = {
    a: 1,
    b: 1,
    c: 1,
    d: {
        a: 123
    }
}

let obj3 = Object.assign({}, obj)

obj3.d.a = 555

console.log(obj.d.a)
console.log(obj3.d.a)
*/
/*
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return '{' + s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4() + '}';
}

function guid2() {
    return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


function guid3() {
    let s4 = () => Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    return '{' + s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4() + '}';
}

console.log(guid())
console.log(guid2())
console.log(guid3())
*/