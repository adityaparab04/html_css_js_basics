async function divideAsync(numerator, denominator) {
    if (typeof numerator !== "number") throw "Numerator needs to be a number"
    if (typeof denominator !== "number") throw new Error("Denominator needs to be a number");

    if (denominator === 0) throw new Error("Cannot divide by 0!");
    
    return numerator / denominator;
}

async function main() {
    const six = await divideAsync(12, 2);
    console.log(six);
    
    try {
        const getAnError = await divideAsync("foo", 2);
    } catch(e) {
        console.log("Got an error!");
        console.log(e);
    }
    
}

main();
