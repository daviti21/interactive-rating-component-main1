const four = document.querySelector('#four');
const five = document.querySelector('#five');
const button = document.querySelector('#submit');


 four.addEventListener('click', () => {
    four.classList.toggle('active');
  
 })

 five.addEventListener('click', () => {
   five.classList.toggle('active');
 })
 
  
button.addEventListener('click', () => {
   if(four.classList.contains('active') || five.classList.contains('active')){
      window.location.href = 'active.html';
   }
})
 
 if(four.classList.contains('active')){
   five.classList.remove('active');
 }

 if(five.classList.contains('active')){
   four.classList.remove('active');
 }