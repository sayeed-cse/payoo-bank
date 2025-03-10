document.getElementById('transfer-box').addEventListener('click', function () {
    console.log('heelo')
    setOptionsBoxStyle('transfer-box');

    removeAllSections();
    const transferSection = document.getElementById('Transfer-section');
    transferSection.style.display = 'block';

});


// document.getElementById('add-money').addEventListener('click', function (e) {
//     e.preventDefault();
    
// });