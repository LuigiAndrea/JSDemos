function memorization(x,y){ 

    const key = `${x},${y}`; 

    if(memorization[key])
        return `${memorization[key]} from memmory (Key (${key}))`;

    let result = x+y; 
    memorization[key]=result; 
    return `${result} --> Key (${key}) saved`;
}

//Some calls
console.log(memorization(1,3));
console.log(memorization(2,2));
console.log(memorization(1,22));
console.log(memorization(1,22));
console.log(memorization(1,3));
