const math= require('mathjs');

// Example expression as a string
const expressionString = ')10 + 2(';


try {
  // Using math.evaluate to evaluate the expression
  const result = math.evaluate(expressionString);

  console.log(`Result: ${result}`);
} catch (error) {
  console.error('Error evaluating expression:', error.message);
}
