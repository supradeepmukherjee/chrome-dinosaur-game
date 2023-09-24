s = 0
jumpedSuccess = true
bgm = new Audio('music.mp3')

over_ = new Audio('gameover.mp3')
// bgm.play()
d = document.querySelector('.dino')
document.onkeydown = (e) => {
    if (e.keyCode == 32) {
        d.classList.add('animatedino');
        setTimeout(() => {
            d.classList.remove('animatedino')
        }, 600);
    }
    if (e.keyCode == 39) {
        dx = parseInt(window.getComputedStyle(d, null).getPropertyValue('left'))
        d.style.left = dx + 112 + 'px'
    }
    if (e.keyCode == 37) {
        dx = parseInt(window.getComputedStyle(d, null).getPropertyValue('left'))
        d.style.left = dx - 112 + 'px'
    }
}
over = document.querySelector('.over')
obs = document.querySelector('.obstacle')
setInterval(() => {
    dx = parseInt(window.getComputedStyle(d, null).getPropertyValue('left'))
    dy = parseInt(window.getComputedStyle(d, null).getPropertyValue('bottom'))
    ox = parseInt(window.getComputedStyle(obs, null).getPropertyValue('left'))
    oy = parseInt(window.getComputedStyle(obs, null).getPropertyValue('bottom'))
    diffx = Math.abs(ox - dx)
    diffy = Math.abs(dy - oy)
    if (diffx < 73 && diffy < 52) {
        over.style.visibility = 'visible';
        obs.classList.remove('animateobstacle');
        // over_.play()
        bgm.pause()
        setTimeout(() => {
            over_.pause()
        }, 1000);
    }
    else if (diffx < 145 && jumpedSuccess) {
        s += 1;
        updatescore(s);
        jumpedSuccess = false
        setTimeout(() => {
            jumpedSuccess = true
        }, 1000);
        setTimeout(() => {
            a = parseFloat(window.getComputedStyle(obs, null).getPropertyValue('animation-duration'))
            increase = a - 0.001
            obs.style.animationDuration = increase + 's';
        }, 500);
    }
}, 100);

updatescore = (s) => {
    score.innerHTML = 'Your Score: ' + (s - 1)
}