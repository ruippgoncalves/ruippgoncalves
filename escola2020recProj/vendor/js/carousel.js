function carouselInit(carousel) {
    let imgs = -1;

    carousel.childNodes.forEach(child => {
        if (child.className == 'carousel-item')
            imgs += 1;
    });

    if (imgs <= 0) return;

    setInterval(() => {
        const max = imgs * carousel.offsetWidth;

        // >= caso seja utilizado o mouse/touch para mover
        if (carousel.scrollLeft >= max)
            carousel.scrollBy(-max, 0);
        else
            carousel.scrollBy(window.innerWidth, 0);
    }, 5000);
}
