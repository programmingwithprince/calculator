var keyboard= document.querySelectorAll(".keyboard")
const query= document.getElementById("query")
const backspace=document.getElementById("backspace")
Array.from(keyboard).forEach((key)=>{
  key.addEventListener("click",()=>{
    console.log(key.innerHTML);
    openFullscreen()    
    if (key.innerHTML=="="){
      if (query.value==""){
        console.log("please fullfill the term")
      }else{
        query.value=eval(query.value);
      }
    }else if(key.id=="backspace") {
      console.log ("backspace")
    }else if(key.innerHTML=="C"){
      query.value="";
    }else if(key.innerHTML=="+" || key.innerHTML=="-" || key.innerHTML=="*" || key.innerHTML=="/"){
      if (query.value==""){
        console.log("Operatars cannot be used first");
      }else{
        query.value=query.value+key.innerHTML;
      }
    }
    else{
    query.value=query.value+key.innerHTML;
    
  
    }
  })
});
backspace.addEventListener("click",()=>{
query.value=query.value.slice(0,query.value.length-1);
  
});
/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
 
function checkErrors(){
  return true
}
openFullscreen()
elem.requestFullscreen();
