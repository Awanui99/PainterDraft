

// function parallaxScroll () {
    const parallax = document.querySelector('.orbit-figure');

    window.addEventListener('scroll', () => {
        let offset = window.pageYOffset;
        parallax.style.backgroundPositionY = offset * 0.7 + 'px';
        if (offset === 0) {
            parallax.style.backgroundPositionY = 0.1 + 'px';
        }
    })
// };

// document.querySelector('.orbit-slide').addEventListener('o')