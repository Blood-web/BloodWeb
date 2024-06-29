//####################################################################################//
//                          NAVIGATION TOOLS

    // Potential new Nav:
        // *Home             (Landing page)
        // *Profile          (Up to date info)
        // *About            (About me)
        // *Projects         (Things i made)
        // *Blog-Posts       (Bloodweb blog posts)
        // *Contact          (Detailed Link Tree)

SAMPLE_NAV=[
    ["🏠", "Home", "/index.html"],
    ['X', "Profile","/Profile/index.html"],
    ['🎋︎', 'Linktree', '/linktree.html'],
    ['📓', 'Projects', '/projects','socials:no'],
]

pagePositionInNav = 0;
navPositions = {
    name: 1, // "Home","About"
    icon: 0, // "⌂"
    ref: 2,  // http://www.bloodweb.net
    settings: 3, // console.log('do this')
};
class Navigation {
    constructor(navItems) {
        this.navItems = navItems || SAMPLE_NAV;
        this.currentPage = 'Home';
        this.pagePositionInNav = 0;
        navPositions = {
            name: 1, // "Home","About"
            icon: 0, // "⌂"
            ref: 2,  // http://www.bloodweb.net
            settings: 3, // console.log('do this')
        };
        this.findCurrentPage();
        console.log(`last_page: ${this.last_unique_page()}`);
        this.last_unique_page('set');
    }

    last_unique_page(type="get",content=document.referrer){ // Last Page loaded that is not this    
        if (type !== "set"){
            return localStorage.getItem("last_unique_page");
        }
        else{
            if (this.findCurrentPage() !== this.findCurrentPage(content)){
                localStorage.setItem("last_unique_page",content)
            }
            else{
                console.log(`Cannot set last_unique_page. Current Page "${this.findCurrentPage(this.currentPage)}" is the referrer`)
            }
        }
    }

    createElement(tag, attrs = {}) {
        const element = document.createElement(tag);
        for (const [key, value] of Object.entries(attrs)) {
            if (key in element) {
                element[key] = value;
            } else {
                element.setAttribute(key, value);
            }
        }
        return element;
    }

    findCurrentPage(page=window.location.href) {
        for (let i = this.navItems.length; i > 0; i--) {
            let x = this.navItems[i - 1];
            if (page.includes(x[2])) {
                //console.log('Page is assumed:', x[1]);
                pagePositionInNav = i - 1;
                this.currentPage = x[1];
                return this.currentPage;
            }
        }
        this.currentPage = this.navItems[0][1];
        //console.log(`FindCurrentPage could not figure out which page this is: assuming current_page "${this.currentPage}"`);
        return this.currentPage;
    }

    createNav() {
        this.addMainNav(this.navItems);
        this.addVerticalNav(this.navItems);
        this.toggleVerticalNav('close')
    }

    createReturn(label=` Return to ${this.findCurrentPage(this.last_unique_page())}`,href=this.last_unique_page()){
        let button = this.createElement('button',{id:'return_nav_button',innerHTML:`<a id="return_label" href="${href}"> <span style="vertical-align:middle; font-size:x-large;"><</span>${label} </a>`});
        document.body.prepend(button);
    }

    addMainNav(navPages) {
        let navSwitch = this.createElement('a', {
            id: 'Vertical_NavSwitch',
            className: 'Nav_Switch NavListitem',
            href: `javascript:NAV.toggleVerticalNav('open')`,
            innerHTML: "☰ Menu"
        });
    
        let navImg = this.createElement('img', {
            style: 'float:right;',
            id: "banner_img",
            src: "/favicon.ico",
            alt: "Favicon Image"
        });
    
        let mainNav = this.createElement('nav', { id: "Horizontal_NavBar", className: "Horizontal_NavBar" });
        mainNav.append(navImg, navSwitch);
    
        for (let i = navPages.length; i--;) {
            let n = navPages[i];
            let a = this.createElement('a', {
                className: "NavListitem",
                href: n[navPositions.ref],
                name: n[navPositions.name],
                innerHTML: n[navPositions.name]
            });
            mainNav.prepend(a);
        }
        document.body.insertBefore(mainNav, document.querySelector('header') ? document.querySelector('header').nextSibling : document.querySelector('main'));
    }

