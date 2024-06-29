function diff(start, end) {
    start = start.split(":");
    end = end.split(":");
    var startDate = new Date(0, 0, 0, start[0], start[1], 0);
    var endDate = new Date(0, 0, 0, end[0], end[1], 0);
    var diff = endDate.getTime() - startDate.getTime();
    var hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    var minutes = Math.floor(diff / 1000 / 60);
    
    // If using time pickers with 24 hours format, add the below line get exact hours
    if (hours < 0)
       hours = hours + 24;
    
    return (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes;
    }
const ToggleRtT = function(){}
const Finance_Tools={
    CurrentUser:'',
    Currency:'AUD',

    // use API
    Available_Currencies:{K:['AUD','USD'],
        Pairs:{AUD_USD:0.68, USD_AUD:1.46676,}
    },
    convertValues:function (newCurrency){ 
        let FT,FAC,NewValue;
        FT = Finance_Tools;
        FAC = Finance_Tools.Available_Currencies;

        let nextCurrencyPos=(parseInt(FAC.K.indexOf(FT.Currency)+1)>FAC.K.length-1?0:parseInt(FAC.K.indexOf(FT.Currency)+1))
        let newTa=parseInt(FAC.K.indexOf(FT.Currency))
        if(!FAC.K.hasOwnProperty(newCurrency)){newCurrency=FAC.K[nextCurrencyPos];}
        
        let x = document.querySelectorAll('.Currency');
        for (ele in x){ let val =x[ele].value||x[ele].innerText;
            if(val==''||val==undefined){continue;}
            let a = parseInt(val.includes('$')?val.replace('$',''):val);
            if(newTa==0){
            NewValue = Math.floor(a*FAC.Pairs[FT.Currency+'_'+newCurrency]);
            }
            else{NewValue=a/(FAC.Pairs[FT.Currency+'_'+newCurrency]); }
            x[ele].classList.contains('eNum')?x[ele].value="$"+NewValue:x[ele].innerText=NewValue;
        }
        
        console.warn(`${nextCurrencyPos} ${newTa}`)
        Finance_Tools.Currency=FAC.K[nextCurrencyPos];
        document.getElementById('Currency_Switch').innerHTML=`Currency<br>(${FAC.K[nextCurrencyPos]})`;
        
    }  
}

let currentDate= new Date();
let currentTime = currentDate.getUTCHours()+":"+currentDate.getUTCMinutes()+":"+currentDate.getUTCSeconds();




    
const HewersTrust={// looTasks:[],
       TotalVotes:null,
       value:10, total:null, Multi:10, TotalShares:null,SharesA:null,
       
       HODLers:[],
        startingFShares:50,
        Issuance:{
            Jack:{},
            Michelle:{},
            Sebastian:{},
            Kaitlyn:{}, 
            Emma:{},
            Luke:{},
            Wyatt:{},
            Demi:{},
            Thomas:{},
            Maddison:{},
        },
        Holdings:[],
        Assets:[], 
        keys:[['Trust','The Trust is a synonym for the assests held by the `Hewers-Family-Trust'],
                ['H-S','Hewers Trust Shares'],['F-S','Fungiable Hewers-Trust Shares'],
                ['Trustee', 'The guy that gets his ass kicked if this goes tits up, the one that is also responsible for distributing rewards'],
                ['Governance', 'Any mention of Governance is tantamount to a desicion or ruling on the future of the Trust'],
                ['HODL','Represantion of Holders or the act of Holding an Asset/s , used in solidarity and kindship'],
                ['Immutable','An object which cannot be changed after it has been created, widely used in programming']],
        Laws:{
            //SubSections
            Trust:{
                'The Hewers Family Trust':[
                    'The Hewers Trust is a joint holdings of a variey of asset classes for select individuals',
                    'Holders of Shares in the trust are able to vote in future decisions regarding the trust, recieve rewards and participate in exclusive events. The Hewers Trust Provides many variants of value in this regard',
                    'More details to come..'
                ] ,
                'Hewers(HS)':[//H-Shares
                'Hewers Trust Shares or (HS) are an Immutable distrubtion of the culmination of value held by The `Hewers Family Trust`',
                'Hewers Shares have a value of $10 AUD for simplicity, this is subject to change',
                'Hodlers of (HS) are entitled to participate in Governance Voting and rewards',
                'Issuing of (HS) will convert a single (FS) of any previous issuance into a (HS) at a ratio of 1:1, also reverting the burn timer',
                '',
                'Hewers Shares can be sold or purchased as of -pending- ',
                'The first Distribution of Hewers shares was in 2018, at $20 a share, (100 shares were issued) ', 
                ],
                'Hewers-F(FS)':[ // F_Shares
                'Hewers classF Shares or (FS) are a form of shares,*Normally distributed for free, with a Sale value of 50% of the nomiminal (HS) value. i.e, If 1 H-S is worth $10 then 1 F-S would be worth $5',
                'Shares Burn at a rate of 1 share / 3 months. (Share burning is a forced buyback of F-S at -90% value) and every time a (FS) is Burnt the burn timer will return to its original value of 3 months',
                
                ],
            },
            Roles:{
                Trustee:[ // Trustee Requirements
                'The Trustee (☸) is a role responsible for handling trust allocations',
                'Distributions of Trust funds are managed by the trustee, Decisions to be enforced are made in collective by the pooled response of Trust members',
                'A minimum of 1 payout must be made from the trustee on behalf of the trust to all HODLers within 16 months of a last similar payment, Trust gift fund dispersions do not count',
                'The Trustee must ensure that the biyearly Trust rewards are distributed',
                'The Trustee cannot have more than 1% voting power in any and all Trust Governance Votes',
                'The Trustee cannot HODL fshares, any representation should be considered FiT(Funds-in-Transit) and not legitimate FS',
                ],
                HODLers:[
                'The Hodlers Role (♄) is given to anyone above the age of 16 who HODLs a HS longer than 1 year',
                'To be considered a HODLer you must always HODL atleast 1 (HS) they are required to be able to vote on Trust Governance issues and recieve rewards',
                'To Buy or Sell (HS) You age must be above or equal to 18 years old and have at least 1(HS) left after the sale',
                'To Vote in Governance Meetings and earn rewards you must be at least 16 years old',
               ],
                Treasurer:[
                    'The Treasurers  requirements are to provide on the fly financial and legal aid to the trust',
                    'The Treasurer Role is Held for a minimum of 4 Years and can appoint up to 2 nominees to assist in decisions',
                    'Treasures must be above the age of 24 and have some degree of personal investment experience',
                    'The Treasurer is entitled to biyearly payments for services provided the trust',
                ],
                'Treasurer Appointee':[
                    'The Treasures appointee is a bipart role, with 2 applicants being needed',
                    'Each Appointee is able to conduct equal privilege tasks on behalf of the treasurer',
                    'The Treasurer Appointee is also entitled to a similar biyearly payment as the Treasurer',
                    'This position must be held for a minimum of 6 Months',
                ],
                'Special Earner':[
                    'The special earner is a monthly rotating role that can be given to any trust member',
                    'HODLers with the "Special Earner" Role(as denoted by (*) will have a 1.5x Mint Muiltiplier, and 1.1x Buy multiplier. ie, if a Special Earner(*) was to purchase 10 HS (and had the trequired FS available) would recieve in total 16 HS',
                    'The trustee, while eligible to HODL the special earner role, is not eligible to recieve mint multiplier rewards',
                ],
                Scout:[
                    'The Scout is hand picked by the trustee each month to find, purchase and modify assets on behalf of the trust',
                    'Any assets located by the scout (that the trust ends up purchasing) will recieve 10% of the gross sales of that asset on top of natural recieving rewards from transactions',
                    '',
                ],
              

            },
            
        },Dates:{   'Key Dates':{ Not_a_List:true,
            'Unlock Date':daysUntil(new Date('10 29, 2024')),
            'Next Governance Vote':new Date((currentDate.getMonth(),currentDate.getDate(),currentDate.getUTCFullYear()+" 12:00:00")),
            'Rewards Pool': new Date('October 29 '+currentDate.getFullYear()),

        },
            'Historical Dates':{
                
                ' 2023':[
                    `<p class="Distribution">Distribution</p> : 8x (FS) Issued for Sebastians 2nd event rewards (Michelle,Emma,Kaitlyn,Demi) (approx. <p class="item_value"> $80AUD </p>))`,
                    `<p class="Governance">Governance</p> : Hodler Rules added `,
                    `<p class="Purchase">Purchase</p> 1x MarbleVerse[Legendary]Marble(NFT), <p class="item_value"> $19USD(250$CRO)</p>`,
                    `<p class="Purchase">Purchase</p> 5x MarbleVerse[common]Marble(NFT), <p class="item_value"> $48USD(750$CRO)</p>`,
                    `<p class="Purchase">Purchase</p> 1x MarbleVerse[Legendary]Marble(NFT), <p class="item_value"> $450USD(7999$CRO)</p>`,
                    `<p class="Purchase">Purchase</p> 1x Mad Hare(NFT), <p class="item_value">$89USD</p>`,
                    `<p class="Purchase">Purchase</p> 500,000,000x Shiba($SHIB), <p class="item_value"> $110USD</p>`,
                    `<p class="Distribution">Distribution</p> : 500x (FS), distributed across all members (approx. <p class="item_value"> $5000AUD</p>)`,
                    `<p class="Governance">Governance</p> : Fshares a.k.a (Fungiable shares) or (FS) created as an incetive to give and recieve more`],
                ' 2022':[
                    `<p class="Purchase">Purchase</p> 1000x Cronos($CRO), <p class="item_value"> $86USD</p>`,
                    `<p class="Purchase">Purchase</p> 3x $KO(Coke) Shares, <p class="item_value"> $345USD</p>`,
                    `<p class="Governance">Governance</p> : Treasurer :Michelle; appointed`,
                    `<p class="Purchase">Purchase</p> 1x Loaded Lion(NFT), <p class="item_value"> $3000USD</p>`,    
                    `<p class="Distribution">Distribution</p> : 450x (HS) distrubuted across all members, (approx. <p class="item_value">$4500AUD</p>)`,
                    `<p class="Governance">Governance</p> :Ewers Trust Rebranded to Hewers Trust `,
                    `<p class="Purchase">Purchase</p> 2350x $CRO, <p class="item_value"> $120USD</p>`],
                ' 2020':[`<p class="Governance">Governance</p> : Ewers Trust Formed`],
                ' 2018':[`<p class="Distribution">Distribution</p> : 100x (HS), The first Promising Shares are issued approx(<p class="item_value">$2000AUD</p>)`],
            },
          
        },
       Patch_Notes:{
        TODO:[
            //1.05 Hewers Trust Alpha Release
            /*'Flushed Login and user creation',
            ' Hidden For non Users Beta features'
            ' Holldings data appended'
            */
            //1.04 Login Beta
            'Currency Conversion messes up values',
            'Relocate FS Switch, restyle FS elements',
            'Add Login System'
        ],
        Fixed:{'22/02/2023: V1.03: FrameWork Upgrade':[
                    'Currency Conversion added',
                    'Escrow location and interaction Moved',
                    '(some) Historical dates backtracked'
                ],
                '18/01/2023: V1.02: CSS Upgrade':[
                    'Button styles Uniformity',
                    'Search Bar Buggy',
                    'Details & KeyDates List'
                ]
                },
       },
        unlockDate:new Date('10 29, 2024'),
        Next_GovernanceVote:new Date((currentDate.getMonth(),currentDate.getDate(),currentDate.getUTCFullYear()+" 12:00:00")),
        NextReward_unlockDate: new Date('October 29 '+currentDate.getFullYear()),
}

const V_L = HewersTrust.value;
let HT = HewersTrust; 
let HiT = HT.Issuance;
let L = HT.Laws;
let D = HT.Dates;
let DK = HT.Dates["Key Dates"];


const Z={
    h1: document.querySelector('h1'), h2:document.querySelector('h2'), 
    Holdings_Div: document.getElementById("Holdings_Div"),
    Holdings_Report:document.getElementById("Holdings_Report")||createElement('table',{id:"Holdings_Report"}),

    Build_Area:   document.getElementById('Build_Area'),
}



let SumArray=function(arr){let x; arr.forEach(element => {x[0]+=arr[element]});return x[0]; }
 
let ConvertESNUM = function(e){let t= document.getElementById(e); (t.type=="password"||e.id=="Escrow_totalShares")?t.type="text":t.type="password";}

let sumTrustACC = function(x){ return x*HewersTrust.Multi*HewersTrust.value;}

let PrintHODLers = function(x,F_Shares){ let obj=[]; let KeyZ = Object.keys(HiT);
    if(x=='total'){return (PrintHODLers('values',F_Shares?true:false).reduce((partialSum,a) => partialSum + a, 0));}
    if(x=='holders'){ return KeyZ;}
    for(val in HewersTrust.HODLers){let FS = HiT[KeyZ[val]];//  alert(val+"/"+FS+"/"+KeyZ)
        switch (x) {
            case 'values': obj.push((FS.shares*V_L)+((F_Shares==true&&FS.fshares)?(FS.fshares*V_L/2):0));
            break;
            case 'shares': obj.push(FS.shares+((F_Shares==true&&FS.fshares)?":"+FS.fshares:0));
            break;
            default:
                obj.push([   // name, shares $val Fshares?$val
                    KeyZ[val], FS.shares,"$"+FS.shares*V_L,
                    (F_Shares===true&&FS.fshares)?FS.fshares:0,
                    (F_Shares===true&&FS.fshares)?"$"+FS.fshares*V_L:"$"+0,     
                ]);
            break;
        } 
    }
return obj;
}


let Return_SharesPercent= function(user){return (user.shares/HT.SharesA*100-(1/HT.HODLers.length)).toFixed(2)+"%";}
let Return_SharesValue= function(shares,fshares){return fshares==true?shares*HT.value/5:shares*HT.value;}


function Toggle_E_Visibility(eID,y){let x = document.getElementById(eID); !y||y==''?(x.hidden!=false?x.hidden=false:x.hidden=true):x.hidden=y;}

let t3=function(){CToggle_Ele([[Z.Build_Area,'none',true],[document.querySelector('header'),'inline',true]]);}

let ToggleEscrow = function(){const x = document.getElementById('Escrow_Div');
   TeD(x,'flex',false);
    const ted=[document.getElementById('TES_0'),document.getElementById('TES_1')];
    if(x.hidden==true){x.hidden=false;ted[1].style.color="#000"; return ted[0].style.color="green";}
    x.hidden=true;ted[0].style.color="#000"; return ted[1].style.color="red";
}
const ToggleNavSelectors = function(x){let y = document.querySelectorAll('.NavSection_Div>button');
        for (e in y){ y[e].className="";}
        x.className="Select_Holdings";
        
}
function toggle_List_Vis(target){
    let x = document.querySelectorAll('span[id*="List_Main_"]');   
    for (e in x){x[e].style?x[e].style.display="none":false;} //Clears elements
    let t;
    if(!target||target==''){t=x[0];}
    else{t = document.getElementById(target);} //Finds target else x[0]
    t.style.display="block"; 
}

const Toggle_SearchSettings_Vis = function() { t = document.getElementById('HT_SearchSettings_Div');
t.style.display=="none"?t.style.display="flex":t.style.display="none";
}

function PushFull(x){ 
    for (let i=0; i<HT.HODLers.length; i++){ let b = Object.keys(HT.Issuance)[i];
        for(ele in User.users){let a = User.users[ele];
            if(b==a.firstname){
                console.log(`Hit : b=${b} a=${a.firstname}`);
                HewersTrust.Issuance[b]=a;
                HewersTrust.Issuance[b].value=a.shares*10+(a.fshares*5);
            }
        }
    }
}
let PushNames= function(x){for (let i=0; i<HT.Issuance.length;i++){HT.Issuance[x[i]].name=x[i];}}
let PushValues=function(x){for (let i=0; i<HT.Issuance.length;i++){
    HT.Issuance[x[i]].HS_Value=Return_SharesValue(x[i].shares);
    HT.Issuance[x[i]].FS_Value=Return_SharesValue(x[i].fshares);
}}
let CheckName = function(x){let H = PrintHODLers('holders');
    for (let i=0; i<H.length; i++){ let o = H[i].toLocaleLowerCase();
        if (o.includes(x.toLocaleLowerCase())){Finance_Tools.CurrentUser=H[i];
            let z=HiT[Finance_Tools.CurrentUser];   {console.log('hit');}
        }
    } 
}

function Build_Report(arr){
let tr = createElement('tr',{id:'Holdings_HeadRow'});   
for(ele in arr){let th = createElement('th',{innerHTML:arr[ele]});
        tr.append(th);
    }
Z.Holdings_Report.innerHTML=''; 
Z.Holdings_Report.append(tr);
Z.Holdings_Div.style.display=="none"?Toggle_Ele(Z.Holdings_Div,'block',true):false;
BuildUserStats();
}

const BuildList = function(target,ordered){
    let k = Object.keys(target);
    for (e in k){if(target[k[e]].hasOwnProperty('Not_a_List')){continue;}
        let Roles = Object.keys(target[k[e]]);
        
        let list_MainSection = createElement('span',{style:(e==0&&Roles.length>1)?true:"display:none;",id:'List_Main_'+k[e].replace(/\s+/g, '')});
        for (ele in Roles) { 
            let section = createElement('span',{id:`ListSubSection_${Roles[ele]}`,className:`List_${k[e]}Span`});
            let SubSection = createElement(ordered===true?'ol':'ul',{ innerHTML: `<p class="KeySections_Titles">${Roles[ele]}</p>`});
            section.append(SubSection);

            let Rules = target[k[e]][Roles[ele]]; //console.warn(`${Roles} ${Rules} ${k} ${t} `);
            for(let x=0; x<Rules.length; x++){ 
                let SectionPoint = createElement('li', { className: "KeySections_Points", innerHTML:Rules[x]});
                SubSection.append(SectionPoint);
            }
            list_MainSection.append(section);
        }     
        Z.Build_Area.append(list_MainSection);
    }   
} 



const Build_Nav=function(target){
    let Nav = document.getElementById("Finance_Keys"); Nav.innerHTML='';
    let Nav_SubSect = Object.keys(target);
    for (let i = 0; i <Nav_SubSect.length; i++) {
        let NavSection = createElement('div',{className:"NavSection_Div"});
        let C_Button = createElement('button', { innerHTML: `${Nav_SubSect[i]}`,className:i==0?"Select_Holdings":"", onmouseenter:`ToggleNavSelectors(${document.getElementById('')})`,});
        NavSection.append(C_Button);
        let Roles = Object.keys(target[Nav_SubSect[i]]);let rm_Space =(Nav_SubSect[i].replace(/\s+/g,'_'))
        let ads=Nav_SubSect[i].replace('s','');console.warn(`${ads}  ${rm_Space}`);
        for (ele in Roles) { if(Roles[ele]=="Not_a_List")continue; console.warn(`ele=${ele}`);
            NavSection.innerHTML+=`<a href="#ListSubSection_${Roles[ele]}" class="${Nav_SubSect[i]}_NavCells">${Roles[ele]}</a>`;}
        Nav.append(NavSection);
    }
    
    Z.h2.innerHTML='';Z.h2.append(Nav);

    $('.NavSection_Div>button').bind('mouseover', function(){ $(this).trigger('click'); //console.log('hover'); 
    });
}



function Build_Hewers_NavPage(type){ // Builds Pages, Use Finance_Keys
    Z.Build_Area.innerHTML=''//`<h4>${type}</h4>`; 
    let p0 = document.querySelector('h4')||createElement('h4');
    const z0 = function(p){p0.innerHTML=p; Z.Build_Area.append(p0);}

    let Build_Hewers__RnR=function(){z0("Rules and Regulations of the Hewers Family Trust"); 
        Build_Nav(L);BuildList(L,true); 
    }

    let Build_Hewers_KeyDates = function() { z0("Past and Future important days");
        const setKeyDates= function(){
            DK["Unlock Date"]=daysUntil(HT.unlockDate);
            DK["Rewards Pool"]=(((PrintHODLers('total')/10)/daysUntil(HT.NextReward_unlockDate))/(PrintHODLers('total')/10)*100).toFixed(2)+'%';
        }
        
        let H_total = (PrintHODLers('total')/10).toFixed(0);
        let C_total = (H_total/daysUntil(HT.NextReward_unlockDate)).toFixed(0)<10?(H_total/daysUntil(HT.NextReward_unlockDate)).toFixed(0)+10:(H_total/daysUntil(HT.NextReward_unlockDate)).toFixed(0);
        const PoolPercent=((C_total/H_total*100).toFixed(2)+'%');
        let Next_Reward_Unlock = daysUntil(HT.NextReward_unlockDate);
        setKeyDates();
    
        let span = createElement('span', {id:'List_Main_KeyDates'});
        let M = createElement('p',{className:"KeyDates_Divs", id:'ListSubSection_Unlock_Date',innerHTML:`<p class="KeySections_Titles">First Share BuyBack: <p class="Date">🔒<${DK["Unlock Date"]}days🔒</p> <i class="Bold">Max Share Buys:</i><p class="Date">25</p>`});
        let p = createElement('p',{className:"KeyDates_Divs",id:"ListSubSection_Next_Governance_Vote",innerHTML:`<p class="KeySections_Titles">Rewards</p><b> RewardsPool is <i>${PoolPercent}</i> full</b>:<p class="Date"><b class="Currency">${C_total}</b>/<b class="Currency">${H_total}</b></p><i class ="Bold">Next Reward Unlock:</i><p class="Date"><${Next_Reward_Unlock}days &#127881;</p>`});
        let GV=createElement('p',{className:"KeyDates_Divs",id:"ListSubSection_Rewards_Pool",innerHTML:'<p class="KeySections_Titles">Next Governance Vote:</p> <p class="Date"> <'+
        diff(currentTime,HT.Next_GovernanceVote.getUTCHours()+":"+currentDate.getUTCMinutes()+":"+currentDate.getUTCSeconds())+'hrs</i></p><b>Reward</b>:<p  class="Date">1 F-Share🗠</p></p>'});
        let T = createElement('i',{id:"ACTUAL_TIMER",innerHTML:"🕧"});
        
        Build_Nav(HT.Dates); 
        span.append(M,p,GV,T);
        Z.Build_Area.append(span);
        BuildList(HT.Dates);
    }

    
    let Build_Hewers_Members = function name(params) {z0('Hewers Trust Members and their HODLings');
        let p1 =createElement('span',{id:"Check_HODLers_SearchBar",  innerHTML:
            `<p>Search:</p><input type="search" id="Check_Holdings_Name_Input" placeholder="Name" onkeyup="SearchUser()" onchange="SearchUser()"/> <button onclick="Toggle_SearchSettings_Vis()">&#9881;</button>`}
        ); 
        let p2 = createElement("div",{id:'HT_SearchSettings_Div', style:'display:none',
            innerHTML:`<button name="Toggle_Fshares" className="HT_HideFS"><p style="margin: 0 auto; ">Hide(FS)</p>
                        <input id="Toggle_Fshares_Checkbox" checked type="checkbox" class="HT_SearchSettings_Buttons" name="Toggle_Fshares"  /></button`
        });
    
        Z.Build_Area.append(p1,p2);
        Build_Report(['Name','Shares','Value<p>(AUD)</p>','Vote Power']);
        BuildUserStats();
    }

    const Build_Hewers_Holdings = function(){z0("A comprehensive list of Assets held by the trust");

    }


    switch (type) {
        case 'Details':
            Build_Hewers__RnR(); toggle_List_Vis();
            CToggle_Ele([[Z.Holdings_Div,'none',true],[Z.h2,'flex',true]]);
            break;
        case 'Key-Dates':
            Build_Hewers_KeyDates(); toggle_List_Vis(); 
            CToggle_Ele([[Z.Holdings_Div,'none',true],[Z.h2,'flex',true]]);
            break;
        
        case 'Members':
            Build_Hewers_Members(); 
            CToggle_Ele([[Z.Holdings_Div,'block',true],[Z.h2,'none',true]]);
            break;
        default:
            break;
    }
    
   TeD(Z.Build_Area,'block',true);
}

let loadUserStats = function(user){ 
    if(Z.Holdings_Report.innerHTML.includes(user.firstname)){return 'Already Appended';}
    let tr = createElement('tr'); let localeName=LS_Name();
    let Name = createElement('td',{innerHTML:(user.firstname==localeName)?`<p class="Current_User">${user.firstname}</p>`:user.firstname ,className:"Table_Values"});
    let Shares = createElement('td',{innerHTML:`<p class="HS">${user.shares}</p><p style="display:none;" class="Hideable_Fshares FS">${user.fshares}</p>`,className:"Table_Values"}); 
    let Val = createElement('td',{innerHTML:`<p class="Currency">${user.value}</p><p style="display:none;" class="Hideable_Fshares Table_Equation">(<i class="FS">$`+((user.fshares?user.fshares:0)*(V_L/2))+`</i>+<i class="HS">$${user.shares*HT.value}</i>)</p>`,className:"Table_Values"});
    let Vote = createElement('td',{innerHTML:user.firstname=="Jack"?"1.00%":user.age>=16?(Return_SharesPercent(user)):'<p style="font-size:xx-small;display:inline;color:gray;">('+(Return_SharesPercent(user)).replace('%','')+')%</p>',className:"Table_Values %"});
    tr.append(Name,Shares,Val,Vote);
    (user.firstname==localeName)?Z.Holdings_Report.insertBefore(tr,document.getElementById('Holdings_HeadRow').nextSibling):Z.Holdings_Report.append(tr);
}
const BuildUserStats= function(){
    Z.Holdings_Div.append(Z.Holdings_Report);
    for(ele in HiT){loadUserStats(HiT[ele]);}
}
        


function OpenFinance(){ 
    let pidiv= createElement('div',{id:"Conic",
        style:"display:flex; background-color:#fff; padding:4%; margin:2%;"});

    const Hodl=PrintHODLers(); let PiHodler=[]; const NoPi=[];
    let values = PrintHODLers('values'); let sharecount=PrintHODLers('shares',true);
    const TotalShares = sharecount.reduce((partialSum,a) => partialSum + a, 0);
    const totalsum = values.reduce((partialSum,a) => partialSum + a, 0);
    const Average = (totalsum/Hodl.length).toFixed(2);
    let P=[]; let NP='';
    
    for(let i =0;  i<Hodl.length; i++){
        if(sharecount[i]<(TotalShares/(Hodl.length-1))){NoPi.push(Hodl[i]); NP+=sharecount[i]; continue;}
        PiHodler.push([Hodl[i]],[(sharecount[i]/(TotalShares/(Hodl.length-1))*10).toFixed(2)]);
        P.push([(sharecount[i]/(TotalShares/(Hodl.length-1))*10).toFixed(0)]);
      
    }
    P.reverse();
let pi='';
for(let i =0; i<P.length; i++){
    if(i>0){P[i]=parseInt(P[i])+parseInt(P[i-1]);}
    pi+=" #"+randomHex()+" "+P[i]+"%, red 0,";
}
    let Table = createElement('div',{id:'Conic_Table'});

    for (let i = 0; i<values.length; i++) {
        let e =Hodl[i];
        let element = createElement('div',{innerHTML:e,name:'Conic'+i})
        Table.append(element);
    }

   let Pie = createElement('div'); setAttributes(Pie,{name:'ConicPi','style':"background:conic-gradient("+pi+"black 0);"})
  // Pie.style.background="conic-gradient("+P+"gray"+"0);";
    pidiv.append(Pie,Table);
  document.body.append(pidiv);

 return Hodl.length+' AVG:'+Average+' /'+PiHodler+"/noPI//"+NoPi+"//SHARE:"+sharecount+"/"+TotalShares+"/total shares//"+totalsum;

}


function loadFinance(e){
    let t$=PrintHODLers('total',true); 
    HT.TotalVotes=PrintHODLers('shares').reduce((partialSum,a) => partialSum + a, 0);
    HT.HODLers=Object.keys(HiT); 

    const LoadEscrowData = function(){ vals =[['NUM',t$],['MC',HT.TotalVotes*HT.value]]
        for (el in vals){document.getElementById('Escrow_'+vals[el][0]).value="$"+vals[el][1];}
    }

   const PushNewPersonObjects = function(){PushFull();}
   const PushMains = function(){LoadEscrowData();PushNewPersonObjects();
    HT.total=t$; HT.SharesA=HT.TotalVotes-HT.Issuance.Jack.shares; 
    }
    PushMains(); 
};


function SearchUser() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("Check_Holdings_Name_Input");
    filter = input.value.toUpperCase();
    table = document.getElementById("Holdings_Report");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }



