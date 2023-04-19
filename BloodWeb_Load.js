function ImportScript(url){
    let script = createElement('script',{'src':url});
    document.head.appendChild(script);
}
document.title.onChange= function(){console.log('title Chnage');}
 const BWEB = { //₿
    live: true,
    Version: [1.03],//Requires Communal Footer
    BuildTypes: ['XRG', 'CRO', 'NNA', 'LUM'],
    Seed: "-42-0X" + randomNum(0, 9) + randomNum(0, 9) + randomNum(0, 9) + randomNum(0, 9) + randomNum(0, 9) + randomNum(0, 9) + randomNum(0, 9) + randomNum(0, 9) + "ef",
    loadPos: '',

    tools: {
        DisplayMaintenenceLog: function () { document.body.innerHTML = `<p style="text-align:center;"> &#128736; This site is currently undergoing maintainence &#128736;<br> We are working hard to get it up and running! Your patience is appreciated </p>`; },
        LoadUniPOP:function(Usereq,PHPmethod){document.body.insertAdjacentElement('beforeend',
        `<div id="Uni-POP">
        <p>${Usereq}</p>
        <button type="submit" name="${PHPmethod}">YES</button> <button>no</button>
        </div>`);},
        appendFixedLogo: function(target,size){ if(!target || target==''){target=document.body;} if(!size ||size==''){size='80vw';}
            createStyleRule('#fiex_BWEb',` display:block; margin: auto; margin-top:1%; margin-bottom:1%; border-radius:50%; max-width:${size}; max-height:${size}; animation:lld 5s linear infinite;border-width: min(14.8px,4.4vw);border-style:ridge; border-color: rgba(216, 112, 147, 0.171);`);
            createStyleRule('@keyframes lld',"from {transform:rotateY(0deg); -webkit-transform:rotateY(0deg);} 2%{border-color:#FF0000;} 4%{border-color:#FF7F00;}6%{border-color:#00FF00;}8%{border-color:#00FFFF;}10%{border-color:#0000FF;}12%{border-color:#8B00FF;}14%{border-color:#FF00FF;}16%{border-color:#FF1493;}18%{border-color:#FF69B4;}20%{border-color:#FFA500;}22%{border-color:#FFD700;}24%{border-color:#ADFF2F;}26%{border-color:#7CFC00;}28%{border-color:#00FF7F;}30%{border-color:#40E0D0;}32%{border-color:#00BFFF;}34%{border-color:#1E90FF;}36%{border-color:#9370DB;}38%{border-color:#FFC0CB;}40%{border-color:#FFB6C1;}42%{border-color:#FFA07A;}44%{border-color:#FFE4E1;}46%{border-color:#F0E68C;}48%{border-color:#BDB76B;}50%{border-color:#6B8E23;}52%{border-color:#556B2F;}54%{border-color:#2E8B57;}56%{border-color:#008080;}58%{border-color:#4682B4;}60%{border-color:#4B0082;}62%{border-color:#8A2BE2;}64%{border-color:#EE82EE;}66%{border-color:#FFC3A0;}68%{border-color:#FFB347;}70%{border-color:#FFAEB9;}72%{border-color:#FF6961;}74%{border-color:#CD5C5C;}76%{border-color:#F08080;}78%{border-color:#FF7373;}80%{border-color:#FA8072;}82%{border-color:#E9967A;}84%{border-color:#FF8C00;}86%{border-color:#FFA07A;}88%{border-color:#FF4500;}90%{border-color:#FF6347;}92%{border-color:#FFA500;}94%{border-color:#FFD700;}96%{border-color:#DAA520;}98%{border-color:#B8860B;}99.8%{border-color:#EEE8AA;} to {transform:rotatey(1080deg); -webkit-transform:rotateY(1080deg);}");
        
            let img=createElement('img',{id:'fiex_BWEB',src:'./i/logo/fiex.png' , alt:'BWEB_Fixed_LOGO'});
            target.append(img); 
        },
    },
    

    Nav_Settings: {
        ToggleNavs:function(el){ let allNavs = document.querySelectorAll('div[class*="Bloodweb_OpenNav_Section"]');
            if(!el || el==''){for (e in allNavs ){Toggle_Ele_Display(allNavs[e],'none',true);}}
            else{Toggle_Ele_Display(allNavs[el],'block');}
        },
        Elements: [
            ['Hewers Trust', '/Hewers_Trust/index.php', '/i/Hewers.png'],
            ['Bomber Field', '/BomberField/index.php', '/i/bomb.png'],
        ],
    },

    appendNavEle: function (title, href, subEles, callbackFuncs) {
        let Priors = document.querySelectorAll('div[class*="Bloodweb_OpenNav_Section"]').length||0;
        let nav = document.querySelector('#BloodWeb_OpenNav');
        let x=createElement('span',{className:`Bloodweb_NavSelections${Priors}`,style:"display:none;"});

       
        nav.insertAdjacentHTML("beforeend",
            `<div onclick="Toggle_Ele_Display(document.querySelector('.Bloodweb_NavSelections${Priors}'),'block')" class="Bloodweb_OpenNav_Section${Priors}"><p><a href="${href}">${title}</a></p> </div>`);
        if(subEles&&subEles!=''&&callbackFuncs){
            for (e in subEles) { let subtext =subEles[e];
                console.log(`${subEles[e]} , ${callbackFuncs}`)
                let a = createElement('p', { innerHTML: `<a href="${callbackFuncs[e]}">${subtext}</a>` });
                a.addEventListener('click', function () { console.log(`calling appended nav func = ${callbackFuncs}`); eval(callbackFuncs); })
                x.append(a);
            }
             
            document.querySelector(`.Bloodweb_OpenNav_Section${Priors}`).append(x); 
        }
            
    }
}
const UserSheet = {
    User: '', LoggedInUser: [],
    users: [],
    userList: [], Share_Total: 0,

    pushUsers: function (first, last, shares, fshares, Diamonds, bombs, role, subroles, phone, email, age) {
        let a = { 'firstname': first, 'lastname': last, 'shares': shares, 'fshares': fshares, 'Diamonds': Diamonds, 'bombs': bombs, 'subroles': subroles, 'phoneNumber': phone, 'email': email, 'Role': role, 'age': age }
        UserSheet.users.push(a);
        UserSheet.userList.push(first); let x = LS_Name();
        first != 'Jack' ? UserSheet.Share_Total += shares : false;
        if (x === first) { UserSheet.LoggedInUser = a; this.User = first; console.log(`Caught: name = ${LS_Name()} a = ${first} cd=${UserSheet.LoggedInUser.firstname}`); }
    },
    return_Name: function (name) { for (i in this.users) { if (this.users[i].firstname != name) continue; } return this.users[i]; }

}
const BattleBoard = {
    Rules: {
        Bomber: {
            Prizes: ['FreeBomb', 'Diamonds', '1(FS)', 'FreeBombx2', '2(FS)'],
            MinMinorWins: 3,
            MaxMinorWins: 5,
            MajorWins: 1,
        }
    },
    GameSheets: {
        BomberField: {},
        BomberFieldOLD: {},

    },

    logs: { BomberField: [], BomberFieldWinLogs: [], },
    methods: {
        addBomberFieldLogs: function (l) { BattleBoard.logs.BomberField.push(l); },
        PushBomberField: function (main, id, mnWins, mjWins, fbWins, hits) {
            let x = { 'inPlay': main, 'id': id, 'Mnr_Wins': mnWins, 'Mjr_Wins': mjWins, 'freeBombs': fbWins, 'hits': hits };
            if (main === 0) { return x = BattleBoard.GameSheets.BomberField = x; }
            BattleBoard.GameSheets.BomberField.push(x);
        },
        TestBomberFieldBoard: function () {
            let x = document.querySelectorAll('button[id*="BS_Square_"]');
            for (i in x) {
                if (x[i] && x[i].id) {
                    let ids = x[i].id.slice(-2); //console.log(`id = ${ids}`)
                    let BGB = BattleBoard.GameSheets.BomberField;
                    if (BGB.hits.includes(ids)) {
                        x[i].disabled = 'disabled'; console.log(`Hit : ${ids}`);
                        if (BGB.Mjr_Wins.includes(ids)) { x[i].className = "MJR"; }
                        else if (BGB.Mnr_Wins.includes(ids)) { x[i].className = "MnR"; }
                        else if (BGB.freeBombs.includes(ids)) { x[i].className = "FBS"; }
                        else { x[i].className = "HIT"; }
                    }
                    else { } // UNUSED -- LOAD DEFAULT
                }
            }
        }
    }
}



