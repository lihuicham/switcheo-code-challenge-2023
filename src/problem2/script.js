const box = document.querySelector('.box');
const form = document.querySelector('.form');
const button = document.querySelector('input[name="pay-button"]'); 
const toast = document.querySelector('.toast');
const closeIcon = document.querySelector('.close');
const progress = document.querySelector('.progress');
const popup = document.querySelector('.popup');
const dismissButton = document.getElementById('dismiss-popup-button');

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
let ethValue = eth.value.trim();
let amountValue = amount.value.trim();
let otpValue = otp.value.trim();

const validateETH = () => {
    ethValue = eth.value.trim();
    if (ethValue === '') {
        ethErrorMessage.innerText = 'ETH address is required.';
        return false;
    } else {
        ethErrorMessage.innerText = '';
    }
}

const validateAmount = () => {
    amountValue = amount.value.trim();
    if (amountValue === '') {
        amountErrorMessage.innerText = 'Please enter the amount you wish to send.';
        return false;
    } else if (!/^[0-9]+$/.test(amountValue)){
        amountErrorMessage.innerText = 'Whole numbers only, no decimals.';
        return false;
    } else {
        amountErrorMessage.innerText = '';
    }


}

const validateOTP = () => {
    otpValue = otp.value.trim();
    if (otpValue === '') {
        otpErrorMessage.innerText = 'OTP value is required for authentication.';
        return false;
    } else {
        otpErrorMessage.innerText = '';
    }
}

function validation() {
    const ethBoolean = validateETH();
    const amountBoolean = validateAmount();
    const otpBoolean = validateOTP();

    if (ethBoolean === false || amountBoolean === false || otpBoolean === false) {
        return false;
    } else {
        form.submit();

        // ======== TOAST MESSAGE JS ========
        toast.classList.add('active');
        progress.classList.add('active');

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
    }
}
