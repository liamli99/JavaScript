import { cart, removeFromCart, updateDeliveryOption } from '../data/cart.js';
import { products } from '../data/products.js';
import { formatCurrency } from './utils/money.js'; 

import { deliveryOptions } from '../data/deliveryOptions.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'; // Load the ESM version of the external library as module, it uses default export!

let cartSummaryHTML = '';

// Loop through cart to generate HTML for each cart item container
cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    
    // Since id is unique, we can use productId to find out the corresponding product! So that we can get its name, image, ...!
    let matchingProduct;
    products.forEach((product) => {
        if (product.id === productId) {
            matchingProduct = product;
        }
    })

    // The delivery option whose id is the same as cart item's deliveryOptionId will be checked by default! So that the original delivery date should be the delivery option's date whose id is the same as cart item's deliveryOptionID!
    const deliveryOptionId = cartItem.deliveryOptionId;
    let deliveryOption;
    deliveryOptions.forEach((option) => {
        if (option.id === deliveryOptionId) {
            deliveryOption = option;
        }
    })
    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
    const dateString = deliveryDate.format('dddd, MMMM D');

    
    cartSummaryHTML += `
        <!-- Add a unique class to div element to identify which cart item container to remove! -->
        <div class="cart-item-container js-cart-item-container-${productId}">
            <div class="delivery-date">
                Delivery date: ${dateString}
            </div>

            <div class="cart-item-details-grid">
                <img class="product-image"
                    src="${matchingProduct.image}">

                <div class="cart-item-details">
                    <div class="product-name">
                        ${matchingProduct.name}
                    </div>
                    <div class="product-price">
                        $${formatCurrency(matchingProduct.priceCents)}
                    </div>
                    <div class="product-quantity">
                        <span>
                            Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                        </span>
                        <span class="update-quantity-link link-primary">
                            Update
                        </span>
                        <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${productId}">
                            Delete
                        </span>
                    </div>
                </div>

                <div class="delivery-options">
                    <div class="delivery-options-title">
                        Choose a delivery option:
                    </div>
                    ${deliveryOptionsHTML(productId, cartItem)}
                </div>
            </div>
        </div>
    `;
})

function deliveryOptionsHTML(productId, cartItem) {
    let html = '';

    deliveryOptions.forEach((deliveryOption) => {
        // External library DayJS
        // Get today's date
        const today = dayjs();
        // Do calculations
        const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
        // Display the date in easy-to-read format
        const dateString = deliveryDate.format('dddd, MMMM D');

        const priceString = deliveryOption.priceCents === 0 ? 'FREE' : `$${formatCurrency(deliveryOption.priceCents)} -`;

        const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

        html += `
            <div class="delivery-option js-delivery-option"
                data-product-id="${productId}"
                data-delivery-option-id="${deliveryOption.id}">
                <!-- The delivery option whose id is the same as cart item's deliveryOptionId will be checked by default! -->
                <input type="radio"
                    ${isChecked ? 'checked' : ''}
                    class="delivery-option-input"
                    name="delivery-option-${productId}">
                <div>
                    <div class="delivery-option-date">
                        ${dateString}
                    </div>
                    <div class="delivery-option-price">
                        ${priceString} Shipping
                    </div>
                </div>
            </div>
        `
    });

    return html;
}

document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;

// Add event listener to Delete link, similar to Add to Cart button! 
document.querySelectorAll('.js-delete-link').forEach((link) => {
    link.addEventListener('click', () => {
        const productId = link.dataset.productId;

        // Remove product from cart
        removeFromCart(productId);
        
        // Display the remaining products in cart
        const container = document.querySelector(`.js-cart-item-container-${productId}`);
        // .remove() can remove the element from page!
        container.remove();
    })
})

document.querySelectorAll('.js-delivery-option').forEach((element) => {
    element.addEventListener('click', () => {
        updateDeliveryOption()
    })
})