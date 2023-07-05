let img = document.createElement('img')
let div = document.getElementById('icons')

onload = function() {
    if(innerWidth < 760) {
        img.src = '../imagens/icon-phone.png'
    } else if (innerWidth < 992) {
        img.src = '../imagens/icon-tablet.png'
    } else if(innerWidth < 1200) {
        
        img.src = '../imagens/icon-pc.png'
    } else {
        img.src = '../imagens/icon-tv.png'
    }
}




onresize = function() {
    if(innerWidth < 760) {
    img.src = '../imagens/icon-phone.png'
    } else if (innerWidth < 992) {
        img.src = '../imagens/icon-tablet.png'
    } else if(innerWidth < 1200) {
        img.src = '../imagens/icon-pc.png'
    } else {
        img.src = '../imagens/icon-tv.png'
    }
}



div.style.textAlign = 'center'
div.appendChild(img)


 

 

