document.getElementById('cashout-box').addEventListener('click', function () {
    setOptionsBoxStyle('cashout-box');

    removeAllSections()
    const cashOutSection = document.getElementById('cashOut-section');
    cashOutSection.style.display = 'block';
})

document.getElementById('withdraw-money')
    .addEventListener('click', function () {

        const agentNumber = getInputFieldValue('agent-number');
        const cashoutAmount = getInputFieldValueNum('cashout-amount');
        const pinCashOut = getInputFieldValueNum('pin-cashout');

        if (agentNumber.length === 11) {
            if (cashoutAmount >= 0) {
                if (pinCashOut >= 4) {
                    // getting main balance
                    let mainBalanceInNum = getTextElValueInNum('main-balance');
                    

                    //adding amount with main balance
                    mainBalanceInNum = mainBalanceInNum - cashoutAmount;
                    document.getElementById('main-balance').innerText = mainBalanceInNum;


                    // adding money to transaction to show.
                    const transactionType = 'Withdraw Money'
                    const transactionCard = document.getElementById('transaction-card');
                    transactionCard.innerHTML += `
                  <div class="card-body  bg-base-100 ">
                      <p class="text-lg">Transaction Successfully done! ${transactionType} to acc no: ${agentNumber}. Amount : ${cashoutAmount} BDT. via DBBl.</p>
                  </div>
                  `;
                    alert('Money withdrawed successfully');
                }
                else {
                    alert('pin length should be more than 4 digit');
                }
            }
            else {
                alert('amount should be more than one taka');
            }
        }
        else {
            alert('wrong agent number');
        }

    })