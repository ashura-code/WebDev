const buttoninc = document.querySelector('#buttoninc');
const buttondec = document.querySelector("#buttondec");
 let count = 0;
 const counter = document.querySelector('#counter');
function inc(){
   count++;
  if(count<=0){
   count=0;
}
   counter.innerText = count;
   
}
function dec(){
  count--;
  if(count<=0){
   count=0;
}
  counter.innerText = count;

}

buttoninc.addEventListener('click',inc)
buttondec.addEventListener('click',dec)



