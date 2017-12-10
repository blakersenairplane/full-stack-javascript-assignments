var message = 'Hello'
let greeting = 'Yo!'
const saying = 'What up?'

console.log(message)
console.log(greeting)
console.log(saying)

message = 'World'
greeting = 'Hello'
// saying = 'Booyah'

console.log(message)
console.log(greeting)
console.log(saying)

/*

Observastions
1. Var is scoped to the nearest function block where let is scoped to the 
nearest closing block.  
2. let can be reassigned while const cannot
3. use let if you have a value that needs to change and const for a value 
that does not change.

*/