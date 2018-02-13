(function(){
let ltrButton = document.querySelector('.js-ltr');
let rtlButton = document.querySelector('.js-rtl');

function buttonClick(el) {
    let leftAside = document.querySelector('.js-left');
    let rightAside = document.querySelector('.js-right');
    el.addEventListener('click', function (e) {
        e.preventDefault();
        /*
        * when you click on the left button, add a class with the animation and change the inscription
        */
        if(this.classList.contains('js-ltr')){
            if(this.classList.contains('js-back')){
                leftAside.classList.remove('anim-ltr');
                leftAside.classList.add('back-ltr');
                this.innerHTML = 'Open left sidebar';
                this.classList.remove('js-back');
            }else{
                leftAside.classList.add('anim-ltr');
                leftAside.classList.remove('back-ltr');
                this.innerHTML = 'Close left sidebar';
                this.classList.add('js-back');
            }
        /*
        * when you click on the right button, add a class with the animation and change the inscription
        */
        }else{
            if(this.classList.contains('js-back')){
                rightAside.classList.remove('anim-rtl');
                rightAside.classList.add('back-rtl');
                this.innerHTML = 'Open right sidebar';
                this.classList.remove('js-back');
            }else{
                rightAside.classList.add('anim-rtl');
                rightAside.classList.remove('back-rtl');
                this.innerHTML = 'Close right sidebar';
                this.classList.add('js-back');
            }
        }
    })
}

buttonClick(ltrButton);
buttonClick(rtlButton);

})();
