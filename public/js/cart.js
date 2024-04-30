$(document).ready(function() {
    let cart = [];

    // Add to Cart Button Click Event
    $('.add-to-cart').click(function() {
        let name = $(this).data('name');
        let price = parseInt($(this).data('price'));

        // Add item to cart array
        cart.push({ name: name, price: price });

        // Update cart display
        updateCart();
    });

    // Update Cart Function
    function updateCart() {
        let total = 0;
        let cartItemsHtml = '';

        // Generate cart items HTML
        cart.forEach(function(item) {
            cartItemsHtml += `<li class="list-group-item">${item.name} - UGX ${item.price.toLocaleString()}</li>`;
            total += item.price;
        });

        // Update cart items list
        $('.cart-items').html(cartItemsHtml);

        // Update total price
        $('#cart-total').text(total.toLocaleString());
    }

    // Checkout Button Click Event
    $('#checkout-btn').click(function() {
        // Perform checkout action (e.g., save to database, process payment)
        alert('Checkout complete!');
        // Clear cart after checkout
        cart = [];
        updateCart();
    });
});