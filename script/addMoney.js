document.getElementById('add-money-box').addEventListener('click', function () {

    setOptionsBoxStyle('add-money-box');

    removeAllSections()
    const addMoneySection = document.getElementById('addMoney-section');
    addMoneySection.style.display = 'block';

});


document.getElementById('add-money').addEventListener('click', function (e) {
    e.preventDefault();
    const bankEl = document.getElementById('select-bank-add');
    const bank = bankEl.value;

    const accountNumber = getInputFieldValue('add-account-input');
    const amount = getInputFieldValueNum('add-amount');

    const pin = getInputFieldValueNum('pin');

    if (pin === 1234) {
        if (accountNumber.length === 11) {
            if (amount > 0) {
                // updating total balance
                // getting main balance
                let mainBalanceInNum = getTextElValueInNum('main-balance');
                console.log(mainBalanceInNum)

                //adding amount with main balance
                mainBalanceInNum = mainBalanceInNum + amount;
                document.getElementById('main-balance').innerText = mainBalanceInNum;


                // adding money to transaction to show.
                const transactionType = 'Added Money'
                const transactionCard = document.getElementById('transaction-card');
                transactionCard.innerHTML += `
                <div class="card-body  bg-base-100 ">
                    <p class="text-lg">Transaction Successfully done! ${transactionType} to acc no: ${accountNumber}. Amount : ${amount} BDT. via ${bank}.</p>
                </div>
                `;
                alert('Money added successfully');
            }
            else {
                console.log('please enter some amount');
            }
        }
        else {
            alert("Account number's length should be 11 digit");
        }
    }

    else {
        alert('wrong pin');
    }
});
