function replaceChar(string, idx){
    //1st argument is string and 2nd argument is number
    if(typeof string !== 'string' || typeof idx !== 'number'){
        throw 'Not a valid input';
    }
    //idx is greater than 0 and less than s.length -1
    if(idx <= 0 || idx >= string.length -1){
        throw 'Not a valid input';
    }
    //string should be having more than 2 characters
    if(string.length <= 2){
        throw 'Not a valid input';
    }
    //main logic
    let char = string.charAt(idx);
    let chars = [string.charAt(idx-1), string.charAt(idx+1)];
    let index = 0;
    let res = '';
    for(let i = 0; i < string.length;i++){
        if(string.charAt(i) === char && i !== idx){
            res = res.concat(chars[index]);
            if(index === 0){
                index = 1;
            }else if(index === 1){
                index = 0;
            }
        }else{
            let cur = string.charAt(i);
            res = res.concat(string.charAt(i));

        }
    }

    return res;
}

console.log(replaceChar("adi1tiyia", 2));