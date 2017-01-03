$(document).ready(function () {
    formListener();
});
function formListener() {
    $('#testForm').on('submit', function (ev) {
        ev.preventDefault();
        var object = {
            email: $('#email').val(),
            name: $('#name').val(),
            password: $('#password').val()
        };
        console.log(object);
    });
}