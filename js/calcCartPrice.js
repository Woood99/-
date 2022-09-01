function calcCartPriceAndDelivery() {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceEl = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost');
    const cartDelivery = document.querySelector('[data-cart-delivery]');
    let totalPrice = 0;
    cartItems.forEach(item => {
        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price__currency');
        const currentPrice = parseInt(amountEl.textContent) * parseInt(priceEl.textContent);
        totalPrice += currentPrice;
    });
    totalPriceEl.textContent = totalPrice;
    if (totalPrice > 0) {
        cartDelivery.classList.remove('none');
    } else {
        cartDelivery.classList.add('none');
    }
    if (totalPrice >= 600) {
        deliveryCost.classList.add('free');
        deliveryCost.textContent = 'бесплатно';
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.textContent = '250 ₽';
    }
}