    addVerticalNav(navPages) {
        let nav = this.createElement('div', { id:'Vertical_NavBar', className: 'Vertical_NavBar' });
        for (let i = 0; i < navPages.length; i++) {
            let x = navPages[i];
            let li = this.createElement('li', { className: 'NavListitem' });
            let a = this.createElement('a', { href: x[navPositions.ref], innerHTML: `<p>${x[navPositions.name]}</p>` });
            if (x[navPositions.name] === this.findCurrentPage()) {
                li.id="NavListSelected"
                a.href = "#";
                a.innerHTML = "➤"+` ${x[navPositions.name]}`;
            }
            li.append(a);
            nav.append(li);
        }
        document.body.append(nav);
    }

    toggleVerticalNav(type) {
        if (!type) { return console.error('toggleVerticalNav needs a type(open/close)'); }
        type = type.toLowerCase();
        let nav = document.querySelector('#Vertical_NavBar');
        console.log(`toggling nav :${type}`);
        if (nav) {
            switch (type) {
                case 'close': nav.style.display = "none"; break;
                case 'open': nav.style.display = "block"; break;
            }
        }
    }

    attachNavListener() {
        // Horizontal Nav
        if (window === window.top && document.querySelector('nav') !== null) {
            console.log('Nav listener attached');
            window.addEventListener('scroll', function () {
                let header = document.querySelector('header');
                let nav = document.querySelector('nav');
                if (this.scrollY > header.clientHeight - header.clientHeight / 2) { nav.classList.add('sticky_nav'); }
                else { nav.classList.remove('sticky_nav'); }
            });
        } else {
            console.log('No Horizontal nav to attach listener to');
        }

        // Vertical Nav
        let vNav = document.querySelector('#Vertical_NavBar');
        let hNav = document.querySelector('#Horizontal_NavBar');
        let SelectedItem = document.querySelector('#NavListSelected')
        if (vNav) { window.addEventListener('click', (event) => { 
            const isClickInsideVerticalNavBar = vNav.contains(event.target);
                const isClickInsideHorizontalNavBar = hNav.contains(event.target);
                const isClickInsideNavListSelected = SelectedItem.contains(event.target);
                // Open the nav via the switch
                if (event.target.id=="Vertical_NavSwitch"||event.target.parentElement.id=="Vertical_NavSwitch"){this.toggleVerticalNav('open');}
                // Close the nav if current_page_is clicked or if nav is open and click is not inside 
                else if  ((isClickInsideVerticalNavBar && isClickInsideNavListSelected)
                    || (!isClickInsideVerticalNavBar && vNav.style.display !== 'none')) { 
                    this.toggleVerticalNav('close'); 
                    ScrollHome();
                }
            console.log('element has been clicked:', event.target ,` Element is inside: NavListSelected:${isClickInsideNavListSelected}  VerticalNav:${isClickInsideVerticalNavBar}`);
        
        })} 
        else { console.log('Vertical/Horizontal Navbar not found'); }
        
    }
}


//####################################################################################//
//                          STYLING TOOLS
class ColorShifter {
    constructor() {
        this.colors = { // GCS.GPV is used to access root CSS
        light_A: getComputedStyle(document.documentElement).getPropertyValue('--light-color-theme-A'),
        light_B: getComputedStyle(document.documentElement).getPropertyValue('--light-color-theme-B'),
        dark_A: 'black',
        dark_B: 'gray',
        };

        this.targets = settings.colorShifter?.targets||"body"; // Basic elements to be used
        this.hvt = settings.colorShifter?.hvt||"main"; // High value targets (rotates in reverse)
        this.alt_color_targets = settings.colorShifter?.alt_targets||null; // Render in different color
        this.timeout_targets = '.unicorns'; // Targets to toggle the 

        this.icons = ['☼' , '☽']; // light / dark icons  
        this.type = 'Light'; // default state
        this.mode = "a"; // Use alpha / beta colour mode
        this.deg = 70; // starting deg
        this.inc = 0.9; // how many deg to inc each interval
        this.attach_LD_switch = true;
        this.timer = null; // Initialize timer as null

        this.monitorTimeoutTargets();
        this.ColorShift(); // set default state
        // this.AttachLightDarkSwitcher();
    }

    inc_deg() { this.deg += this.inc;
        if (this.deg > 365) {this.deg = 0;}
    }

    startColorShift() {if (this.timer === null) {this.timer = setInterval(this.ColorShift.bind(this), 20);}}

