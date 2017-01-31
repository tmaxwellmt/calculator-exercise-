function  Subtraction(arr) {
  var result = Number(arr[0]);
  for (var i = 1; i < arr.length; i++) {
    result = result - Number(arr[i])
  }
    this.result = result;
}
module.exports = Subtraction
