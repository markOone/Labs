const spysoks = [true, "hello", 5, 12, -200, false, false, "word"];

let typeCount = {};

for(const spysok of spysoks)
{
    const type = typeof spysok;
    if(type in typeCount)
    {
        typeCount[type]++;
    }else{
        typeCount[type] = 1;
    }
        
}

console.log(typeCount);