    stopColorShift() { if (this.timer !== null) {clearInterval(this.timer); this.timer = null;}}

    toggleColorShift() {if (this.timer === null) {this.startColorShift();} else {this.stopColorShift();}}

    ColorShift() {
        const elementsList = [this.targets, this.hvt, this.alt_color_targets];
        const colorRef = "--" + this.type.toLowerCase() + "-color-theme-";
        let color = getComputedStyle(document.documentElement).getPropertyValue(colorRef + this.mode.toUpperCase());

        elementsList.forEach((selector, index) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, i) => {
            if (index === 2) { // Special handling for alt_color_targets
            color = this.mode !== "a"
                ? getComputedStyle(document.documentElement).getPropertyValue(colorRef + "A")
                : getComputedStyle(document.documentElement).getPropertyValue(colorRef + "B");
            }
            const deg = (index === 1 && i >= 0) ? this.deg : -this.deg;
            element.style.background = `linear-gradient(${deg}deg, ${color})`;
        });
        });
        this.inc_deg();
    }

    AttachLightDarkSwitcher() {
        if (this.attach_LD_switch === true) {
        let slider = document.createElement('span');
        slider.id = 'LD-slider';
        slider.className = this.type+'-slider';
        slider.innerHTML = `<div id="LD-icon" class="${this.type}-icon"></div>`;
        document.body.prepend(slider);
        document.body.classList.add(`${this.type}-Body`);
        }
    }

    monitorTimeoutTargets() { // toggle the animation when timeout targets clicked
        const targets = document.querySelectorAll(this.timeout_targets);
        targets.forEach(target => {
        target.addEventListener('click', () => {
            this.toggleColorShift();
        });
        });
    }

}
// Initialise the color shifter

// Uses initialised class


//           Socials

