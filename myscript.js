//Generate stars to page
function createstars(){
    const containerStars = document.getElementById('stars');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    

    for (let i = 0; i < 100; i++) {
        
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left =`${Math.random() * windowWidth}px`;
        star.style.top =`${Math.random() * windowHeight}px`;
        containerStars.appendChild(star);
    }
} 
window.addEventListener('load',createstars);

//togler images
const burgerImage = document.querySelectorAll('.burger img');
const toggelerImage = document.querySelectorAll('.burger-toggeler img');
 let currentIndex = 0;

 toggelerImage[currentIndex].classList.add('active');

 burgerImage.forEach((img,index)=>{
    img.addEventListener('click',()=>{
        toggelerImage.forEach(togImag => togImag.classList.remove('active'));
        toggelerImage[currentIndex].classList.add('active');
        toggelerImage[currentIndex].src= burgerImage[index].src;
        currentIndex = (currentIndex + 1)% toggelerImage.length;
    });
 });