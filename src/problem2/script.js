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

const amount = document.getElementById('amount');
const otp = document.getElementById('otp');
let amountErrorMessage = document.querySelector('.amount-error-message');
let otpErrorMessage = document.querySelector('.otp-error-message');
let amountValue = amount.value.trim();
let otpValue = otp.value.trim();

const validateAmount = () => {
    amountValue = amount.value.trim();
    if (!/^[0-9]+$/.test(amountValue)){
        amountErrorMessage.innerText = 'Whole numbers only, no decimals.';
        return false;
    } else {
        amountErrorMessage.innerText = '';
    }


}

const validateOTP = () => {
    otpValue = otp.value.trim();
    if (otpValue.length < 6 || otpValue.length > 6) {
        otpErrorMessage.innerText = 'OTP value must be 6-digits long.';
        return false;
    } else {
        otpErrorMessage.innerText = '';
    }
}


form.addEventListener('submit', (event) => {

    event.preventDefault();
    const amountBoolean = validateAmount();
    const otpBoolean = validateOTP();

    if (amountBoolean === false || otpBoolean === false) {
        return false;
    } else {
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
})



