const button = document.querySelector('input[name="pay-button"]'); 
const toast = document.querySelector('.toast');
const closeIcon = document.querySelector('.close');
const progress = document.querySelector('.progress');

// Button ripple effect code - but not working
button.addEventListener('click', function(e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    this.appendChild(ripples);

    setTimeout(() => {
        ripples.remove()
    }, 1000);
});


button.addEventListener('click', () => {
    toast.classList.add('active');
    progress.classList.add('active');

    setTimeout(() => {
        toast.classList.remove('active');
    }, 4000) //1s = 1000 ms (animation time for progress is 4s)

    setTimeout(() => {
        progress.classList.remove('active');
    }, 4300)
});

closeIcon.addEventListener('click', () => {
    toast.classList.remove('active');

    setTimeout(() => {
        toast.classList.remove('active');
    }, 300)
})
