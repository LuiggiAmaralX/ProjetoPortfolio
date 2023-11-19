function toggleNav() {
    var navigation = document.querySelector('.navigation ul');
    if (navigation.style.display === '' || navigation.style.display === 'flex') {
        navigation.style.display = 'none';
    } else {
        navigation.style.display = 'flex';
    }
}

function checkWidth() {
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    if (viewportWidth < 1200) {
        document.querySelector('.navigation ul').style.display = 'none';
    } else {
        document.querySelector('.navigation ul').style.display = 'flex';
    }
}

window.addEventListener('resize', checkWidth);
checkWidth();