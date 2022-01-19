/*
    Created by Amir

    USAGE:
        ...
        <base href="" >
        <link rel="stylesheet" href="javascripts/navigation/dist/navigation.css">
        ...

        <nav id="navigation">
        </nav>
        ...
        <script src="javascripts/navigation/navigation.js"></script>
    
    The element nav will be automatically filled.
*/

//This action will set the content of the navigation
createNavigation(
    'assets/brandtitle.png', [
        { name: 'Home',         link: 'index.html',             isActive: isAtCurrent('index.html') || isAtCurrent('') },
        { name: 'Categories',   link: 'pages/categories.html',  isActive: isAtCurrent('categories.html') },
        { name: 'Promos',       link: 'pages/promos.html',      isActive: isAtCurrent('promos.html') },
        { name: 'Support',      link: 'pages/support.html',     isActive: isAtCurrent('support.html') },
        { name: 'Log In',       link: 'pages/login.html',       isActive: isAtCurrent('login.html') }
    ]
);

//=================================================================================================
function onpressMenuIcon() {
    document.getElementById('menuicon').classList.toggle('change');
    document.getElementById('navigation-items').classList.toggle('hidden-nav');;  
}

/**
 * 
 * @param  brandIcon :string
 * @param {name, link, isActive} links 
 */
function createNavigation( brandIcon, links ) {
    let liLinksMobile = '';
    links.map((li) => {
        const temp = !li.isActive ?
            `<li class=""><a href="${li.link}">${li.name}</a></li>`:
            `<li class="nav-active">${li.name}</li>`;
        liLinksMobile += temp;
    });
    let liLinksDesktop = '';
    links.reverse();
    links.map((li) => {
        const temp = !li.isActive ?
            `<li class=""><a href="${li.link}">${li.name}</a></li>`:
            `<li class="nav-active">${li.name}</li>`;
        liLinksDesktop += temp;
    });
    const navs = `
        <div class="nav-container">
            <div id='menuicon' onclick="onpressMenuIcon()">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
            <div class='brand'>
                <img src="${brandIcon}" />
            </div>
            </div>
            <div id='navigation-items' class="hidden-nav" onclick="onpressMenuIcon()">
                <ul> ${liLinksMobile} </ul>
            </div>
            <div id="navigation-items-desktop">
                <ul> ${liLinksDesktop} </ul>
        </div>
    `;
    document.getElementById('navigation').innerHTML = navs;
}

function isAtCurrent(string1) {
    const cc = window.location.href.substr( window.location.href.lastIndexOf('/') + 1 );
    if(string1 == cc ) return true;
    return false;
}

const current = window.location.href.substr(
    window.location.href.lastIndexOf('/') + 1
);

