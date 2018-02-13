let ltrButton = document.querySelector('.js-ltr');
let rtlButton = document.querySelector('.js-rtl');
let leftAside = document.querySelector('.js-left');
let rightAside = document.querySelector('.js-right');

function buttonClick(el) {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        this.classList.toggle('js-back');
        console.log(this.classList.contains('js-ltr'));
        if(this.classList.contains('js-ltr') && this.classList.contains('js-back')){
            leftAside.classList.add('anim-ltr');
            this.innerHTML = 'Close left sidebar';
        }else{
            leftAside.classList.remove('anim-ltr');
            this.innerHTML = 'Open left sidebar';
        }

        // if(this.classList.contains('js-rtl') && this.classList.contains('js-back')){
        //     rightAside.classList.add('anim-rtl');
        //     this.innerHTML = 'Close right sidebar';
        // }else{
        //     rightAside.classList.remove('anim-rtl');
        //     this.innerHTML = 'Open right sidebar';
        // }

    })
}

buttonClick(ltrButton);
buttonClick(rtlButton);
