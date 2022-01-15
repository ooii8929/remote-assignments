
const herobarClick =  document.querySelector('.herobar');

herobarClick.addEventListener('click',(e)=>{
    console.log('click');
    document.querySelector('.herobar h1').textContent = "Have a Good Time!";
})



const readBtn = document.querySelector('.read-more-btn');
const readBlock = document.querySelector('.read-more')

readBtn.addEventListener('click',()=>{
    readBlock.classList.remove('read-more');
})


