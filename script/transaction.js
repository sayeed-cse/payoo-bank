document.getElementById('transaction-box').addEventListener('click', function () {
    console.log('heelo')
    setOptionsBoxStyle('transaction-box');

    removeAllSections();
    const transferSection = document.getElementById('transaction-section');
    transferSection.style.display = 'block';

});
