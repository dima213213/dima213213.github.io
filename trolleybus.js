console.log("Java Script is HERE!")

document.querySelector('.editor-btn').addEventListener('click', function() {   
    document.querySelector('.closed').classList.remove('closed')
    document.querySelector('.coconut1').classList.add('closed')    
})

document.querySelector('.back-btn').addEventListener('click', function() {   
    document.querySelector('.closed').classList.remove('closed')
    document.querySelector('.urus').classList.add('closed')
})
