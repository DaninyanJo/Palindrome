document.querySelector('#check-btn').addEventListener('click', () => {
    const text = document.querySelector('#input-palindrom').value;
    palindrome(text)
})

function palindrome(str) {
    let normalText = str.toLowerCase();
    let changedText = str.toLowerCase().split('').reverse().join('');
    normalText === changedText ? palindromeTrue() : palindromeFalse();
   
    function palindromeTrue(){
        document.querySelector('.box').style.color = '#5ae65a';
        document.querySelector('.answer').style.background = '#5ae65a';
        document.querySelector('.answer').style.transform = 'translate(-50% , 100%)';
        document.querySelector('.answer-text').innerHTML = 'Yes, it is palindrome';
        
        setTimeout(()=>{
            document.querySelector('.box').style.color = 'black'
            document.querySelector('.answer').style.transform = 'translate(-50% , -52%)';
        },3000)




    }
    function palindromeFalse(){
        document.querySelector('.box').style.color = '#eb4e4e';
        document.querySelector('.answer').style.background = '#eb4e4e';
        document.querySelector('.answer').style.transform = 'translate(-50% , 100%)';
        document.querySelector('.answer-text').innerHTML = 'No, it is not palindrome';
        
        setTimeout(()=>{
            document.querySelector('.box').style.color = 'black'
            document.querySelector('.answer').style.transform = 'translate(-50% , -52%)';
        },3000)
    }

}