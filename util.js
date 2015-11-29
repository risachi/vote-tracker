function takeOne(arr) {
  if (arr.length === 0) {
    return null;
  } else {
  // 1. choose a random item
  var randomItem = arr[Math.floor(Math.random()*arr.length)];
  // 2. delete it from the array
  arr.splice(randomItem);
  // 3. return the item
  return randomItem;
  }
}


// Configuration
exports._test = {
  takeOne: takeOne
};
