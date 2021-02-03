let arr = [
    { id: 121, name: 'trung anh', age: 25 },
    { id: 122, name: 'trung anh2', age: 26 },
]


let a = arr.filter((items) => items.name === 'trung anh');
console.log(a);
let b = arr.findIndex((items)=> items.name ==='trung anh2');
console.log(b);

let c = arr.reduce((items)=> items.id===121);
console.log(c);
