let map=new Map();

map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, 'bool1');

console.log(map.get(1));  //'num1
console.log(map.get('1')); //'str1'

console.log(map.size)//3 


// Methods and properties are:

// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the element (the key/value pair) by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.



let recipMap= new Map ([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);

for(let vegetable of recipMap.keys()){
    console.log(vegetable);
}
for(let amount of recipMap.values()){
    console.log(amount);
}
for(let entry of recipMap){
    console.log(entry);
}