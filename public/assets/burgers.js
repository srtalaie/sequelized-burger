$(document).ready(function(){
    $('.devour').on('click', function(){
        let id = $(this).data('id');
        $.ajax({
            url: `/api/burger/${id}`,
            type: 'PUT'
        }).then(function(){
            location.reload();
        });
    });
    $('#submit').on('click', function(){
        event.preventDefault();

        let newBurger = { name: `${$('#burgerInput').val().trim()}`};
        console.log(newBurger);

        $.ajax({
            url: '/api/burger',
            type: 'POST',
            data: newBurger,
        }).then(function(){
            location.reload();
        });
    });
});