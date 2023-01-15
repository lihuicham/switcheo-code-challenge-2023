const box = document.querySelector('.box');
const form = document.querySelector('.form');
const button = document.querySelector('input[name="pay-button"]'); 
const toast = document.querySelector('.toast');
const closeIcon = document.querySelector('.close');
const progress = document.querySelector('.progress');
const popup = document.querySelector('.popup');
const dismissButton = document.getElementById('dismiss-popup-button');

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

// ======== TOAST MESSAGE JS ========

button.addEventListener('click', () => {
    toast.classList.add('active');
    progress.classList.add('active');
    //popup.classList.add('active');

    setTimeout(() => {
        toast.classList.remove('active');
    }, 4000) //1s = 1000 ms (animation time for progress is 4s)

    setTimeout(() => {
        progress.classList.remove('active');
    }, 4300)

    setTimeout(() => {
        box.classList.remove('active');
        form.classList.remove('active');
        popup.classList.add('active');
    }, 5000)
});

closeIcon.addEventListener('click', () => {
    toast.classList.remove('active');

    setTimeout(() => {
        toast.classList.remove('active');
    }, 300)
})

// ======== SUCCESS POPUP JS ========
dismissButton.addEventListener('click', () => {
    popup.classList.remove('active');

    setTimeout(() => {
        location.reload();
    }, 500)
})

// ======== FORM VALIDATION JS ========

const eth = document.getElementById('eth');
const amount = document.getElementById('amount');
const otp = document.getElementById('otp');
let ethErrorMessage = document.querySelector('.eth-error-message');
let amountErrorMessage = document.querySelector('.amount-error-message');
let otpErrorMessage = document.querySelector('.otp-error-message');

button.addEventListener('click', e => {
    e.preventDefault();
    validateETH();
    validateAmount()
    validateOTP();
})

const validateETH = () => {
    const ethValue = eth.value.trim();
    if (ethValue === '') {
        ethErrorMessage.innerText = 'ETH address is required.';
    } else {
        ethErrorMessage = '';
    }
}

const validateAmount = () => {
    const amountValue = amount.value.trim();
    if (amountValue === '') {
        amountErrorMessage.innerText = 'Please enter the amount you wish to send.';
    } else {
        amountErrorMessage = '';
    }
}

const validateOTP = () => {
    const otpValue = otp.value.trim();
    if (otpValue === '') {
        otpErrorMessage.innerText = 'OTP value is required for authentication.';
    } else {
        otpErrorMessage = '';
    }
}
