console.log('Script demo loaded!');
/** 1 */
function wijzig1() {
  let pizza = document.getElementById('two');
  pizza.textContent = 'Lasagne';
  pizza.style.border = '1px solid red';
}

/** 2 */
function wijzig2() {
  let items = document.getElementsByClassName('hot');
  //console.log(items);
  items[0].className = 'cold';
  // of
  //items[0].classList.add('cold');
  //items[0].classList.remove('hot');
  //of
  // items[0].setAttribute('class','cold');
}


wijzig1();
wijzig2();
