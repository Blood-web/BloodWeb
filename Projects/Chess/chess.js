const Chess = {
    seed:null,turn:'W',
    state:[null,
    ],
    target:document.getElementById('ChessBoard'),

    Board:[
            H=[0,0,0,0,0,0,0,0],
            G=[0,0,0,0,0,0,0,0],
            F=[0,0,0,0,0,0,0,0],
            E=[0,0,0,0,0,0,0,0],
            D=[0,0,0,0,0,0,0,0],
            C=[0,0,0,0,0,0,0,0],
            B=[0,0,0,0,0,0,0,0],
            A=[0,0,0,0,0,0,0,0],
    ],
    BoardChar:['H','G','F','E','D','C','B','A'],
    Positions:['Rook','Knight','Bishop','Queen','King','Bishop','Knight','Rook'],
   
    SelectedPiece:null,
    lastSelec:null,

    Piece:{
       
            Pawn:{   W:[8], B:[0] ,u:'♟'},
            Knight:{ W:[2], B:[2] ,u:'♞'},
            Bishop:{ W:[2], B:[2] ,u:'♝'},
            Rook:{   W:[2], B:[2] ,u:'♜'},
            Queen:{  W:[1], B:[1] ,u:'♛'},
            King:{   W:[1], B:[1] ,u:'♚'},
        },
}

 //♙♘♗♖♕♔♚♛♜♝♞♟ 
const CHun = '';

let clearBoard = function(){
    Chess.target.innerHTML='';
}


let logLastMove = function (move){
    document.body.append(tNode(move));
}

function clearSquare(e){
    let x = document.getElementById(e);
    setAttributes(x,{'value':''}); 
    x.innerText='';
}

function placePiece(t,unit,target){
    let x = document.getElementById(target);
    let obj = Chess.Piece[unit]['u'];
    setAttributes(x,{'value':t+'/'+unit});
    x.append(tNode(obj));

}

function MoveUnit(t,unit,target,lastPos){
    placePiece(t,unit,target);
    
    if(lastPos){ clearSquare(lastPos); }

}

function canMove(targ,color,spec){
    let t = document.getElementById(targ);
    if(!t || !t.value.contains(Chess.turn))
    switch(unit){
        case 'K':


            break;
    }
}

function CheckavailableSquares(pos,unit){
let x = pos[0]; y = pos[1];

    if(unit=='pawn'){
        canMove(x+1+y+1,'W','K');
        canMove(x-1+y+1,'W','K');
        let targ = document.getElementById((x+1)+(y-1));

        let move=canMove(targ);
        if(move==="X"||move=="1"){SetSquare(move);}
    }

}

function AppendBoard(c){
    if(c=='New'){clearBoard(); }
    for (e in Chess.Board){ 
        let row = Chess.Board[(e)]; 
        const rowName = Chess.BoardChar[(e)];

        for(i in row){ let sqr;
            switch (isEven(i)) {    
                case false:
                    if(isEven(e)==true){ sqr = 'blackSquare'; break; }
                    sqr = 'whiteSquare'; break;
            
                case true:
                    if(isEven(e)==true){ sqr = 'whiteSquare'; break; }
                    sqr = 'blackSquare'; break;
            }
            
            let unit = createElement('div',{id:rowName+i, classList:sqr+' ChessUnit'});
            
           
            Chess.target.append(unit); 

            switch (/^[G-HA-B]+$/.test(rowName)) {
                case true:
                    let color; let unit; 
                    if(/^[G-H]+$/.test(rowName)){ color = 'B';
                        if(rowName=="G"){ unit = 'Pawn';}
                        else{unit = Chess.Positions[(i)]; } 
                    }
                    if(/^[A-B]+$/.test(rowName)){ color = 'W';
                        if(rowName=="B"){ unit = 'Pawn';}
                        else{unit = Chess.Positions[(i)]; } 
                    }   
                    placePiece(color,unit,rowName+i);
                break;
                
                case false: 
                    break;
            }            
        }
    }
}

let LoadBoard = function (state) {
    
    if(Chess.state==null && state == ''){ return AppendBoard('New');; }
    if(Chess.state==null){ AppendBoard(state); return Chess.state=state;  }
    if(state){Chess.state=state;}
    AppendBoard('New');

}

function loadchessComp(){
    let test = LoadBoard();
    if( test == false ){ LoadBoard('New'); }    
}


loadchessComp();



function SelectSquare(tile){   
    let t = document.getElementById(tile);
    
    if(Chess.SelectedPiece == tile || t.classList.contains('Preview')){
        cancelPreview(Chess.SelectedPiece); 
        return t.classList.toggle('Preview', false);
    }

    cancelPreview(Chess.lastSelec);  
    Chess.lastSelec=tile; Chess.SelectedPiece=tile; 
    logLastMove(tile);
    t.classList.toggle('Preview');

}


let cancelPreview = function (tile) {
    if(tile!=null){ let i = document.getElementById(tile); 
        console.log('Ending '+i.id+' Move Preview');
        if(i.classList.contains('Preview')){
            i.classList.toggle('Preview', false);
        }
    }

    let x = document.querySelectorAll('.Preview');
    for(let i = 0;  i<x.length; i++) {
        let s = x[(i)].id;
        console.log('Ending '+s+' Move Preview');
        s.classList.toggle('Preview', false);        
    }

};




document.querySelectorAll('.ChessUnit').forEach( el =>{ 
    el.addEventListener('click', (e) => {
        
        console.log('throwing '+e.target.id);
        SelectSquare(e.target.id);
    }) 
});