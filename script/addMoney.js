document.getElementById('add-money-box').addEventListener('click', function () {

    setOptionsBoxStyle('add-money-box');

    removeAllSections()
    const addMoneySection = document.getElementById('addMoney-section');
    addMoneySection.style.display = 'block';

});


document.getElementById('add-money').addEventListener('click', function (e) {
    e.preventDefault();
    
});