class socials {
    constructor(userSettings = {}) {
        this.settings = {

            ...userSettings,
            link_settings_position:3, // the position in links that holds settings (such as footer:no)
        };

        this.meta = {
            name: 'Jack Ewers',
            birthday: '10-29-1995', // American format
            handle:"@the_guy_with_the_holes",
            img:'i/web-ready/image_1.jpeg'
        };

        this.links = [
            ['Jackewers.com', '/', 'http://www.jackewers.com/favicon.ico', 'footer:no'],
            ['+61 479 000 429', 'tel:+61479000429', '/i/Icons/Phone.png'],
            ['webmail@JackEwers.com', 'mailto:webmaster@jackewers.com', '/i/Icons/Mail.png'],
            ['LinkedIn', 'https://www.linkedin.com/in/jack-ewers-14a155212/', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAZlBMVEUAfrv///8AerkAcLUpgbzE2urI2OnR4u4Adbfs9PlUksUAeLgAbbPN3+30+PuQt9fk7vVpoMtHjsK0z+RAhr8AZbC+1ejb6PIAarKXvdqFs9Z9rtNspc1Xm8ktisGlxt+AqdBjmMfy32DQAAAFJElEQVR4nO2d2ZKjIBRAEckEJcGFjlsW0///k6OxZ5JOFOwBK1znnpepmipbTi67LCQYaAQBi2i+JMjwz5G/O0U28OODjEzou9NjB03kXxnFoMsw9UemzAEXmAGRl4OMbEAXmAHeyJvMHnxcesS+l5GnFQSmC81JdjLp7t3pcMMu7WSSVQSmC03SyayixPSIgKSHdyfCFYeUqPDdiXBFqMgaGpkB3pDzesrMmVyAd8vu0Mu7U4AgCBCo6KArqP06ERZ/ZlkW54TDbppoeLnWaptGUVTuVZJRwN0GzpJNFNwp1UlAjU542gdPRMUFZHCoaOWzS0d6AjhCFcOU1Cuyqd6dtp9Cp1z6+WlwsWknXYIA2LyOOGpcggjU+IHmkU4m+AVJhusyWR8aSJ9CmN4lCAr27iTOhtcmmQhOHXAYay2/U8Pp1hhdggLKLAI/mWXKGEiFFhrqsh6ZAclnYWGWCa5AZHYvPf8xGSDV2bpk1pTN5lQAEZQKYFVVM6VmmQLMKKDSDwB6aiDlf1ZHE0qR6eAmGQUlk3WINQ3OKNOXGgXIpbM56YY0aQynxPQwTUaTULoyf6Bsuk8DqcAMTE7PQpsCvCFYMlZuyk+ALqRfALl9cWkZrLJ/h4bn9JuK+oAZlgFRkXobyZ6oOPEdoIZ/lLCq6OVyEYcQclQeoAJ6SBAEQZD/DkopYezjC8b6/4DZnFFB8vhUq66vdBvvReVGNf06sCVWGt0WzE0y9gNqn3h6gNP42r52yQO5ba8xcd5tijMd51cbdtY98G3+k9OsLSfHsWV7ZW6X9jOVaoheZ2doXmgeKB9G2kKcVDqpcotPkTCX0WEb7et+vfx0dGQg95C8+2Ydnivz5K/cH7m7umApGcoTfVT+PuFwHLiQjDD83UfSsyubZWT4xZzDHjg6qgcWkeHnn6h01G5slpARMz7IPds4yWkLyOjX403ZuOgPuJcRR/PqohFc7CZzLlNlPyr79yczexvXMs3HdP9Fz9Z+a7xrmXrG0oIJWu9k9v9UYG5E1hnNsYwVynY9qE8yge1neq9kbEPjlUzwaRcav2RqKxfPZCK7fOaXTPBpNez0TMau4fRMRlq1m57JBFaFxjcZq0UhC8ukG9WqYju/w7ax2ea2nIzc1vmu2oUdVcWacp5QarMDcSkZucnC8F41UX7I5sXHQ5my4c+Zn4tkzhiUWLQ0y8hs8rG5I3GcMclpcxjLIjKbielwejTHxqY6W0Jm+zH161LzoNpmPnABGTndkRcX4y/R+iWj68eHo+v0HrE5Wsq9TKldcUtNM1E2raZ7mURbHRl3uex9kkn1sxIiN+Qzr2RM+4d3hrbGKxlT1RpOn6XgnUxkWqTODR88fJIx7uqiORyZjfGNhi07PskUxjbPsNPdJxlzA17pqzOfZMxdq52+NvRIRpo/Gxv2IPskYz7o1rDVHWVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQZg0yKtIgX5cp03yjeSA1n4UTKql7pXlhtIY81pH/9Anz3VvU8EabTfRUz0+fsH+lhQuCIKsGzJ1LRuiFjJy4ChR6Ji7Op/MD3hCbzcJ+ESoSHd6dCFccImJ1kINP0E4F0LVrenjdyaQrKTRh2slIeFcvjcGPspMJtqsoNLQb4ZJZY1n/4f2BFf3VzGUM3obH/XkVt3umCwY8p33dxjZcml1Dlxnuyvy6ATwBbUOTweI3D+SEwl4CpEIAAAAASUVORK5CYII='],
            ['Github', 'https://github.com/The-Guy-With-the-Holes', 'https://github.com/favicon.ico'],
            ['Doulingo', 'https://www.duolingo.com/profile/Spike.edu', 'https://d35aaqx5ub95lt.cloudfront.net/favicon.ico'],
            ['Crypto.com', 'https://crypto.com/nft/profile/spikedeathcore?tab=collectibles', 'https://crypto.com/__assets/favicon-32x32.png?v=0f6f06777a5d4bc338bfeca412628e1c']
        ];
        
        this.has_settings=function(){SAMPLE_NAV[pagePositionInNav][navPositions.settings]?true:false;}
        // Create Footer
        if (this.settings.createFooter&&(this.has_settings()&&!SAMPLE_NAV[pagePositionInNav][navPositions.settings].includes('socials:no'))) { this.createFooter(); }
        // Create Linktree
        if (this.settings.createLinkTree && this.settings.createLinkTree === true) { this.createLinkTree(userSettings.user); }
    }


    createLinkTree() {
        if (dQ('#AML_container')){return console.error('AML_container already exists.')}
        const main = createElement('main', { id: 'AML_container', className:'full_size' });

        const make_title = () => {
            // Items to use in title
            const img_href = this.settings.linktree.img.href ?? 'sample_img.png'
            const img_radius = this.settings.linktree.img.radius ?? "5%"
            // If Handle is not defined, use default, else use '@'$handle
            const handle = (this.settings?.linktree?.handle && this.settings.linktree.handle.includes('@') ? this.settings.linktree.handle : `@${this.settings?.linktree?.handle ?? 'your_handle'}`);
            const color = this.settings.linktree.font.color ?? 'black';

            const header = createElement('header', { innerHTML: `<img src="${img_href}" style="border-radius:${img_radius}; color:${color} font-size:var(--font-${handle.length > 10 ? '' : 'X'}L);"><h1>${handle}</h1>` });
            const shareBtn = `
            <button id="shareBtn" onclick="document.getElementById('shareModal').style.display='block'" style="background-image:url(/i/Icons/share.png)"></button>
            <div id="shareModal" style="display: none; position: fixed; z-index: 1; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.4);">
                <div style="background-color: #fefefe; margin: 15% auto; padding: 20px; border: 1px solid #888; width: 80%;">
                    <h2 style="text-align: center;">Support me by sharing this page:</h2>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fjackewers.com%2Flinktree.html&quote=${encodeURIComponent('Look at this page: Jacks links..')}" target="_blank" style="display: block; margin-bottom: 10px;">
                        <img src="https://www.facebook.com/favicon.ico" alt="Facebook" width="16" height="16" style="vertical-align: middle;"> Facebook
                    </a>
                    <a href="https://reddit.com/submit?url=https%3A%2F%2Fjackewers.com%2Flinktree.html&title=Jacks%20links.." target="_blank" style="display: block; margin-bottom: 10px;">
                        <img src="https://www.reddit.com/favicon.ico" alt="Reddit" width="16" height="16" style="vertical-align: middle;"> Reddit
                    </a>
                    <a href="https://twitter.com/intent/tweet?text=Jacks%20links..&url=https%3A%2F%2Fjackewers.com%2Flinktree.html" target="_blank" style="display: block; margin-bottom: 10px;">
                        <img src="https://www.twitter.com/favicon.ico" alt="Twitter" width="16" height="16" style="vertical-align: middle;"> Twitter
                    </a>
                    <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fjackewers.com%2Flinktree.html&title=Jacks%20links.." target="_blank" style="display: block; margin-bottom: 10px;">
                        <img src="https://content.linkedin.com/content/dam/me/brand/en-us/brand-home/logos/In-Blue-Logo.png.original.png" alt="LinkedIn" width="16" height="16" style="vertical-align: middle;"> LinkedIn
                    </a>
    
                    <a href="https://www.tiktok.com/share?url=https%3A%2F%2Fjackewers.com%2Flinktree.html" target="_blank" style="display: block; margin-bottom: 10px;">
                        <img src="https://www.tiktok.com/favicon.ico" alt="TikTok" width="16" height="16" style="vertical-align: middle;"> TikTok
                    </a>
                    <a href="https://mastodon.social/share?text=Jacks%20links..&url=https%3A%2F%2Fjackewers.com%2Flinktree.html" target="_blank" style="display: block; margin-bottom: 10px;">
                        <img src="https://mastodon.social/favicon.ico" alt="Mastodon" width="16" height="16" style="vertical-align: middle;"> Mastodon
                    </a>
                    <!-- Add more platforms here -->
                    <button id="closeBtn" style="background-color: #f44336; color: white; padding: 10px 20px; border: none; cursor: pointer; margin-top: 10px;">Close</button>
                </div>
            </div>
            `;
            main.innerHTML=shareBtn;
            main.append(header);    
            document.body.append(main);
        };

        const make_links = () => {
            // Link styles
            let rounded = this.settings.linktree.links.rounded ?? '5%';
            let link_color = this.settings.linktree.links.color ?? 'black';

            this.links.forEach(link => {
                const linkElement = createElement('div', {
                    className: 'AML_link',
                    innerHTML: `<a href="${link[1]}">${link[0]}</a>`,
                    style: `background-image:url(${link[2]}); 
                    border-radius:${rounded == true ? '90px': rounded};
                    font-size: var(--font-L);
                    background-color:${link_color}

                    `
                });
                main.append(linkElement);
            });
        }

        const make_footer = () => {
            const footer = createElement('footer', {innerHTML:`<p>${this.settings.foot_note ? this.settings.foot_note : 'Bloodweb.net'}</p><img src="./BloodW.png">`});
            main.append(footer);
        };

        const attach_event_listener = () => {
            const modal = document.getElementById('shareModal');
            
            document.addEventListener('click', function(event) {
                if (event.target.id === 'shareBtn') { modal.style.display = 'block';}
                else if ( modal.style.display=='block') {
                    if (['closeBtn','shareModal'].includes(event.target.id)) {
                        modal.style.display = 'none';
                    }
                    
                }
                console.log(`click event:${event.target}, event.target.id:${event.target.id} modal.style.display:${modal.style.display}`);
            });
        }

        make_title();
        make_links();
        make_footer();
        attach_event_listener()
    }


    createFooter() {
        // console.log(`creatingFooter ${this.settings.foot_note?true:false}`)
        const footerSubContainer = createElement('div', { className: `${this.settings.type === "balls" ? 'Horizontal_Socials' : 'Vertical_Socials'} Socials_Container` });
 
        for (let i = 0; i < this.links.length; i++) { const x = this.links[i];
            if (x[this.settings.link_settings_position] && x[this.settings.link_settings_position].includes('footer:no')) { continue; }
            let container, containerContent;
            container = createElement('div', { className: `balls${i % 2 === 0 ? 'x' : 'y'} Rotern` });
            containerContent = createElement('a', { href: x[1], target: 'blank_', innerHTML: `<img src="${x[2]}" class="balls" alt="${x[0]} link"> ${this.settings.type === "balls" && x[2] ? '' : `<p>${x[0]}</p>`}` });
            container.append(containerContent);
            footerSubContainer.append(container);
        }
 
        // Ignore branding status by passing a custom footer
        if (this.settings.branding) {
            const bloodworksContainer = createElement('p', {id:'foot_note',
            // Pass branding positions,else top right assumed 
            style:`${this.settings.branding.position?.includes('bottom')?'bottom':'top'}:0; ${this.settings.branding.position?.includes('left')?'left':'right'}:0;`,
                innerHTML: this.settings.branding.foot_note?this.settings.branding.foot_note:`<p style=" margin:0 min(2vw,16px)">Powered by <a href="http://www.bloodweb.net">Bloodweb.net<img src="/BloodW.png"></img></a></p>`
            });
            footerSubContainer.append(bloodworksContainer);
        }
        document.body.append(footerSubContainer);
    }

}

// Usage
const placeholderSettings = {
    createNav:true,
    createFooter: false,
    createLinkTree: false,
    LD_slider:true,


    type: 'balls',
    

    colorShifter:{
        targets:"header,.ColorShifter,#about-projects",
        hvt:"main,footer,.Socials_Container",
        alt_targets:'body,.Vertical_NavBar',
    },

    branding:{
        init:true,
        branding_position:'top right',
        link_settings_position: 3,
    },

    /*return:{
        ref:document.referer,
        label:'Return to previous page'
    }, */

    link_settings_position: 3,
};



// document.addEventListener('DOMContentLoaded',function(){

