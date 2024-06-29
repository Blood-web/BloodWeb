console.log(document.cookie);

const BloodWeb = { //₿
    
    
    Status:{ 
        live: false, // Set to (false) for debugging / Needs to adjust scripts and srcs based on status 
        Version: [`0.1.4`],//Requires Communal Footer
        BuildTypes: ['XRG', 'CRO', 'NNA', 'LUM'],
        Seed:'0xe7e66c7a6442779fc8ac137944bda5d5f4b10591',
        Page:{
            Active_Pages:['Home','/Web3','/Games','/Settings'],
            Redundant_Pages:['test'],
            firstView: getCookie('FirstView') || setCookie('FirstView',new Date()),
            lastView: setCookie('LastView',new Date())||getCookie('LastView'),
            Subheader_Active:true,
            darkmode: Boolean(getCookie('DarkMode')) || false,
            img:{keyword_tagging:true,
                },
        },

        TaskList:{
        },
     
    },

    References:{
        Key_Words:{ // get call fills arr
            get:function(s_arr){Import_File('http://www.bloodweb.net/Internal/Key_Words.js');},
            arr:[],
            sub_arr:[],
            Motto:`making technology accesible`,//`there's always something hidden under the surface, find it.`,

        },
        Tech:{
           get:Import_File('http://www.bloodweb.net/Internal/Technology.json'),
        },
        
        Social_Links:{
            facebook:null,
            instagram:null,
        },

    },


    functions: {
        OL: function (page) {
            let Type = 'Normal'; let title = document.title.toLocaleLowerCase();
            // Keys   
            function UpdateLastView(){setCookie('LastView',new Date().toLocaleDateString());} 
            //functions
            !(document.head.innerHTML.includes('BloodWeb_Styles.css'))?Import_File('CSS','/BloodWeb_Styles.css'):false;
            // Add BloodWeb CSS if !CSS //

            if(title.toLocaleLowerCase().includes('test'))return console.log('Probably a testing page');             
            // Kills probable test pages from OL
        
            ['MAIN', 'Games'].includes(page) ? SetLinks(BloodWeb.Pages[(page)]) : false;
            
            // Catches Maintainence or runs default 
            if(BloodWeb.Status.live!==true&&getCookie('sessionKey')!==BloodWeb.Status.Seed){return BloodWeb.functions.call.DisplayMaintenenceLog();}
            else if(Type == 'Normal') { //BloodWeb.functions.appendFixedLogo();
                User.f.isValidSession();
                
                BloodWeb.functions.call.appendHeader(); 
                BloodWeb.functions.call.appendLoginModal(); 
                BloodWeb.functions.call.append_HNav(); 
                BuildStats(); AUTO_LOGIN();
                LoadPageDefaults();	
                UpdateLastView();
                BloodWeb.functions.call.remove_rendundant_LoginControls();
                
                window.onscroll=function(){(!BloodWeb.Status.Page.Subheader_Active===true)?true:BloodWeb.functions.call.toggleSubHeader(true);}

                if(BloodWeb.Status.Page.img.keyword_tagging===true){
                    BloodWeb.References.Key_Words.get(); 
                    Tag_Images(BloodWeb.References.Key_Words.arr);
                }

                BloodWeb.Status.Page.darkmode===true?BloodWeb.functions.call.LD_Slider(true):false;
            }
        },

        call:{ //Static procedures, or one off functions true||false    
            /*Page Shifters*/
                /*LOGIN*/
            appendLoginModal: function (caze) { 
                document.body.insertAdjacentHTML('afterbegin', 
                `<!-- Login Modal -->
                    <dialog id="Login_Modal" class="modal" data-login-modal>
                        <span onclick="TeD(dQ('Login_Modal'),'none',true)" class="close"  title="Close Modal">&times;</span>
                        <!-- Modal Content -->
                        <form class="modal-content animate" action="/Login.php">
                            <div class="imgcontainer Shimmer">
                                <img style="display:inline;" src="/favicon.ico" alt="Avatar" class="avatar">
                                <p>BloodWeb - Portal</p>
                            </div>

                            <div class="container">
                                <label for="user_email"><b> Email </b></label>
                                <input type="email" placeholder="example@bloodweb.net" name="user_email" required>

                                <label for="psw"><b>Password</b></label>
                                <input type="password" placeholder="Enter Password" name="psw" required >

                                <label>
                                    <input type="checkbox" checked="checked" name="remember"> Remember me
                                </label>

                                <div class="container" style="background-color:#f1f1f1;">
                                    <!-- <span class="psw">Forgot <a href="#">password?</a></span> -->
                                    <button class="Portal_Submit" type="submit">Login</button>
                                    <button type="button" onclick="document.getElementById('Login_Modal').style.display='none'" class="cancelbtn">Cancel</button>
                                </div>
                            </div>
                        </form>
                    </dialog>`);
            },
            appendSignUpModal:function(){},
            remove_rendundant_LoginControls: function (){ const a=['Login', 'Signup'];
                if (!User.f.isLoggedIn()) { return TeD(dQ(`#Logout_Switch`), 'none', true);}
                else {for (let i = 0; i < a.length; i++) { let x = a[i]; TeD(dQ(`#${x}_Switch`), 'none', true) };
                        TeD(dQ('#User_Name'), 'block', true);
                    }
            },
                /* header */
            appendHeader:function(){
                document.body.insertAdjacentHTML('afterbegin',`<header id="B_HEAD">
                    <!--Title--> <div id="Header_Title" class="Shimmer">
                        <a id="Perma_NavHome" href="http://www.bloodweb.net"> <img id='BWML' src='/favicon.ico'/></a>
                        <div style="display:inline-block; vertical-align:bottom">
                            bloodWeb<i>V${BloodWeb.Status.Version}</i><hr style="margin:0; border:.4px solid darkred;"> 
                        </div> 
                        <hr class="MP0" style="margin-top:min(4px,1vh); border:1.6px solid crimson;"> 
                        <!--Motto--> <p id="Title_Motto">${BloodWeb.References.Key_Words.Motto}</p>
                    </div>
                    <!--SubHeader Switch--> <button class="BloodWeb_NavSwitch" id="NTO_SubHeader" onclick="BloodWeb.functions.call.toggleSubHeader()"><b id="SH_Switch" class="MP0"> &mapstoup; </b></button>    
                    <!--Nav Switch--> <button class="BloodWeb_NavSwitch" id="NTO_BWEB_OpenNav" onclick="TeD(dQ('#BloodWeb_OpenNav'),'block')"><i class="MP0">&Congruent;</i></button>
                    <!--SubHeader--> <div id="Sub_Header">

                        <hr class="MP0"/> 
                        <!--Hiddeable SubHeader--> <div id="Sub_Header_SubSection"> 
                            <hr class="MP0">
                            <!--Login--><span id="Login_Control">
                                <p id="User_Name" name="User_Name" style="display: none;">NULL</p>
                                <div id="LC_Controls_Wrapper">
                                    <button id="Login_Switch" onclick="TeD(dQ('#Login_Modal'),'block',true);">login</button>
                                    <button id="Signup_Switch" onclick="logout()" >sign up</button>
                                    <button id="Logout_Switch" onclick="logout()" >logout</button>
                                </div>
                            </span> 
                            <hr class="MP0"/> 
                        </div>
                    </div>
                </header>`);
            }, 
            toggleSubHeader: function (forceHide) { let targ = dQ('#Sub_Header_SubSection'); 
            BloodWeb.Status.Subheader_Active=!BloodWeb.Status.Subheader_Active;
                if(targ.style.display == 'none'&&forceHide!==true){ 
                    TeD(dQ("#Title_Motto"),'block',true); 
                    dQ('#SH_Switch').innerHTML = `&mapstoup;`; 
                        } 
                else if(targ.style.display=='block'){TeD(dQ("Title_Motto"),'none',true);
                    dQ('#SH_Switch').innerHTML = `&mapstodown;`;
                }
                
                if(!forceHide===true){TeD(targ, 'block');} 
            },
            
            append_HNav:function(){
                document.body.innerHTML +=
                    `<input id="BloodWeb_Floating_Input" name="BloodWeb_Floating_Input" type="hidden" hidden />
                    <div id="BloodWeb_OpenNav" style="display:none;">      
                        
                        <div id="Bloodweb_OpenNav_Title"> 
                            <p id="Close_OpenNav" onclick="document.getElementById('BloodWeb_OpenNav').style.display='none'">X</p>    
                        </div>                        
                        <div class="Bloodweb_OpenNav_Section"> <!--Essentially a MP0--></div>
                    </div>
        
                    <nav id="BloodWeb_Nav">
                        <a class="BloodWeb_NavSwitch" id="NTO_Home" href="/">&#8226; Home </a>		<!--//Home Icon ⌂-->        
                        <a class="BloodWeb_NavSwitch" id="NTO_Games" href="/Games/">&#8226; Games</a><!--//Game Icon /DICE/ &#9856;-->
                    </nav>`
            },
                /* body */
            DisplayMaintenenceLog: function () { 
                appendFixedLogo(
                    `<p style="text-align:center;"> &#128736; <span class="upperCase">this site is currently undergoing maintainence &#128736;<br> <span class="upperCase">W</span>e are working hard to get it up and running! Your patience is appreciated </p>`,
                    '',0," Please Wait.."
                    ) 
            },
            
            /* Style Shifters */
            LD_Slider: function(Set_Styles) {
                if(Set_Styles!=true){
                    BloodWeb.Status.Page.darkmode=!BloodWeb.Status.Page.darkmode;
                    setCookie('DarkMode',BloodWeb.Status.Page.darkmode);
            }
                let ele = ['body','header']
        
        for(i in ele) dQ(ele[i]).classList.toggle("dark-mode");
            },
        
            Nav_Switch: function (Target, css_Newclass, removePwr, clearClass) {
                if (!Target || !css_Newclass) { return console.error('No targ or class'); }
                if (removePwr === true) { Target.hasAttribute('href') ? Target.href = '#' : Target.onclick = 'javascript:void(0)' }
                if (clearClass === true) {
                    let t = document.querySelectorAll(`.${Target.className}`);
                    for (let i = 0; i < t.length; i++) {
                        if (t[i] && t[i].className.includes(css_Newclass)) { t[i].className = t[i].className.replace(css_NewClass, ''); }
                    }
                }
                Target.className += ` ${css_Newclass}`;
            },
        
        },
        request:{ // Dynamic Calls, functions with greater flexability
            /* Page Shifters */
            LoadUniPOP: function (Usereq, PHPmethod) {
                document.body.insertAdjacentElement('beforeend',`
                    <form method="post" action="/PHP/Update_User.php" id="Uni-POP"> 
                        <p> <labeL><input type="text" name="${PHPmethod}">${Usereq}</p><button
                    <button type="submit" name="${PHPmethod}">YES</button> <button>no</button>
                </form>`);
            },
        
        
            Create_Main_Links: function (WD) {
                if (document.body.querySelector('main') == null) { document.body.innerHTML += `<main style=""></main>`; }
                for (ele in WD) {
                    let targ = createElement('a', { className: 'FFW', id: "FFW" + WD[(ele)][0], 'style': 'background-image:url(.' + WD[(ele)][2] + ');', href: WD[(ele)][1], innerText: WD[(ele)][0] });
                    document.querySelector('main').append(targ);
                }
            },

        }
    },  

    Pages: { MAIN: [['Games', '/i/BM.png', '/Games']], Games: [], },

    Nav_Settings: {
        ToggleNavs: function (ele) {
            let allNavs = document.querySelectorAll('div[class*="Bloodweb_OpenNav_Section"]');
            if (!ele || ele == '') { for (e in allNavs) { TeD(allNavs[e], 'none', true); } }
            else { TeD(allNavs[ele], 'block'); }
        },
        TOGGLE: function (Page) {
            let target = document.getElementById(`NTO_${Page}`);
            target.href = 'javascript: void(0)'; console.log('disabling :' + Page);
            target.class += '';
        },
        Elements: [
            ['Hewers Trust', '/Hewers_Trust/index.php', '/i/Hewers.png'],
            ['Games', './Games', ['Bomber Field', '/BomberField/index.php',]],
        ],
    },

    addUserNav: function () {
        let S = ['User_Details', 'User_Settings'];

        let details = `<div class="UserNav_Section" id="UN_${S[0]}" onclick="TeD(document.querySelector('#UI_${S[0]}'),'block')"><p>User Details:<p>
                        <span id="UI_${S[0]}">
                      <p id="UNI_Name"></p>
                      <p id="UNI_Email"></p>
                      <p id="UNI_Password"></p>  
                      </span>
                      </div>
                      
                      <div class="UserNav_Section" id="UN_${S[1]}"><p>User Settings:<p>
                      <span id="UI_${S[1]}">
                      <p id="UN_LD_Slider"></p>  
                      </span>
                      </div>
                      `;
        document.querySelector('#BloodWeb_OpenNav').innerHTML += 'details'

    },
    updateUserNav: function () {
        if (User.LoggedInUser.length < 1) { return console.error('No user to update Nav'); }
        const LIU = User.LoggedInUser;
        let targs = ['Name', 'Email', 'Password'];
        let items = [LIU.first + ' ' + LIU.last, LIU.email, LIU.email];
        for (let i = 0; i < targs.length; i++) { document.querySelector(`#UN_${targs[i]}`).innerHTML = items[i]; }
    },

    appendNavEle: function (title, href, subEles, sublocations) {
        let Priors = document.querySelectorAll('div[class*="Bloodweb_OpenNav_Section"]').length || 0;
        let nav = document.querySelector('#BloodWeb_OpenNav');
        let x = createElement('span', { className: `Bloodweb_NavSelections${Priors}`, style: "display:none;" });


        nav.insertAdjacentHTML("beforeend",
            `<div onclick="TeD(document.querySelector('.Bloodweb_NavSelections${Priors}'),'block')" class="Bloodweb_OpenNav_Section${Priors}"><p><a href="${href}">${title}</a></p> </div>`);
        if (subEles && subEles != '' && sublocations) {
            for (e in subEles) {
                let subtext = subEles[e];
                console.log(`${subEles[e]} , ${sublocations}`)
                let a = createElement('p', { innerHTML: `<a href="${sublocations[e]}">${subtext}</a>` });
                a.addEventListener('click', function () { console.log(`calling appended nav func = ${sublocations}`); eval(sublocations); })
                x.append(a);
            }

            document.querySelector(`.Bloodweb_OpenNav_Section${Priors}`).append(x);
        }

    }
}
const R = { // element references and shorts /M = container
    //elements
    Header:{ M:dQ('#B_Head'),
        Title:{ M:dQ('#Header_Title'),
            Img:dQ('BWML'),
            Motto:dQ('#Title_Motto')
        },
    }
}
const User = {
    ID:{user:'',session:getCookie('sessionKey')||setCookie('sessionKey','Session_ID_0X'+randomHex(8))},
    Name:{first:getCookie(''),last:'',nickname:''},
    
    User: '', LoggedInUser: [],
    users: [],
    userList: [], Share_Total: 0,
    f: { 
        isLoggedIn: function () { return User.LoggedInUser.firstname ? true : false; }, 
        returnFullName: function(lowercase){if(!User.f.isLoggedIn()){return 'User not logged in';}
            const str = User.LoggedInUser.firstname+' '+User.LoggedInUser.lastname;
            if(lowercase===true){str.toLocaleLowerCase();}
            return str;
        },
        toggle_testSession:function(kill){ const t = 'sessionKey'; let k = BloodWeb.Status.Seed;
            // Date Matches > Keep Session || No match > set Null session
            return (getCookie(t)===k && getDatearr().toDateString() != new Date(getCookie('LastView')).toDateString()) || (kill===true)?setCookie(t,null):setCookie(t,k);
        },
        isValidSession:function(){
                function check_TestSession(){if(getCookie('sessionKey')==BloodWeb.Status.Seed&&new Date(getCookie('LastView')).toDateString()!==new Date().toDateString());{User.f.toggle_testSession(true); return false;}}
                function check_SignedInSession(){}
                
                check_TestSession();check_SignedInSession();return true;
        },
    },
    pushUsers: function (first, last, shares, fshares,/*token,*/ Diamonds, bombs, role, subroles, phone, email, age) {
        let a = { 'firstname': first, 'lastname': last, 'shares': shares, 'fshares': fshares, 'Diamonds': Diamonds, 'bombs': bombs, 'subroles': subroles, 'phoneNumber': phone, 'email': email, 'Role': role, 'age': age }
        User.users.push(a);
        User.userList.push(first); let x = LS_Name();
        first != 'Jack' ? User.Share_Total += shares : false;
        if (x === first) { User.LoggedInUser = a; this.User = first+' '+last; console.log(`Caught: name = ${LS_Name()} a = ${first} cd=${User.LoggedInUser.firstname}`); }
    },
    return_Name: function (name) { for (i in this.users) { if (this.users[i].firstname != name) continue; } return this.users[i]; },

    login:function (first,last,email) {
        LS_Name(p);
        setCookie('firstName',first);
        setCookie('lastName',last);
        setCookie('email',email)
        let SetSwitchStatus = function () {
            let Priors = document.querySelectorAll('.Bloodweb_OpenNav_Section').length;
            let t = ['User_Name', "Logout_Switch"];
            
            for (ele in t) { dQ(`#${t[ele]}`).style.display = ""; }
        }
        const Set_User = function () {
            document.getElementById("User_Name").innerText = User.LoggedInUser.firstname;
            
        }

        const Set_Styles = function () {
            const args = ['header', 'main'];
            for (ele in args) {
                if (document.querySelector(args[ele])) document.querySelector(args[ele]).className = "loggedIN";
            }
        }
        const Set_UserNav = function () {
    
        }
    
        SetSwitchStatus(); Set_User(); Set_Styles();
    },
    logout: function () {
        localStorage.removeItem('name');
        setTimeout(() => {
            window.location.reload();
        }, 20);
    },
}

