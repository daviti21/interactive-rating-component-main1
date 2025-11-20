const four = document.querySelector('#four');
const five = document.querySelector('#five');
const button = document.querySelector('#submit');
const selectedBox1 = document.querySelector('#selected-box1');
const selectedBox2 = document.querySelector('#selected-box2');
 
 four.addEventListener('click', () => {
    four.classList.toggle('active');
    selectedBox1.style.display = 'block';
   if(four.classList.contains('active')){
   five.classList.add('not-active');
   
 }else{
   five.classList.remove('not-active');
      selectedBox1.style.display = 'none';
 }
 })

 five.addEventListener('click', () => {
    selectedBox2.style.display = 'block';
   five.classList.toggle('active');
   if(five.classList.contains('active')){
   four.classList.add('not-active');
    
 }else{
   four.classList.remove('not-active');
    selectedBox2.style.display = 'none';   
 }
 })
 
  
button.addEventListener('click', () => {
   if(four.classList.contains('active') || five.classList.contains('active')){
      window.location.href = 'active.html';
   }
})
 
