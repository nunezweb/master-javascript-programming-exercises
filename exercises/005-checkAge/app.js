let output = checkAge('Adrian', 22);

function checkAge(name, age) {
  // your code here
  if(age < 21) return `Go home, ${name}!`
  else return `Welcome, ${name}!`
}
console.log(output); // --> 'Welcome, Adrian!'
