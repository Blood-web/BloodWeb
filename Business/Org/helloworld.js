/*We having a working Javascript repo */
/* We can keep this cleaner and more inline than our other files*/

function mega(){
    document.querySelector("#table").addEventListener("click", (event)=>{
        if(event.target.dataset.type==='clear'){
          const ids = ['a1', 'a2','a3','a4', 'a5', 'a6', 'c1', 'c2', 'c3', 'c4', 'c5'];
          ids.forEach((ele)=>{
           document.querySelector(`#${ele}`).style.opacity = '0';
          });
          return;
        }
        event.target.style.opacity = "0";
        
      }
      )
}


/*We are going to write a func to invoke all opacity 0 funcs*/
function Xcoa(){
    coa1();
    coa2();
    coa3();
    coa4();
    coa5();
    coa6();
}
function Xcob(){
    cob1();
    cob2();
    cob3();
    cob4();
    cob5();
    cob6(); 
}

/* Workinng function for changing opacity*/
function coa1() {
    var element = document.getElementById("a1");
    element.style.opacity = "0";
}
function coa2() {
    var element = document.getElementById("a2");
    element.style.opacity = "0";
      
}
function coa3() {
    var element = document.getElementById("a3");
    element.style.opacity = "0";
}
function coa4() {
    var element = document.getElementById("a4");
    element.style.opacity = "0";
      
}
function coa5() {
    var element = document.getElementById("a5");
    element.style.opacity = "0";
}
function coa6() {
    var element = document.getElementById("a6");
    element.style.opacity = "0";
}
/* B line*/
function cob1() {
    var element = document.getElementById("b1");
    element.style.opacity = "0";
}
function cob2() {
    var element = document.getElementById("b2");
    element.style.opacity = "0";
      
}
function cob3() {
    var element = document.getElementById("b3");
    element.style.opacity = "0";
}
function cob4() {
    var element = document.getElementById("b4");
    element.style.opacity = "0";
      
}
function cob5() {
    var element = document.getElementById("b5");
    element.style.opacity = "0";
}
function cob6() {
    var element = document.getElementById("b6");
    element.style.opacity = "0";
}