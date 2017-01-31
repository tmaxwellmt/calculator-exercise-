var Addition = require('./addition');
var Subtraction = require('./subtraction');
var Multiplication = require('./multiplication');
var Division = require('./division');

function calculator(arr, operation){
  var result = new operation(arr);
  console.log(result.result);

}
  var input = []
  for (var i = 2; i < process.argv.length; i++) {
    input.push(process.argv[i])
  }
calculator(input, Multiplication)
calculator(input, Addition)
calculator(input, Subtraction)
calculator(input, Division)
