function takeOne(arr) {
  // 1. choose a random item
  var randomItem = arr[Math.floor(Math.random()*arr.length)];
  // 2. delete it from the array

  // 3. return the item
  return randomItem;
}


exports._test = {
  takeOne: takeOne
};
