function removeAllSections() {
    const addMoneySection = document.getElementById('addMoney-section');
    addMoneySection.style.display = 'none';

    const cashOutSection = document.getElementById('cashOut-section');
    cashOutSection.style.display = 'none';

    const transferSection = document.getElementById('Transfer-section');
    transferSection.style.display = 'none';

    const getBonusSection = document.getElementById('getBonus-section');
    getBonusSection.style.display = 'none';

    const payBillSection = document.getElementById('pay-bill-section');
    payBillSection.style.display = 'none';

    const transactionSection = document.getElementById('transaction-section');
    transactionSection.style.display = 'none';
}
removeAllSections();


function setOptionsBoxStyle(id) {
    const boxes = document.getElementsByClassName('box');
    for (const box of boxes) {
        const boxId = box.getAttribute('id');
        if (boxId == id) {
            document.getElementById(boxId).style.borderColor = 'green';
            document.getElementById(boxId).style.color = 'green';
        }
        else {
            document.getElementById(boxId).style.borderColor = 'black';
            document.getElementById(boxId).style.color = 'black';
        }
    }
}

// get input field value in number

function getInputFieldValueNum(id) {
    const elementById = document.getElementById(id);

    const elementValue = elementById.value;
    const valueInNumber = parseFloat(elementValue);
    return valueInNumber;
}

// get input field value
function getInputFieldValue(id) {
    const elementById = document.getElementById(id);

    const elementValue = elementById.value;
    return elementValue;
}

// get element text value in number

function getTextElValueInNum(id){
    const elementById = document.getElementById(id);

    const elementValue = elementById.innerText;
    const convertValue = parseFloat(elementValue);
    return convertValue;
}