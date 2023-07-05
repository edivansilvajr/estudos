let btnOpenMenu = document.getElementById('iconBurger')
let btnCloseMenu = document.getElementById('closeMenu')
let sideBarMenu = document.getElementById('sideBar')

// Mouse events -----------------------------
btnOpenMenu.onclick = function (e) {
    e.stopPropagation()
    if (sideBarMenu.style.left != '0px') {
        sideBarMenu.style.left = '0px'
    }
}

btnCloseMenu.onclick = function (e) {
    e.stopPropagation()
    if (sideBarMenu.style.left == '0px') {
        sideBarMenu.style.left = '-250px'
    }
}

sideBarMenu.onmouseover = function (e) {
    e.stopPropagation()
    document.body.style.overflow = 'hidden'
}

sideBarMenu.onclick = function (e) {
    e.stopPropagation()
    sideBarMenu.style.left = '0px'
}


sideBarMenu.onmouseout = function () {
    document.body.style.overflowY = 'auto'
}

window.onscroll = function () {
    sideBarMenu.style.left = '-250px'
}

document.body.onclick = function () {
    if (sideBarMenu.style.left == '0px') {
        sideBarMenu.style.left = '-100vw'
    }
}

document.body.onmouseover = function () {
    document.body.style.overflowY = 'auto'
}

// touch events ---------------------------
btnOpenMenu.ontouchend = function (event) {
    event.stopPropagation()
    if (sideBarMenu.style.left != '0px') {
        sideBarMenu.style.left = '0px'
    }
}

btnCloseMenu.ontouchend = function (e) {
    e.stopPropagation()
    sideBarMenu.style.left = '-100vw'
    document.body.style.overflow = 'auto'
}

sideBarMenu.ontouchstart = function (e) {
    e.stopPropagation()
    document.body.style.overflow = 'hidden'
}

sideBarMenu.ontouchmove = function (e) {
    e.stopPropagation()
    document.body.style.overflow = 'hidden'
}

sideBarMenu.ontouchend = function (e) {
    e.stopPropagation()
    document.body.style.overflow = 'hidden'
}

document.body.ontouchend = function () {
    if (sideBarMenu.style.left == '0px') {
        sideBarMenu.style.left = '-100vw'
    }
    document.body.style.overflow = 'auto'
}

document.body.ontouchmove = function () {
    if (sideBarMenu.style.left == '0px') {
        sideBarMenu.style.left = '-100vw'
    }
    document.body.style.overflow = 'auto'
}


