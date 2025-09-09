function inc(n) {
    return n+1;

}

const a = 5;

const b  = inc(a);

console.dir({a, b});

function incobj(num) {
    num.n = num.n + 1;
}

const obj = {n: 5};
incobj(obj);
console.dir({obj});


const arr = [true, "hello",5, 12,-200 , false , "word", 99, "JS", true ];

const typesCount = {};

for(const item of arr) {
    const type = typeof item ; 
if (typesCount[type]) {
    typesCount[type]++;
} else {
    typesCount[type] = 1;   
}
}

const arr2 = [true, "hello",5, 12, -200 , false , false, "word", null, undefined , { x :1}];



for(const item of arr) {
    const type = typeof item ;
    if (typesCount[type]) {
        typesCount[type]++;
    } else {
        typesCount[type] = 1;
    }   
}
console.log(typesCount);

console.table(arr2);



