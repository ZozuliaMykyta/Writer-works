// модальное окно 1
let popupOne = document.getElementById('mypopup-01');
let popupToggleOne = document.querySelectorAll('.popup__button');
let popupToggleTwo = document.querySelectorAll('.popup__button-main');
let popupCloseOne = document.querySelectorAll('.popup__close');

popupToggleOne.forEach(function(item){
        item.addEventListener('click', function(e) {
        popupOne.style.display="block"
        e.preventDefault();
        });
});
popupCloseOne.forEach(function(close){
    close.addEventListener('click', function(){
    popupOne.style.display="none"
    });
});
popupToggleTwo.forEach(function(close){
    close.addEventListener('click', function(){
    popupOne.style.display="none"
    });
});
window.onclick = function(e){
    if(e.target == popupOne) {
        popupOne.style.display="none"   
    };
};
(function () {

    const smoothScroll = function (targetEl, duration) {
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);
    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());
const iconMenu = document.querySelector('.burger');
const menuBody = document.querySelector('.header__nav-02');
const menuLinks = document.querySelectorAll('.header__item-link');
    
        iconMenu.addEventListener ("click", function () {
            document.body.classList.toggle('lock');
            iconMenu.classList.toggle('active');
            menuBody.classList.toggle('active');
         });
        
         $(".header__link").click(function(){
            $(".header__nav-02").removeClass("active");
            $(".burger").removeClass("active");
            $("body").removeClass("lock");
          });