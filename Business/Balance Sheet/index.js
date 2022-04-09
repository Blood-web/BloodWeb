
var exp =document.getElementById("Expenses");
var ass=document.getElementById("Assets");

var EA =document.getElementById('EA');
EA.addEventListener('input', checkEAinnertext);

function checkEAinnertext(){
  console.log('Checking EA input');
  EA.setAttribute('placeholder',EA.value);

EA.style.fontSize="larger";
EA.style.textDecoration="underline";
EA.style.fontWeight="Bolder";
if(EA.placeholder=="Expenses" ){return EA.style.color="red"; }
if (EA.placeholder=="Assets" ){return EA.style.color="green"; }
EA.style.textDecoration="none";
EA.style.color="#000000";
EA.style.fontSize="";

}

function ls(t,T){
    for (let i =0; i < t.length; i++){
        let li = document.createElement('li');
        li.append(t[i] +' :-: '+ " $"+T[i]);
        if(T[i]>=100){ if(t==Assets && T[i]>=1000){li.setAttribute('class', 'P');}
                    else if(T[i]>=100 && t==Expenses){li.setAttribute('class', 'P');

    } }   
        if(t==Assets){
        ass.append(li); }
        else if (t==Expenses){
        exp.append(li);   
        }
        console.log(t[i]+":"+T[i]);
    }
  sumArray(T);
  if(total>=10000){Squash()}
  if(T==E){
    document.getElementById("Etotal").innerText='$'+total;


} else if(T==A){
    document.getElementById("Atotal").innerText='$'+total;
    localStorage.setItem('NW'+formatDate(new Date()), total);
}
}
function Squash(){
    total =(total/1000).toFixed(2)+'k';
}
var total = 0;
function sumArray(arr) {
    total=0;   
    arr.forEach(function(element){
        total += element;
    })
    return total; 
}
//Returns current date as DD/MM/YY without fail or fault//
function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}  
  function formatDate(date) {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/');
  }
document.getElementById("date").innerText= formatDate(new Date());
