'use strict';


function findDuplicate(str){
  let tempArr = [];
  let tempStr = '';

  for (let i = 0; i < str.length; i++){
    if(str[i] !== ' '){
      tempStr += str[i];
    }else{
      tempArr.push(tempStr);
      tempStr = '';
    }
  }
  // console.log(tempArr)
  for (let j = 0; j < tempArr.length; j++){
    for(let k = 0; k < j; k++){
      if (tempArr[j].toLowerCase() === tempArr[k].toLowerCase()){
        return tempArr[j];
      }
    }
  }
  return 'There is no repeated words';
}
module.exports = findDuplicate;
