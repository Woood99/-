const cartWrapper = document.querySelector('.cart-wrapper');
window.addEventListener('click', (e) => {
    if (e.target.hasAttribute('data-cart')) {
        const card = e.target.closest('.card');
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').textContent,
            itemsInBox: card.querySelector('[data-items-in-box]').textContent,
            weight: card.querySelector('.price__weight').textContent,
            price: card.querySelector('.price__currency').textContent,
            counter: card.querySelector('[data-counter]').textContent,
        };
        const itemInCart = cartWrapper.querySelector(`[data-id='${productInfo.id}']`);
        if (itemInCart) {
            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.textContent = parseInt(counterElement.textContent) + parseInt(productInfo.counter);
        } else {
            const cardItemHTML = `
            <div class="cart-item" data-id="${productInfo.id}">
            <div class="cart-item__top">
                <div class="cart-item__img">
                    <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
                </div>
                <div class="cart-item__desc">
                    <div class="cart-item__title">${productInfo.title}</div>
                    <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>
    
                    <div class="cart-item__details">
    
                        <div class="items items--small counter-wrapper">
                            <div class="items__control" data-action="minus">-</div>
                            <div class="items__current" data-counter="">${productInfo.counter}</div>
                            <div class="items__control" data-action="plus">+</div>
                        </div>
    
                        <div class="price">
                            <div class="price__currency">${productInfo.price}</div>
                        </div>
    
                    </div>
    
                </div>
            </div>
        </div>
            `;
            cartWrapper.insertAdjacentHTML('beforeend', cardItemHTML);
        }
        card.querySelector('[data-counter]').textContent = 1;
        toggleCartStatus();
        calcCartPriceAndDelivery();
    }
})