let i = 0;

console.log('Start of the execution queue');

setTimeout(() => {
  console.log('Final code block to be executed')
},0)

while (i <= 100){
  console.log(i);
  i += 1;
}
console.log('End of the loop printing');