  var title=document.getElementById("title");
  function titlehover(){
  title.innerText="Fresh && best"; title.style.fontSize="6vw";
  title.classList.replace("title", "title2");
  
}
function titlerestore(){
  title.innerText="Gardener Family Farms"; title.style.fontSize="8vw";
  title.classList.replace("title2", "title");
 
}
var card = document.getElementById("card");
var cardbutton = document.getElementById("cardbutton");
var cardtext=document.getElementById("didya");
var cardimg=document.getElementById("cardimage");

function movecard(){
    if (cardbutton.style.opacity =="0.9"){ 
      //sets card opacity to 0 through hex 8 bit#//
    card.style.left="94.5%"; card.style.color="#00000000"; card.style.backgroundColor="#00000000";  card.style.border="0";
    cardtext.style.color="#00000000"; cardtext.style.backgroundColor="#00000000";
    cardbutton.style.transform="rotate(90deg)"; cardbutton.style.opacity=1; 
    }
    else {dyn();
       card.style.left="80%"; card.style.opacity=1;
        card.style.backgroundColor="#faf";  card.style.color="#000";
        card.style.border="ridge 2px aqua "; 
        cardtext.style.color="#faf"; cardtext.style.backgroundColor="#00bf50";
        cardbutton.style.opacity=0.9; card.style.zIndex="2";
        cardbutton.style.transform="rotate(-90deg)";
        } }
function closebanner(){
  document.getElementById("banner").remove();
    } 
var xor=0;
function dyn(){
xor++;
  
  if(xor==1){
     cardtext.innerText="Gardner Family Farms was founded 1 year after the owners discovered they had 1200 olive trees and a full olive processing setup on their new farmland!";
    cardimg.style.backgroundImage="url(../GF/pic/fine4.jpg)"; }
  else if (xor==2){
     cardtext.innerText="Technically the farm is in two seperate shires, because the shire can't agree on which side has more farmland, the property has two addresses! " ;}
  else if (xor==3){
     cardtext.innerText=" Olives are actually Fruits!!! (no really they are)"+'🫒'; }
  else if(xor==4){
     cardtext.innerText=" The oldest olive tree in the world is over 4000 years old! And is still producing fruit!"; }
  else if(xor==5){xor-=5;
     cardtext.innerText=" Olive oil is statisctally one of the healhiest oils, Hippocrates- Greek physician and dubbed the (father of medicine) called olive oil 'The great thapeutic'";}
  
   else{ xor =0  }
  

} 