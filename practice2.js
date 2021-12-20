function checkPalindrome(phrase) {
    
    //convert the string to lowercase
    phrase = phrase.toLowerCase();
    
    //eliminate the special characters and spaces
    phrase = phrase.replace(/[^0-9a-z]/g, "");  //referred from stack overflow
    console.log(phrase)
    if (phrase.length === 0) {
        //alert("Please enter the alphanumeric phrase.");
        return false;
    }
    // reverse text and compare
    let newPhrase = phrase.split('');
    let len = newPhrase.length
    console.log(newPhrase)
    for(let i = 0; i<len; i++){
        if(newPhrase[len] === newPhrase.[i]){

        }
        else return
    }
    // if(newPhrase === phrase){
    //     return true;
    // }else{
    //     return false;
    // }
}

console.log(checkPalindrome('hell@o ad$itya'))