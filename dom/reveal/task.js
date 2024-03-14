let block = document.querySelectorAll('.reveal');
let windowHeight = document.documentElement.clientHeight;
let oldScrollY = 0;

window.addEventListener('scroll', function(e) {

    block.forEach((element) => {
        let headerTop = element.getBoundingClientRect().top  - (window.scrollY - oldScrollY);

        if(headerTop < (windowHeight)){
            element.classList.add('reveal_active');
        }
        if(headerTop < 0 || headerTop > windowHeight){
            element.classList.remove('reveal_active');
        }
        oldScrollY = window.scrollY;
    });

});