//Title intro.innerText=intro.innerText+"\n\nPlease report any bugs to @BWebMaster";//
var Title = document.getElementById("title");
var head= document.getElementById("Ttile");
document.getElementById("Ttitle").addEventListener('mouseenter', Light);
document.getElementById("Ttitle").addEventListener('mouseleave', Light);
var fow=0;
function Light(){
    if(fow=="0"){
        Title.style.color="Black";
        fow=1;
        Title.style.backgroundColor='Lime';
}
    else if(fow=="1"){
        Title.style.color="Lime";
        fow=0;
        Title.style.backgroundColor='Green';
}
    else{alert("fail");}
    console.log("Fow "+fow);
}


//Pop//
var C1;
var p7 =document.getElementById("popup");
function Pop(title){
    openPop();
    if(title==undefined){return pop("error");}
    else {
        C1=title;
        pop(C1);
    }
}
function pop(type){
    if(type=="error"||type==undefined){
        alert("Pop Error");
    }
    else {
       document.getElementById("Pt").innerText = document.getElementById(type+"t").innerText;
       document.getElementById("Pi").src = document.getElementById(type+"i").src;
       document.getElementById("Pd").innerText = document.getElementById(type+"p").innerText;
    }
}
function openPop(){
    p7.style.display="";
}
function closePop(){
    p7.style.display="none";  
}



//Items//
const vari ={
    item1:document.getElementById('i1'),
    item1img:document.getElementById("i1i"),
    item1title:document.getElementById("i1T"),
    item1txt:document.getElementById("i1t"),
};