function BuildStats() {
    let overlay = createElement('div', { style: 'width:min-content; background-color:#fafafaa5; border:2px double #0a0a0a55;', innerHTML: `<button id="NSS_Switch" onclick="ToggleNerdStats()">StatsForNerds~</button` });
    currentDate = new Date();
    let dateString = currentDate.getUTCDate() + "/" + (currentDate.getUTCMonth() + 1) + "/" + currentDate.getFullYear();

    let types = ['Ver', 'Seed', 'Date'];
    let data = [
        `BloodWeb_PublicBuild_Ver${BWEB.Version}&circledast;`,
        BWEB.BuildTypes[randomNum(0, BWEB.BuildTypes.length)] + BWEB.Seed,
        "Last build date:" + weekDay[currentDate.getDay()] + " " + dateString
    ];

    const SetBloodWebStyleRules = function (params) {
        createStyleRule('#Uni-POP','position:absolute; z-index:4; width:100vw; height:100vh; margin:0 auto; padding:20%;');
        createStyleRule("a,button,input[type='submit']", "cursor:pointer;")
        createStyleRule('#NSS_Switch', 'display:block;font-size:x-small;color:blue; margin:0 auto; margin-left:1%; ');
        createStyleRule('.Nerd_Stats', 'display:none; max-width:fit-content;  margin:0 auto;margin-right:1%;  text-align:right; font-size:xx-small;');

        //NAV && Footer
        createStyleRule('#BloodWeb_Nav,#BloodWeb_Footer', 'z-index:2; background:repeating-radial-gradient(at top left, #cd12c7ef,white,#ae2ad6f0,#bc03b8ef,#cd12c7ef,white,#cd12c7ef); border: min(8px,2vw) double purple;');

        createStyleRule('#BloodWeb_Nav', 'width:100%; padding: .75% 1.25%; margin-bottom:0.64vh;top:min(4px,.4vh); position:sticky; display:flex; align-items:center;');
        createStyleRule('#BloodWeb_NavSwitch', 'text-align:center; width: min-content;height:min-content;padding:0 2%; margin-right:0;  font-size: min(8.4vw,38px);color: #fff;  background-color: #04AA6D; -webkit-text-stroke:min(1.8px , .1rem) #0000003a;  ');
        createStyleRule('#BloodWeb_Nav>span', 'height:min-content;');
        createStyleRule("#BloodWeb_OpenNav p","padding:4%;");
        createStyleRule("#BloodWeb_OpenNav", 'position:fixed; top:0; left:0; Z-index:4; width:min(68vw,450px); height:100vh; background-color:#3fa3fae9; border:2px double #0000eaff; margin-top:.4%; padding:2%;');
        createStyleRule("#BloodWeb_OpenNav>*","background-color:#fdf;");
        createStyleRule("#BloodWeb_OpenNav>*:not(#Bloodweb_OpenNav_Title)","background-color:#faaadf;");
        createStyleRule("#Bloodweb_OpenNav_Title", "height: min(60px,8vh); display:flex; flex-wrap:no-wrap; justify-content:space-between; align-items:center; `margin-top:0.4vh; border:min(4px,3vw) double #020202;");
        createStyleRule("#Bloodweb_OpenNav_Title>*", "");
        createStyleRule("#Bloodweb_OpenNav_Title>#OpenNav_Title", "display:inline; width:fit-content; padding:2% 4%; margin:0 auto; margin-left:0; border:min(2px,2vw) double #00000055;");
        createStyleRule("div[class*='Bloodweb_OpenNav_Section']>* ", "padding:1.2%; ");

        createStyleRule("#BloodWeb_OpenNav>*:not(#Bloodweb_OpenNav_Title),span[class*='Bloodweb_NavSelections'] ", 'border:4px double gray;');
        createStyleRule("div[class*='Bloodweb_OpenNav_Section']:has(>span)>p::after","content:'▼';float:right; ");

        createStyleRule("div[class*='Bloodweb_OpenNav_Section']", "margin-top:min(10px,1vh); border:2px solid #0000006a; ");

     
        createStyleRule("span[class*='Bloodweb_NavSelections']","padding:0; margin-bottom:0;");
        createStyleRule("span[class*='Bloodweb_NavSelections']>p>a", "margin:0 auto; padding:8%; border:1px solid gray; color:blue; text-decoration:underline; display:block;");
        createStyleRule("#Close_OpenNav", "font-size:x-large; width:min-content; border:1px solid #0000008a; padding:0 2%; opacity:0.75; margin-left:auto;");
       
        /* createStyleRule("#Bloodweb_NavLogo","padding:2%;")
         createStyleRule("#Bloodweb_NavLogo>*",'display:inline; ')
           createStyleRule("#Bloodweb_NavLogo>img",'max-width:min(8vw,38px); max-height::min(8w,38px); border:1px solid purple;')
    */
    }
    SetBloodWebStyleRules();

    for (e in types) {
        let p = createElement('p', { className: "Nerd_Stats", id: "Build_" + types[e], innerHTML: data[e], style: 'display:none;' });
        overlay.append(p);
    }
    document.body.append(overlay);

}
function Build_Footer() {
    let overlay = createElement()

}