let toggleNav=function(x){
    let NavBTNS=document.querySelectorAll('.Finance_NavButtons');
    const NavDivs=document.querySelectorAll('.Finance_Divs');
    
    let Clear_divs = function(){for(let i=0; i<NavDivs.length; i++){(NavDivs[i]&&NavDivs[i].hidden!=true)?NavDivs[i].hidden=true:false;} }
    Clear_divs();  
    
    let UntoggleNav= function(){ for (let index = 0; index <NavBTNS.length; index++) { const c = NavBTNS[index]; 
        c.classList.toggle('Select_Holdings',false);}
    }
    UntoggleNav(); 
        //cleans old elements
    x.classList.toggle('Select_Holdings',true);
    Build_Hewers_NavPage(x.innerHTML);
}





let value_cells = document.querySelectorAll('.Table_Equation');
setTimeout(() => {
    for(y in HT.HODLers){ let x = HT.Issuance[HT.HODLers[y]];
        x.name=HT.HODLers[y];
        x.value=(x.shares*V_L+((x.fshares?x.fshares:0)*(V_L/2)))
        CheckName(HT.HODLers[y]);    
    }
}, 30);

let Toggle_Fshares = function() {  const x = document.querySelectorAll('.Hideable_Fshares');
    let res = x[0].style.display=="none"?"block":"none"; //
    for(ele in x){x[ele].style?x[ele].style.display=res:console.log('Toggled a non existant element -- FSHARRES');}
}



