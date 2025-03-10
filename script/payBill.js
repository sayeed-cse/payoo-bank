document.getElementById('pay-bill-box').addEventListener('click', function () {
    console.log('heelo')
    setOptionsBoxStyle('pay-bill-box');

    removeAllSections();
    const transferSection = document.getElementById('pay-bill-section');
    transferSection.style.display = 'block';

});


// document.getElementById('add-money').addEventListener('click', function (e) {
//     e.preventDefault();
    
// });