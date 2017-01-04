$(document).ready(function () {
    formListener();
});
function formListener() {
    $('#testForm').on('submit', function (ev) {
        ev.preventDefault();
        var object = {
            email: $('#email').val(),
            nombre: $('#name').val()
        };
        console.log(object);
    });
}