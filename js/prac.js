function employee() {
    $('.add-employee').click(function () {
        var value = $('.employee-name').val();
        var message = $('#message');
        if (value == '') {
            message.text("error! Pleas input employee name!").css('color', '#960606');
        }
        else {
            for (var i = 0; i < $('.employee-list li').length + 1; i++) var removeBtn = '<button class="remove" id="remove' + i + '">X</button>';
            var li = '<li id="' + i + '">' + value + removeBtn + '</li>';
            $('.employee-list').append(li);
            $('.employee-name').val("");
            message.text("successful! You added new employee to your list!").css('color', 'green');
        };
        var remBtn = $('button.remove');
        $(remBtn).click(function () {
            var deleteBox = $('#delete-box');
            var listItem = $(this).parent().attr('id');
            deleteBox.css('display', 'block');
            $('#yes').click(function () {
                deleteBox.css('display', 'none');
                message.text("User has been succesfully removed!").css('color', '');
                var usun = $('li#' + listItem);
                usun.remove();
            });
            $('#no').click(function () {
                deleteBox.css('display', 'none');
                listItem = null;
                message.text("");
            });
        });
    });
};
window.onload = employee();