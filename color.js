const button=document.getElementById('btn');
const total=document.querySelector('body');
button.addEventListener('click',()=>
{
   let color='#';
  color+=Math.random().toString(16).slice(2,8);
  console.log(color);
  total.style.backgroundColor=color;
})