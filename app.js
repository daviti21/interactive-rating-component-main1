const four = document.querySelector('#four');
const five = document.querySelector('#five');
const button = document.querySelector('#submit');
const selectedBox1 = document.querySelector('#selected-box1');
const selectedBox2 = document.querySelector('#selected-box2');
 
 four.addEventListener('click', () => {
    four.classList.toggle('active');
     
   if(four.classList.contains('active')){
   five.classList.add('not-active');
   
 }else{
   five.classList.remove('not-active');
       
 }
 })

 five.addEventListener('click', () => {
     
   five.classList.toggle('active');
   if(five.classList.contains('active')){
   four.classList.add('not-active');
    
 }else{
   four.classList.remove('not-active');
   
 }
 })
 
  
button.addEventListener('click', () => {
   if(four.classList.contains('active') || five.classList.contains('active')){
      window.location.href = 'active.html';
   }
})

if(four){
   selectedBox2.style.display = 'none';
   selectedBox1.style.display = 'block';
}

if(five){
   selectedBox1.style.display = 'none';
   selectedBox2.style.display = 'block';
}
 
