document.getElementById('cashout-box').addEventListener('click',function(){
    setOptionsBoxStyle('cashout-box');

    removeAllSections()
    const cashOutSection = document.getElementById('cashOut-section');
    cashOutSection.style.display = 'block';
})