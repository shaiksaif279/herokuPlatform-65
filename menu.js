let btnAdd = document.querySelectorAll('.btn-a');
let btnSubtract = document.querySelectorAll('.btn-s');
let input = document.querySelector('.input');
btnAdd.addEventListener('click', () =>{
  input.value = parseInt(input.value) + 1;
});
btnSubtract.addEventListener('click', () =>{
    input.value = parseInt(input.value) - 1;
});