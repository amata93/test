$(document).ready(function () {
    formListener();
});
function formListener() {
    $('#testForm').on('submit', function (ev) {
        ev.preventDefault();
        var object = {
            email: $('#email').val(),
            name: $('#name').val(),
            password: $('#pwd').val()
        };

        console.log(object);

    });
}