document.addEventListener("DOMContentLoaded",()=>{

  //Variables
  let selectFrom = document.querySelector('#select_from')
  let selectTo = document.querySelector('#select_to')
  const reg = /^[0-9]*$/
  const result = document.querySelector('#result')
  const entry = document.querySelector('#input_entry')
  

  
  //Listeners
  selectFrom.addEventListener('change', getResult,false)
  selectTo.addEventListener('change', getResult, false)
  entry.addEventListener('input', getResult, false)


  //Functions
 
checkEntry = (num)=>{
  const err = document.querySelector('.error')

  if(reg.test(num)){
    return isNaN(num) || num < 0 ? false : parseInt(num) 
    
  }else{
    err.textContent = "Input correct number"
  }
}
  
function getResult(){
  const n = entry.value
  const fromValue = selectFrom.value
  const toValue = selectTo.value
   
  result.textContent =" " + Number.parseFloat((fromValue * checkEntry(n)) / toValue)
}
    
  


});