document.querySelector('header').addEventListener('click',function(event){
    const t = event.target; const p = event.target.parentNode;
    console.log(`Click Handler: HEADER \nT=[${t} , id:$${t.id} , class:${t.className} ]  \n p=${p.name} pClass=${p.className}`) 
    if(p.id=="BloodWeb_NavSelections"||t.className.includes('Finance_NavButtons')){
        toggleNav(t);
        Build_Hewers_NavPage(t.innerHTML);
    }
});

document.querySelector('main').addEventListener('click',function(event){
    const t = event.target; const p = event.target.parentNode;
    if([p.name,t.name].includes("Toggle_Fshares") ){let tog = document.getElementById('Toggle_Fshares_Checkbox');
            t.id!='Toggle_Fshares_Checkbox'?document.getElementById('Toggle_Fshares_Checkbox').checked=(tog.checked==true?false:true):false;        
            return Toggle_Fshares();
    } 
    if(t.className.includes('eNum')&&t.id=="Escrow_NUM"){ConvertESNUM(t.id);}        
    if(event.target.className.includes('_NavCells')){return;}
  
    if(p.className.includes('NavSection_Div')){toggle_List_Vis('List_Main_'+t.innerHTML.replace(/\s+/g, ''));ToggleNavSelectors(event.target);}
    
    

});
const switchNavCells= function(x,c){ let NavCells,i;  
    switch (x) {
        case "Roles":NavCells=document.querySelectorAll('.Roles_NavCells');break;
    
        case "Shares":NavCells=document.querySelectorAll('.Shares_NavCells');break;
            
        default: 
            NavCells=document.querySelectorAll('.Shares_NavCells')
            for (i=0; i<NavCells.length; i++) {NavCells[i].style.display="none";}
            NavCellsdocument.querySelectorAll('.Roles_NavCells') 
            for (i=0; i<NavCells.length; i++) {NavCells[i].style.display="none";}       
    }
    for (i=0; i<NavCells.length; i++) {(c=="Show"||NavCells[i].style.display!="inline-block")?NavCells[i].style.display="block":NavCells[i].style.display="none";}
}

loadFinance();
setTimeout(() => { 
Build_Hewers_NavPage('Members');

let Pages =['Details','Key-Dates','Members','HODLings'];
for (e in Pages){
   BloodWeb.appendNavEle(Pages[e],`Build_Hewers_NavPage('${Pages[e]}')`);
}
 
//time may be an issue, adjust as needed
}, 308);
 