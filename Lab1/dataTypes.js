const spysoks = [true, "hello", 5, 12, -200, false, false, "word"];

let typeCount = {
    number: 0,
    string: 0,
    boolean: 0,
    object: 0,
    symbol: 0,
    null: 0,
    undefined: 0
};

for(const spysok of spysoks)
{
    const type = typeof spysok;
    typeCount[type]++;
}

console.log(typeCount);