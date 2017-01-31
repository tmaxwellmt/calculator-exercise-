function  Multiplication(arr) {
  var result = Number(arr[0]);
  for (var i = 1; i < arr.length; i++) {
    result = result * arr[i]
  }
    this.result = result;
}
module.exports = Multiplication
