function replaceChar(s, idx){
    //1st argument is string and 2nd argument is number
    if(typeof s !== 'string' || typeof idx !== 'number'){
        throw 'Not a valid input';
    }
    //idx is greater than 0 and less than s.length -1
    if(idx <= 0 || idx >= s.length -1){
        throw 'Not a valid input';
    }
    //string should be having more than 2 characters
    if(s.length <= 2){
        throw 'Not a valid input';
    }
    //main logic

    let char = s.charAt(idx);
    let chars = [s.charAt(idx-1), s.charAt(idx+1)];
    //console.log("chars is " + chars.length);
    let index = 0;
    let res = '';
    for(let i = 0; i < s.length;i++){
        if(s.charAt(i) === char && i !== idx){
            //res += chars[index];
            res = res.concat(chars[index]);
            if(index === 0){
                index = 1;
            }else if(index === 1){
                index = 0;
            }
        }else{
            let cur = s.charAt(i);
            res = res.concat(s.charAt(i));

        }
        //console.log(res);
    }

    return res;
    


}

console.log(replaceChar("adi1tiyia", 2));