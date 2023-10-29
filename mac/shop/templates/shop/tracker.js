$('#trackerForm').submit(function(event) {
    $('#items').empty();
    var formData = {
        'orderId': $('input[name=orderId]').val(),
        'email': $('input[name=email]').val(),
        'csrfmiddlewaretoken': $('input[name=csrfmiddlewaretoken]').val()
    };
    $.ajax({
            type: 'POST',
            url: '/shop/tracker/',
            data: formData,
            encode: true
        })
        .done(function(data) {
            $('#citems').empty();
            console.log(data)
            data = JSON.parse(data);
            if (data['status'] == 'success') {
                updates = data['updates'];
                for (i = 0; i < updates.length; i++) {
                    let text = updates[i]['text'];
                    let time = updates[i]['time'];
                    mystr = `<li class="list-group-item d-flex justify-content-between align-items-center">
                    ${text}
                    <span class="badge badge-primary badge-pill">${time}</span>
                </li>`
                    $('#items').append(mystr);
                }
                // Fill in the order details
                cart = JSON.parse(data['itemsJson']);
                console.log(cart);
                for (item in cart) {
                    let name = cart[item][1];
                    let qty = cart[item][0];
                    mystr = `<li class="list-group-item d-flex justify-content-between align-items-center">
                    ${name}
                    <span class="badge badge-primary badge-pill">${qty}</span>
                </li>`
                    $('#citems').append(mystr);
                }
            } else {
                mystr = `<li class="list-group-item d-flex justify-content-between align-items-center">
                    Sorry, We are not able to fetch this order id and email. Make sure to type correct order Id and email</li>`
                $('#items').append(mystr);
                $('#citems').append(mystr);
            }
        });
    event.preventDefault();
});