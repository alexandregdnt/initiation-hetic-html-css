const burgersScrollArrowRight = document.getElementById('burgers-scroll-arrow-right');
const burgersScrollArrowLeft = document.getElementById('burgers-scroll-arrow-left');
const burgersImg = document.querySelectorAll('.burgers-images img');
const burgersImgContainer = burgersImg[0].parentElement;

const changeOpacity = (position = 'right') => {
    switch (position) {
        case 'left':
            burgersScrollArrowLeft.style.opacity = '0';
            burgersScrollArrowRight.style.opacity = '1';
            break;
        case 'middle':
            burgersScrollArrowLeft.style.opacity = '1';
            burgersScrollArrowRight.style.opacity = '1';
            break;
        default:
            burgersScrollArrowLeft.style.opacity = '1';
            burgersScrollArrowRight.style.opacity = '0';
    }
};

burgersScrollArrowRight.addEventListener('click', () => {
    burgersImg[burgersImg.length - 1].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    changeOpacity('right');
});

burgersScrollArrowLeft.addEventListener('click', () => {
    burgersImg[0].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    changeOpacity('left');
});

burgersImgContainer.addEventListener('scroll', (e) => {
    const maxScrollLeft = burgersImgContainer.scrollWidth - burgersImgContainer.clientWidth;
    
    if (burgersImgContainer.scrollLeft === 0) {
        changeOpacity('left');
    } else if (burgersImgContainer.scrollLeft === maxScrollLeft) {
        changeOpacity('right');
    } else {
        changeOpacity('middle');
    }

    console.debug('scrollLeft', burgersImgContainer.scrollLeft);
    console.debug(burgersImgContainer.scrollWidth, maxScrollLeft);
});

/*
const scrollDemo = document.querySelector('#scrollDemo');
const output = document.querySelector('.output');

scrollDemo.addEventListener('scroll', (e) => {
    output.innerHTML = `scrollTop: ${scrollDemo.scrollTop} <br>
                                scrollLeft: ${scrollDemo.scrollLeft} `;
}, { passive: true });

const control = document.querySelector('#control');
control.addEventListener('click', (e) => {
    switch (e.target.id) {
        case 'btnScrollLeft':
            scrollDemo.scrollLeft += 20;
            break;

        case 'btnScrollTop':
            scrollDemo.scrollTop += 20;
            break;
    }
});
*/
