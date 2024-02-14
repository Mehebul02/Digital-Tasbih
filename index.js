
// increment variable
const incrementBtn = document.getElementById("increment_btn");
const incrementTotalCount = document.getElementById("total_count");
// allhamdullah
const alhamdulillahBtn =document.getElementById('alhamdulillah-btn')
const alhamdulillahDecrementBtn=document.getElementById('Allah-drec')
const alhamdulillahDisplay = document.getElementById('alhamdulillah-display')
// decrement Variable 
const decrementBtn =document.getElementById('decrement_btn');


const resetBtn=document.getElementById('reset_btn')



let incrementValue = 0;
let alhamdulillahValue =0;
// increment
incrementBtn.addEventListener("click", function () {
  if (incrementValue === 33) {
    return alert("Subhan Allah Complete. Please Fillup anoter one");
  }
  incrementValue += 1;
  incrementTotalCount.innerText = incrementValue;
  incrementTotalCount.style.color='red'
});
// decrement
decrementBtn.addEventListener('click',function(){
  if(incrementValue ===0){
    return alert("A negative number")
  }
  incrementValue -=1
  incrementTotalCount.innerText=incrementValue

})

alhamdulillahBtn.addEventListener('click',function(){
  if(alhamdulillahValue ===34){
    return alert("Subhan Allah Complete. Please Fillup anoter one");
  }
  alhamdulillahValue +=1
  alhamdulillahDisplay.innerText=alhamdulillahValue
  alhamdulillahDisplay.style.color='red'
})
alhamdulillahDecrementBtn.addEventListener('click',function(){
  if(alhamdulillahValue ===0){
    return alert("Negative Number")
  }
  alhamdulillahValue -=1;
  alhamdulillahDisplay.innerText=alhamdulillahValue;
  alhamdulillahDisplay.style.color='red'
  
})
// reset 
resetBtn.addEventListener('click',function(){
  incrementTotalCount.innerText=0
  alhamdulillahDisplay.innerText=0
  
})