function BuildStats() { let T = BloodWeb.Status;
    let overlay = createElement('div', { style: 'width:min-content; background-color:#fafafaa5; border:2px double #0a0a0a55;', innerHTML: `<button id="NSS_Switch" onclick="ToggleNerdStats()">StatsForNerds~</button` });
    currentDate = new Date();
    let dateString = currentDate.getUTCDate() + "/" + (currentDate.getUTCMonth() + 1) + "/" + currentDate.getFullYear();

    let types = ['Ver', 'Seed', 'Date'];
    let data = [
        `BloodWeb_PublicBuild_Ver${T.Version}&circledast;`,
        T.BuildTypes[randomNum(0,T.BuildTypes.length)] + T.Seed,
        "Last build date:" + weekDay[currentDate.getDay()] + " " + dateString
    ];

    const SetBloodWebStyleRules = function (params) {
        createStyleRule('#Uni-POP', 'position:absolute; z-index:4; width:100vw; height:100vh; margin:0 auto; padding:20%;');
        createStyleRule("a,button,input[type='submit']", "cursor:pointer;")
        createStyleRule('#NSS_Switch', 'display:block;font-size:x-small;color:blue; margin:0 auto; margin-left:1%; ');
        createStyleRule('.Nerd_Stats', 'display:none; max-width:fit-content;  margin:0 auto;margin-right:1%;  text-align:right; font-size:xx-small;');
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

function ToggleNerdStats() {
    let t = document.querySelectorAll('.Nerd_Stats');
    for (let i = 0; i < t.length; i++) { TeD(t[i], 'block'); }
}

const loadLogin = function () {
    console.log('Loading Login');
    let Load_HTML = function () {
        document.body.innerHTML +=
            `<input id="BloodWeb_Floating_Input" name="BloodWeb_Floating_Input" type="hidden" hidden />
        
        <div id="BloodWeb_OpenNav" style="display:none;">      
              
            <div id="Bloodweb_OpenNav_Title">
                 
                <p id="Close_OpenNav" onclick="document.getElementById('BloodWeb_OpenNav').style.display='none'">X</p>    
            </div>
                
                <div class="Bloodweb_OpenNav_Section"> <!--Essentially a MP0--></div>
            </div>

    

    <nav id="BloodWeb_Nav">
	<a class="BloodWeb_NavSwitch" id="NTO_Home" href="/">&#8226; Home </a>		<!--//Home Icon ⌂-->        
	<a class="BloodWeb_NavSwitch" id="NTO_Games" href="/Games/">&#8226; Games</a><!--//Game Icon /DICE/ &#9856;-->

      
        <!--<span id="Bloodweb_NavLogo"><img src="/i/BloodW.png"/><p>BloodWeb</p></span>-->
    
    </nav>`
    }
    Load_HTML();
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
function LoadPageDefaults() {

    let SetCurrentPage = function () {
        let doct = document.title; let Page = '';
        console.log('doct = ' + doct);
        if (doct.includes("BloodWeb.net")) { Page = "Home"; }
        if (doct.includes("Games")) { Page = "Games"; }
        if (Page != '') {
            BloodWeb.Status.Page.firstView === true ? setTimeout(() => { localStorage.setItem('FV', false); appendFixedLogo('<h1> LOADING...</h1>', 'min(65vh,65vw)', 4500, 'Thanks for your Patience, and welcome to the BloodWeb!'); }, 1) : false;
            return BloodWeb.functions.call.Nav_Switch(document.getElementById('NTO_' + Page), 'Selected_Switch', true, false);
        }
    }

    let LoadDefaultNavs = function () {
        let x = BloodWeb.Nav_Settings.Elements;
        if (User.User == 't' || x) {
            let a = ['Admin-Log', '/Hewers_Trust/TrustLog.php', ['/i/s3.png', 's'], ['fd', 'ts']];
            x.push(a);
        }
        for (let i = 0; i < x.length; i++) {
            let e = x[i];
            if (document.title.includes("BloodWeb.net")) { BloodWeb.functions.request.Create_Main_Links([e]); }
            e.length > 2 ? BloodWeb.appendNavEle(e[0], e[1], e[2], e[3]) : BloodWeb.appendNavEle(e[0], e[1]);
        }
    }
    SetCurrentPage(); LoadDefaultNavs();
}



const AUTO_LOGIN = function () {

    let l = LS_Name();
    if (l != '' && l != undefined) {
        User.userList.includes(l) ? login(l) : console.log(`Name "${l}" doesn't match available users`);
    }
    else { console.log('No name in local storage for login') }
}



setTimeout(() => {
    let MS = document.title && document.URL;

    BloodWeb.References.Key_Words.get();

    if (!(MS).includes('Login')) {
        if (BloodWeb.live === false && !document.title.includes('TEST-SYS')) { setTimeout(() => { if (User.User === 'Jack' || User.User === 't') { return; } return BloodWeb.tools.DisplayMaintenenceLog(); }, 48); }
        BloodWeb.functions.OL();

        console.log('Not a login page Running default seq');
        ScrollHome();
    }
    else { console.log('Login Page - IGNORE Defaults '); }
}, 125);


