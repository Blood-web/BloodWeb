function log_test(arg:any): void{
  if(!arg) return console.error('Test_arr needs an argument to append');
  document.querySelector('#ts_results')!.innerHTML+=`<hr> ${arg}`||null;
}


/* Typescript > Javascript -- BloodWeb User Account */
console.log('%c Bloodweb.net - Typescript USER app is live!', 'background: #000; color: magenta; font-size: x-large');

const testing = true; // removable, will kill testing


//     REMOVE FROM DEPLOYMENT - Referenced by KeyFunctions  //
const setCookie=function(name:string,val:any,exdays=365){const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = `${name}=${val};${expires};path=/`;
}
const getCookie=function(name:any){
  let n = name+'=';
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i<ca.length; i++){ let c = ca[i];
      while(c.charAt(0)==' '){c = c.substring(1);}
      if(c.indexOf(n) == 0){return c.substring(n.length,c.length);}
  }
  return "";
}
//     **************************************************  //


//Keys
const user_keys: readonly string[] = [ "name", "id", "email", "phoneNumber", "birthday", "role", "subroles", "Diamonds", "items"];

interface User {
  name: string; // first + last
  id: number; //
  email: string;
  phoneNumber: string;
  birthday: Date;
  role: string;
  subroles:string;
  Diamonds:number;
  items:string;
}

class UserAccount {
  name: string;
  id: number;
  email: string;
  phoneNumber: string;
  birthday: Date;
  role: string;
  subroles:string;
  Diamonds:number;
  items:string;

  constructor(name: string, id: number,email:string, role: string, subroles:string,Diamonds:number,items:string, phoneNumber: string, birthday:Date) {
    this.name = name;
    this.id = id;
    this.role = role;
    this.subroles = subroles;
    this.Diamonds = Diamonds;
    this.items = items;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.birthday = birthday;
  }
}

// SetUser
let user_getArr,user_Arr: any[] = []; // cookie methods

user_getArr=user_keys.map(e=>`${getCookie(e)}`);

const user_test_credentials: any[]=["Murphy Jones", 301101,"test@b","WebMaster","BloodWeb_DevelopmentTeam",101,"claw axe pencilcase","0400 000 000",new Date('29/10/1995')||null];

// Set specific keys
function cache_login(credentials:any[]|null): void { 
  if(!credentials||credentials==null){
    log_test(" Credentials not passed, Updating Available Cookies ");
  }
  
} 

// SetLogin Dynamically sets login State
function Set_Login(credentials: any|null): void {let t:any; 
  
  if (credentials.length>=9 && credentials!=null){ // Creds passed - User logging in
    t=credentials;
    log_test('Set-login 25% - User passed Array... probably a login'); 
  } 
  else if(!credentials||credentials==null){ // Creds not passed to function
    if(getCookie('email')||getCookie('id')){ // Try Run Cached Login
      t=user_keys.map(e=>`${getCookie(e)}`); log_test('Set-login 25% - User Has Cookies... logging-in'); 
    } 
    else{ // No creds - No User cookie - Try Test -> why was this called??
      testing==true?(t=user_test_credentials&&log_test('Set-login 25% - Testing Available')):log_test("Set-Login 25% - No credentials available");
    }
  }

  if(t.length!=9){return console.error('Set_Login requires arguments or a user in cache');} // checks `t` has required len
  
  log_test('Set_Login - 50%');

  const user: User = new UserAccount(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]);
  
  console.log(`%cUser Added Succesfully`,"background: red; color: green; font-size: large");

  log_test(`user = ${user}  USERNAME=${user.name} email="${user.email}" items=${user.items} len=${t.length}`);
}

function main(): void{

if(!testing||testing!==true){ console.log("%c testing == false , skipping tests.. ", "background: #fff; color: blue;");}
else{Set_Login(user_test_credentials);}

log_test('Main - testing complete');

}



// RUNNING MAIN
log_test('Running main app -- APP.TS');
main();
log_test('Cycled -- APP.TS');



//const user: User = new UserAccount("Murphy Jones", 301101,"test@b","WebMaster","BloodWeb_DevelopmentTeam",101,"claw axe pencilcase","0400 000 000",new Date('29/10/1995'))||null;


