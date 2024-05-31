let productsHTML = '';

// Note that in amazon.html, we load products.js before loading amazon.js!!! This order is very important so that we can get products first and then use this variable here!
// Loop through products to generate HTML for each product container
products.forEach((product) => {
    productsHTML += `
        <div class="product-container">
            <div class="product-image-container">
                <img class="product-image" 
                    src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
                ${product.name}
            </div>

            <div class="product-rating-container">
                <img class="product-rating-stars"
                    src="images/ratings/rating-${product.rating.stars * 10}.png">
                <div class="product-rating-count link-primary">
                    ${product.rating.count}
                </div>
            </div>

            <div class="product-price">
                <!-- Keep 2 decimal places! -->
                $${(product.priceCents / 100).toFixed(2)}
            </div>

            <div class="product-quantity-container">
                <select>
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart">
                <img src="images/icons/checkmark.png">
                Added
            </div>

            <!-- 'data-*' is an HTML attribute that allows us to attach any information to an element. We add this attribute to Add to Cart button so that we can know which product to be added when clicking the button! -->
            <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
                Add to Cart
            </button>
        </div>
    `;
})

document.querySelector('.js-products-grid').innerHTML = productsHTML;

// Add event listener to Add to Cart button 
document.querySelectorAll('.js-add-to-cart').forEach((buttonElement) => {
    buttonElement.addEventListener('click', () => {
        // We can get the value of data-any-name by using element.dataset.anyName!!! Note that element.dataset is an object that each property corresponds to each 'data-*' attribute! However, the name is converted from kebak-case to camelCase!
        const productId = buttonElement.dataset.productId;
        
        // Similar to products, we can use cart here because we load cart.js before loading amazon.js in amazon.html!
        // Check if the product is already in the cart. If it is in the cart, then increase the quantity; If it is not in the cart, then add it to the cart!
        let matchingItem;
        
        cart.forEach((item) => {
            if (productId === item.productId) {
                matchingItem = item;
            }
        })
        
        if (matchingItem) {
            // 'matchingItem = item' is 'copy by reference', so that when updating matchingItem, item in cart also updates! 
            matchingItem.quantity += 1;
        } else {
            cart.push({
                productId: productId,
                quantity: 1
            })
        }

        // Calculate and display total quantity
        let cartQuantity = 0;

        cart.forEach((item) => {
            cartQuantity += item.quantity;
        })

        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
    })
})

