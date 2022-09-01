window.addEventListener('click', (e) => {
    console.log(e.target);
    let counter;
    if (e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus') {
        const wrapper = e.target.closest('.counter-wrapper');
        counter = wrapper.querySelector('[data-counter]');
    }
    if (e.target.dataset.action === 'minus') {
        if (parseInt(counter.textContent) > 1) {
            counter.textContent--;
        } else if (e.target.closest('.cart-wrapper') && parseInt(counter.textContent) === 1) {
            e.target.closest('.cart-item').remove();
            toggleCartStatus();
            calcCartPriceAndDelivery();
        }
    }
    if (e.target.dataset.action === 'plus') {
        counter.textContent++;
    }
    if (e.target.hasAttribute('data-action') && e.target.closest('.cart-wrapper')) {
        calcCartPriceAndDelivery();
    }
});