function ToggleNerdStats() {
    let t = document.querySelectorAll('.Nerd_Stats');
    for (let i = 0; i < t.length; i++) {
        const e = t[i];
        e.style.display == "none" ? e.style.display = "block" : e.style.display = "none";
    }


}

const loadLogin = function () {
    console.log('Loading Login');
    let Load_HTML = function () {
        document.body.insertAdjacentHTML('afterbegin',
            `<input id="BloodWeb_Floating_Input" name="BloodWeb_Floating_Input" type="hidden" hidden />
        
        <div id="BloodWeb_OpenNav" style="display:none;">      
              
                <div id="Bloodweb_OpenNav_Title">
                    <p id="OpenNav_Title">BloodWebV${BWEB.Version} - OPENNAV</p>
                    <p id="Close_OpenNav" onclick="document.getElementById('BloodWeb_OpenNav').style.display='none'">X</p>    
                </div>
                
                <div class="Bloodweb_OpenNav_Section"> <!--Essentially a HR--></div>
            </div>

    <nav id="BloodWeb_Nav">
        
        <span id="Login_Replacement" >
            <p id="User_Name" name="User_Name" style="display: none">NULL</p>
            <button id="Login_Switch" onclick="document.getElementById('Login_Modal').style.display='block';">Login</button>
            <button id="Logout_Switch" onclick="logout()" style="display: none;">Logout</button>
        </span>         

        <button id="BloodWeb_NavSwitch" onclick="Toggle_Ele_Display(document.getElementById('BloodWeb_OpenNav'),'block',false)">&Congruent;</button>
       
        <!--<span id="Bloodweb_NavLogo"><img src="/i/BloodW.png"/><p>BloodWeb</p></span>-->
       
    </nav>
    <!-- The Modal -->
            <div id="Login_Modal" class="modal">
                <span onclick="document.getElementById('Login_Modal').style.display='none'" class="close"
                    title="Close Modal">&times;</span>
        
                <!-- Modal Content -->
                <form class="modal-content animate" action="/Login.php">
                    <div class="imgcontainer">
                        <img style="display:inline;" src="/i/BloodW.png" alt="Avatar" class="avatar">
                        <p >BloodWeb - Portal</p>
                     
                    </div>
        
                    <div class="container">
                        <label for="phoneNumber"><b> Phone-Number</b></label>
                        <input type="text" placeholder="ex. 0412000212" name="phoneNumber" required>
        
                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required >
        
                        <label>
                            <input type="checkbox" checked="checked" name="remember"> Remember me
                        </label>
                        <button type="submit">Login</button>

                         
        <div class="container" style="background-color:#f1f1f1">
                       <!-- <span class="psw">Forgot <a href="#">password?</a></span>
                        -->
                       <button type="button" onclick="document.getElementById('Login_Modal').style.display='none'"
                            class="cancelbtn">Cancel</button>
                    </div>
                    </div>
        
                    
                </form>
            </div>`
            /* 
            <!-- SignupSwitch & SignupModal
             
             <button id="SignUp_Switch" onclick="document.getElementById('Sign_Up_modal').style.display='block'">Sign Up</button>
             
             
             */
        );
    }
    Load_HTML();
}

