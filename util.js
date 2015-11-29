function takeOne(arr) {
  var deletedItems = arr.splice(randomIndex(arr), 1);
  return deletedItems[0];
}

function randomIndex(arr) {
  Math.floor(Math.random() * arr.length);
}

// Configuration
exports._test = {
  takeOne: takeOne
};
