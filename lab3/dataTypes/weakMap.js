let cache=new Map();

function process(obj){
    if(!cache.has(obj)){
        let result=obj; //calculations of the result for obj

        cache.set(obj, result);
        return result;
    }
    return cache.get(obj);
}

let obj = {/* let's say we have an object */};

let result1=process(obj);//calculated

let result2=process(obj);// remembered result taken from cache

obj=null;

console.log(cache.size);// 1 (Ouch! The object is still in cache, taking memory!)






