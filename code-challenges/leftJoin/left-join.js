'use strict';

function leftJoin(hashMap1, hashMap2){
  let resultArr = [];

  for(let i = 0; i < hashMap1.size; i++){
    let holdingArr = [];
    if(hashMap1.storage[i]){
      let key = hashMap1.storage[i].head.val[0];
      holdingArr.push(key);
      holdingArr.push(hashMap1.storage[i].head.val[1]);
      if(hashMap2.contains(key)){
        holdingArr.push(hashMap2.get(key));
      } 
      if(hashMap2.contains(key) === false){
        holdingArr.push('hello');
      }
      resultArr.push(holdingArr);

    }
  }
  console.log(resultArr)
  return resultArr;
}

module.exports = leftJoin;