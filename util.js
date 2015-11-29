function takeOne(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  // Delete it from the array
  return arr.splice(randomIndex, 1)[0];
}


// Configuration
exports._test = {
  takeOne: takeOne
};
