async function getPeople(){
    const { data } = await axios.get('https://gist.githubusercontent.com/graffixnyc/a1196cbf008e85a8e808dc60d4db7261/raw/9fd0d1a4d7846b19e52ab3551339c5b0b37cac71/people.json');
    return data;
}
const manipulateSsn = async function manipulateSsn(){
  
    let data = await getPeople();
    let newSSN = '';
    let arrSSN = [];
    let highestSSN = {};
    let lowestSSN = {};
    let highSSN=0;
    let lowSSN=0;
    let avg = 0;
    let i = 0;
    let output={};
    data.forEach(convertSSN => {
      newSSN = convertSSN.ssn.replace("-","");
      newSSN = newSSN.replace('-', "");
      arrSSN = newSSN.split('');
      arrSSN.sort();
      // console.log(i);
      convertSSN.ssn = arrSSN.join('');
      if(i === 0){
        highestSSN.firstName = convertSSN.first_name;
        highestSSN.lastName = convertSSN.last_name;
        lowestSSN.firstName = convertSSN.first_name;
        lowestSSN.lastName = convertSSN.last_name;
        highSSN=convertSSN.ssn;
        lowSSN=convertSSN.ssn;
      }
      if(lowSSN>convertSSN.ssn){
        lowestSSN.firstName = convertSSN.first_name;
        lowestSSN.lastName = convertSSN.last_name;
        lowSSN=convertSSN.ssn
      }
      if(highSSN<convertSSN.ssn){
        highestSSN.firstName = convertSSN.first_name;
        highestSSN.lastName = convertSSN.last_name;
        highSSN=convertSSN.ssn;
      }
      avg=avg+Number(convertSSN.ssn);
      i=i+1;
      
    });
    // console.log(avg);
    avg=avg/i;
    output.highest=highestSSN;
    output.lowest=lowestSSN;
    output.average=Math.floor(avg);
    return output;
  }

  console.log(manipulateSsn)