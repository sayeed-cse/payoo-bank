const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', function (event) {
    event.preventDefault()

    const accountNumber = document.getElementById('account-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    const convertedPin = parseInt(pinNumber)

    if (accountNumber.length === 11) {
        if (convertedPin === 1234) {
            window.location.href = "./../main.html";
        }
        else {
            alert('pin not valid')
        }
    }
    else {
        alert('number not valid')
    }
    
})