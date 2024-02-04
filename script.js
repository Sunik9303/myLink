const shareButton = document.getElementById('share')

shareButton.addEventListener('click' ,async() => {
    try {
        await navigator.share({
            title: '공유하기',
            url: 'https://sunik9303.github.io/myLink/'
           })    
    } catch (error) {
        console.error(error.message)    
    }    
})
