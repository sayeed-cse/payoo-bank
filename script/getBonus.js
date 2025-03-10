document.getElementById('bonus-box').addEventListener('click', function () {
    console.log('heelo')
    setOptionsBoxStyle('bonus-box');

    removeAllSections();
    const transferSection = document.getElementById('getBonus-section');
    transferSection.style.display = 'block';

});


// document.getElementById('add-money').addEventListener('click', function (e) {
//     e.preventDefault();
    
// });