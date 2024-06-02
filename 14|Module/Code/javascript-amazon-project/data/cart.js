// The value of cart is a list of objects with two properties: productId and quantity
export let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Save cart to localStorage whenever there is an update on cart!
function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// If the product is already in the cart, then increase the quantity; If it is not in the cart, then add it to the cart!
export function addToCart(productId) {
    let matchingItem;
        
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    })
    
    if (matchingItem) {
        matchingItem.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            quantity: 1
        })
    }

    saveToStorage();
}

// Remove product from cart
export function removeFromCart(productId) {
    let newCart = [];

    cart.forEach((cartItem) => {
        if (productId !== cartItem.productId) {
            newCart.push(cartItem);
        }
    })

    // Since we are re-assigning the value, we should use 'let' to create cart!
    cart = newCart;

    saveToStorage();
}