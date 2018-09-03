'use strict';

function collect_all_even(collection) {
  return collection

  var collection = [1, 2, 3, 4, 5];
  var odd = [];
  for(var i = 0; i < collection.length ; i++){
    if(collection[i] % 2 ==0){
       odd += collection[i];
       return odd

    }
  }
}

module.exports = collect_all_even;
