const inputLupa = document.querySelector('.input-lupa');
const navegacion = document.querySelector('#main-menu');
let elemento;

inputLupa.addEventListener('click', (e) => {
  if(e.target.tagName==='INPUT'){
    elemento = e.target.parentElement;
  } else {
    elemento = e.target;
  }
  elemento.classList.add('blue')

})

navegacion.addEventListener('click', (e) =>{
  e.stopPropagation()
  if (elemento.classList.contains('blue')){
    console.log(elemento);
    elemento.classList.remove('blue')
  }
})