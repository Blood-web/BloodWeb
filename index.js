

const Stets = {

    case: '',
    'a': 'b',

}




function setLink(targ, link) {
    let x = document.getElementById(targ);
    x.setAttribute('');
}


setTimeout(() => {
    if(document.title.includes("BloodWeb.net")){ SetLinks();} 
}, 300);

function Active(){
     setTimeout( () => {
    console.log("Active Element: "+(window.document.activeElement)+'\n Window Nod'+(window.document.getSelection().anchorNode));
    Active();
}, 700000);
}
Active();

