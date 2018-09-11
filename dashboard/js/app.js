$(document).ready(function () {

    // Remove alert dot when notification icon is clicked
    $('.alert-icon').click(function () {
        $('.alert-dot').fadeOut(500);
    });

    // Close alert message
    $('.closing-btn').click(function () {
        $('#alert').fadeOut(500);
    });
    

    // Send Message event
    $('.send-btn').click(function (e) {
        e.preventDefault();
        $('.form').hide();

        // If form is filled out wrong
        if ($('#search').val().length === 0 || $('.form-text').val().length === 0) {

            $('#message-user').append('<div class="mistake"><p>WHOOPS! You must fill out BOTH a user name AND a message.</p><button class="start-over">Start Over</button></div>')

            // Start Over button is clicked
            $('.start-over').click(function () {

                $('.mistake').remove();
                // Reset and show new form
                $('.form')[0].reset();
                $('.form').show();
            });
        }
        // If form is filled out correctly
        else if ($('#search').val().length > 0) {

            $('#message-user').append('<div class="correct"><p>Hooray! Your message has been sent!</p><button class="new-message">New Message</button></div>')

            // New Message is clicked
            $('.new-message').click(function () {

                $('.correct').remove();
                // Reset and show new form
                $('.form')[0].reset();
                $('.form').show();
            });
        }
    });

});