if (localStorage.getItem('cart') == null) {
    var cart = {};
} else {
    cart = JSON.parse(localStorage.getItem('cart'));
}
console.log(cart);
var sum = 0;
var totalPrice = 0;
if ($.isEmptyObject(cart)) {
    //if object is empty
    mystr = `<p>Your cart is empty, please add some items to your cart before checking out!</p>`
    $('#items').append(mystr);
} else {
    for (item in cart) {
        let name = cart[item][1];
        let qty = cart[item][0];
        let itemPrice = cart[item][2];
        sum = sum + qty;
        totalPrice = totalPrice + qty* itemPrice;
        mystr = `<li class="list-group-item d-flex justify-content-between align-items-center">
                    ${name}
                    <span class="badge badge-primary badge-pill">${qty}</span>
                </li>`
        $('#items').append(mystr);
    }
}
document.getElementById('cart').innerHTML = sum;
document.getElementById('totalPrice').innerHTML = totalPrice;
$('#itemsJson').val(JSON.stringify(cart));
{% if thank %}
alert('Thanks for ordering with us. Your order is is {{id}}. Use it to track your order using our order tracker');
localStorage.clear();
document.location = "/shop";
{% endif %}
$('#amount').val($('#totalPrice').html())