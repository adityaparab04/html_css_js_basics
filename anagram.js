function groupAnagrams(arr) {
    let uniqueArray = [];
    let result = {};
    
    if (arr === undefined || arr.length === 0) { // Error handling
    	return result;
    }
    
    arr.forEach((c) => {
        if (!uniqueArray.includes(c)){
            uniqueArray.push(c);
        }
    });

    for (let string of uniqueArray) {
        let sortedString = string.split("").sort().join("");
        if (result[sortedString]) {
            result[sortedString].push(string);
        }
        else {
            result[sortedString] = [string];
        }
    }
  //return Object.values(result);
    for( let x in result){
        if (result[x].length === 1 ){
            delete result[x];
        }
    }
    return result;
}

console.log(groupAnagrams(['eat', 'eat', 'ate', 'dog', 'god', 'web']))
console.log(groupAnagrams(['silent', 'silent', 'listen', 'evil', 'vile', 'santa', 'satan', 'web']))
console.log(groupAnagrams(['anu', 'web']))
console.log(groupAnagrams([]))
console.log(groupAnagrams())