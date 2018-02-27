// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `adder` function
describe('fizzBuzzer', function() {

  // test the normal cases
  it('should return fizz for numbers divisible by 3, buzz for numbers divisible by 5 and fizz-buzz for numbers divisibile by both', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {num: 3, expected: 'fizz'},
      {num: 10, expected: 'buzz'},
      {num: 15, expected: 'fizz-buzz'}
    ];
    // for each set of inputs (a, b), `adder` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should raise error if num is not a number', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      ['a', '1', false, 'fizz']
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        adder(badInputs);
      }).to.throw(Error);
    });
  });
});