const login = function (p) {
    LS_Name(p);
    let SetSwitchStatus = function () {
        let Priors = document.querySelectorAll('.Bloodweb_OpenNav_Section').length;

        document.getElementById('Login_Switch').style.display = "none";

        let t = ['User_Name', "Logout_Switch"];
        for (ele in t) { document.getElementById(t[ele]).style.display = ""; }
    }
    const Set_User = function () {
        document.getElementById("User_Name").innerText = UserSheet.LoggedInUser.firstname;

    }
    const Set_Styles = function () {
        const args = ['header', 'main'];
        for (ele in args) {
            if (document.querySelector(args[ele])) document.querySelector(args[ele]).className = "loggedIN";
        }
    }

    SetSwitchStatus(); Set_User(); Set_Styles();
}
const logout = function () {
    localStorage.removeItem('name');
    setTimeout(() => {
        window.location.reload();
    }, 20);
}



let x0 = function () {
    const args = ['header', 'main'];
    for (ele in args) { document.querySelector(args[ele]).style.backgroundColor = "blue"; }
}
function SetLinks(WD) {
    for (ele in WD) {
        let targ = createElement('a', { className: 'FFW', id: "FFW" + WD[(ele)][0], 'style': 'background-image:url(.' + WD[(ele)][2] + ');', href: WD[(ele)][1], innerText: WD[(ele)][0] });
        document.querySelector('main').append(targ);
    }
}
setTimeout(() => {

    function LoadDefaultNavs() {
        let x = BWEB.Nav_Settings.Elements;
        if (UserSheet.User == 't' ||x) {
            let a = ['Admin-Log', '/Hewers_Trust/TrustLog.php', ['/i/s3.png','s'],['fd','ts']];
            x.push(a);
        }
        else { console.log('nopre'); }
        for (let i =0; i<x.length; i++) { let e = x[i];   console.log(`nav ele= ${e}`)
            if (document.title.includes("BloodWeb.net")) { SetLinks([e]); }
           e.length>=4?BWEB.appendNavEle(e[0],e[1],e[2],e[3]):BWEB.appendNavEle(e[0],e[1]);
         
        }

    }


    const AUTO_LOGIN = function () {

        let l = LS_Name(); console.log(`Trying to login, name = ${l}`);
        if (l != '' && l != undefined) {
            UserSheet.userList.includes(l) ? login(l) : console.log(`Name "${l}" doesn't match available users`);
        }
        else { console.log('No name in local storage for login') }
    }
    let MS = document.title&&document.URL;
    if (!(MS).includes('Login')) {
        if (BWEB.live === false && !document.title.includes('TEST-SYS')) { setTimeout(() => { if (UserSheet.User === 'Jack' || UserSheet.User === 't') { return; } return BloodWeb.tools.DisplayMaintenenceLog(); }, 48); }
        loadLogin();
        BuildStats();
        AUTO_LOGIN(); LoadDefaultNavs();
        console.log('Not a login page');
    }
    else {console.log('Login Page, not appending elements');}
}, 25);


 