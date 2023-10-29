console.log('working');
if(localStorage.getItem('cart') == null){
    var cart = {};
} else {
    cart = JSON.parse(localStorage.getItem('cart'));
    document.getElementById('cart').innerHTML = Object.keys(cart).length;
}
$('.cart').click(function(){
    console.log('clicked');
    var idstr = this.id.toString();
    console.log(idstr);
        if (cart[idstr] !=undefined){
            cart[idstr] = cart[idstr] + 1;
        } else {
            cart[idstr] = 1;
        }
        console.log(cart);
        localStorage.setItem('cart', JSON.stringify(cart));
        document.getElementById('cart').innerHTML = Object.keys(cart).length;
    });
$('#popcart').popover();
document.getElementById("popcart").setAttribute('data-content', '<h5>Cart for your items in my shopping cart</h5>');