/* Local */

const LS_Name = function (s) {
    if (s == '' || s == undefined) return localStorage.getItem('name');
    else{localStorage.setItem('name', s);}
}

function allowDrop(event) { event.preventDefault(); }

// console

function log(l){console.log(l);}

// Numer
function randomNum(min = 0, max = 17) { return Math.floor(Math.random() * (max - min)) + min; }
function isNeg(x) { if (!isNaN(x) && x < 0) { return true; } }
function isEven(num) {if (!num || isNaN(num)) return console.error('Num required');
    return (num % 2 == 0) ? true : false;
}
function setRange(i, min, max) {
    if (i < min) i = min;
    else if (i > max) i = max;
    return i;
}
function inRange(num, min, max) { if (num <= max && num >= min) return true; }

function randomHex(bits) {
    if (!bits) { bits = 8; }
    let hexRes = ''; let hex = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < bits; i++) { hexRes += hex[(randomNum(0, 9))]; }
    return hexRes;
}

function createHexchain(hexlength) {
    if (!hexlength) { return console.error('Hex length not defined'); }
    let hlen = hexlength; let hexchain = [];
    for (let i = 0; i < hlen; i++) { hexchain.push("#" + randomHex()); }
    return hexchain;
}



//Date 
const weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
const CheckAge = function (DOB) {
    let today = new Date();
    let birthDate = new Date(DOB);
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDif = today.getMonth() - birthDate.getMonth();
    if (monthDif < 0 || (monthDif === 0 && today.getDate() < birthDate.getDate())) {
        age--; // Over declared age adjusted here 
    }
    return age;
}

function getDatearr() {
    let today = new Date();
    let currentDay = new Date(today.getFullYear() + "," + (today.getMonth() + 1) + ',' + today.getDate());
    return currentDay;
}

let timeDif = function (time) {
    let today = new Date();
    let iTime = time.split(':');
    let curTime = toString(today.getHours(), ":" + today.getMinutes() + ":", today.getSeconds());

    if (time > curTime) {
        return "Not >24hrs";
    }
    else { return "<24hrs" + (time - curTime) }
    let Dif = [
        second = curTime[2] - iTime[2],
        minute = curTime[1] - iTime[1],
        hour = curTime[0] - iTime[0]]

    if (Dif.second < 0) { Dif.minute - 1; Dif.second = 5555; }

    return "InputTIme:" + time + " curTime:" + curTime + "\n Dif:" + [hourDif, minuteDif, secondDif > 0 ? secondDif : 60 + secondDif];
}
function DateDif(date) {
    date.split('/'); let time = date[0] + date[1];
    let d1 = date.slice(9);
    let month = d1[3] + d1[4]; let day = d1[0] + d1[1];
    let year = 20 + d1[6] + d1[7];

    const date1 = new Date(year + ',' + month + ',' + day);
    const date2 = new Date();

    let DIfference = [(date1.getFullYear() - date2.getFullYear()), (date1.getMonth() - date2.getMonth()), (date1.getDay() - date2.getDay())];
    return "Y/M/D:" + DIfference;
}
let daysUntil = function (date) {
    const today = new Date();
    let diff = date - today; return Math.floor(diff / (1000 * 60 * 60 * 24));
}

    
// Check Page
let isSafari = /.*Version.*Safari.*/.test(navigator.userAgent);
let isPHP = function () {
    if (window.location.href.includes('php')) { return true; }
    return false;
}


// Page maninpulation

function ScrollHome(dir, target) {let WindowFrame = document.body.scrollTop || document.documentElement.scrollTop || window.scrollY; // Catch all devices
    if (WindowFrame > 0)  window.requestAnimationFrame(ScrollHome);
        window.scrollTo(0, WindowFrame - (WindowFrame / 5));
    }
}

let reloadPage = function () { window.location.reload(true); return false; }


//Edit Element display

const Toggle_Ele_Display = function (element, DisplayType, enforce) { let x = element; if (enforce === true || x.style.display == "none") { x.style.display = DisplayType; } else x.style.display = "none"; }
const CToggle_Ele = function (arr) { for (e in arr) { let a = arr[e]; Toggle_Ele_Display(a[0], a[1], a[2] ?? null) } }


// Styles and elements

let createElement = function (element, properties) {
    let el = document.createElement(element);
    for (var prop in properties) { el[prop] = properties[prop]; }
    return el;
}
let tNode = function (t) { return document.createTextNode(t); }
let BR = function () { return createElement('br'); }

function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

function createStyleRule(name, rules) { var style = createElement('style',{type:'text/css'});
    document.getElementsByTagName('head')[0].appendChild(style);
    if (!(style.sheet || {}).insertRule)
        (style.styleSheet || style.sheet).addRule(name, rules);
    else
        style.sheet.insertRule(name + "{" + rules + "}", 0);
}

//Tasklist
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