    const Socials = new socials(typeof userSettings !== 'undefined' ? userSettings : placeholderSettings);
    let settings = Socials.settings;
    
    console.log('settings:',settings)
    if (!Socials.links){ console.error('ERROR, SOCIAL LINKS NOT DEFINED'); }
    
    // ## Make socials elements ## //
    const NAV = new Navigation();
    if (settings.createNav === true){
        NAV.createNav();
        NAV.attachNavListener();
    }
    if (settings.return){
        ref=settings.return.ref??NAV.findCurrentPage(document.referrer);
        console.log(`Making_return_label ref:${ref} document.referrer:${NAV.findCurrentPage(document.referrer)}`,this)
        NAV.createReturn(settings.return?.label,settings.return?.ref)
    }

    settings.createLinkTree==true?Socials.createLinkTree(['i/web-ready/image_1.jpeg','@the_guy_with_the_holes']):null; 
    settings.createFooter==true?Socials.createFooter():null;  
    
        const colorShifter = new ColorShifter();

        if (settings.LD_slider==true){
            colorShifter.AttachLightDarkSwitcher()
            let ld_slider_switch = document.getElementById('LD-slider');
            function LDswitch() {
                let Switch = document.getElementById('LD-icon');  
                type = document.body.classList.contains('Light-Body') ? "Dark" : "Light";
                colorShifter.type = type;
                ld_slider_switch.setAttribute('class', type + '-slider');
                Switch.setAttribute('class', type + '-icon');
                document.body.setAttribute('class', type + '-Body');
                colorShifter.ColorShift()
            }
                ld_slider_switch.onclick = LDswitch;

        }
        colorShifter.ColorShift();// add style to new elements
//});