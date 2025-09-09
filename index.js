// Лабораторна робота


function inc(n) {
    return n + 1;   
}

const a = 5;
const b = inc(a);


console.dir({a,b});



function incobj(num) {
    num.n++;
}


const obj = {n: 5};
incobj(obj);

console.dir(obj);



const arr2= [ true , "hello", 5 , 12, -200, false,false, "world",null , undefined , {x : 1 }, [1,2,3] , "test", 42,true ];

let table = [];
for (let i = 0; i < arr2.length; i += 2) {
    table.push([arr2[i], arr2[i + 1]]);
}
const typesCount = {};

for (const item of arr2){
    const t = typeof item;  
    if (typesCount[t]) {
        typesCount[t]++;
    } else {
        typesCount[t] = 1;
    }   
}

console.table(table);



