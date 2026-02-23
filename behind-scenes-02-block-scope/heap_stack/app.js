/* let name = 'Max';

if (name === 'Max') {
  let hobbies = ['Sports', 'Cooking'];
  console.log(hobbies);

}

function greet() {
  let age = 30;
  let name = 'Manuel';
  console.log(name, age, hobbies);
}

console.log(name, hobbies);

greet(); */

function getName(){
  return prompt('Your name: ', '');
}
function greet(){
  const userName =getName();
  console.log('Hello'+ userName);
}
greet();