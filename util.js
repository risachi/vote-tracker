function takeOne(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomItem = arr[randomIndex];
  // Delete it from the array
  arr.splice(randomIndex, 1);
  // Return the item
  return randomItem;
}


// Configuration
exports._test = {
  takeOne: takeOne
};
