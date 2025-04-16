console.log('Script demo loaded!');
/* 1 */
let el1 = document.getElementById('titel2');
console.log(el1);

/* 2 */
let elements = document.getElementsByTagName('p');
//console.log(elements);

for (let i = 0; i < elements.length; i++) {
  console.log(elements[i]);
}
/* 3 */
let el2 = document.getElementsByClassName('speciaal');
console.log(el2[0]);