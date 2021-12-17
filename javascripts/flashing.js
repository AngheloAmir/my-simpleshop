const flashingelement = document.getElementById('flashingjs');
var isFlashingElementShow = true;

setInterval(() => {
    if(isFlashingElementShow) {
        isFlashingElementShow = false;
        flashingelement.style.opacity = .2;
    }
    else {
        isFlashingElementShow = true;
        flashingelement.style.opacity = 1;
    }
}, 300);