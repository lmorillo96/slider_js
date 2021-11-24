(function() {
    const sliders = [...document.querySelectorAll('.slider__body')];
    const arrowNext = document.querySelector('#after');
    const arrowBefore = document.querySelector('#before');
    let value;

    arrowNext.addEventListener('click', () => changePosition(1));
    
    arrowBefore.addEventListener('click', () => changePosition(-1));

    function changePosition(change){
        const currentElement = Number(document.querySelector('.slider__body--show').dataset.id);

        value = currentElement;
        value += change;

        if(value === 0 || value == sliders.length+1) {
            value = value === 0 ? sliders.length : 1;
        }
        
        sliders[currentElement-1].classList.toggle('slider__body--show');
        sliders[value-1].classList.toggle('slider__body--show');      
    }

})()
