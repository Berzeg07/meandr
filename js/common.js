$(document).ready(function() {

    $('.phone-mask').mask('+7(999) 999-9999');

    var formInp = $('.formInp');
    $(formInp).focus(function() {
        $('.formList li').removeClass('active');
        $(this).parents('li').addClass('active');
        $('.formList-label').removeClass('active');
        $(this).parent().addClass('active');
    });
    $(formInp).blur(function() {
        $('.formList li').removeClass('active');
        $('.formList-label').removeClass('active');
    });

    $(".form").submit(function() {

        var checkError = false;

        $('.formList-label .formInp').each(function() {
            if (!($(this).val())) {
                $(this).addClass('error');
                $('.error').next(".formError").addClass('active');
            } else if (($(this).val())) {
                $(this).removeClass('error');
                $(this).next(".formError").removeClass('active');
            }
        });

        var email = $('#email').val();

        var isValid = (email.match(/.+?\@.+/g) || []).length !== 1;
        console.log(isValid);

        var checkClass = $('.formList-label .formInp').hasClass('error');

        if (checkClass || isValid == true) {
            checkError = true;
            if(isValid){
                $('.emailError').addClass('active');
            }
        } else {
            checkError = false;
        }

        if (checkError == true) {
            $('.formErrorMain').addClass('active');
        } else {
            // alert('Сообщение отправлено');
            $('.emailError').removeClass('active');
            $('.formErrorMain').removeClass('active');
            var form_data = $(this).serialize();
            $.ajax({
                type: "POST",
                url: "/sendmessage.php",
                data: form_data,
                success: function() {
                    cleanTnanks(this);
                }
            });
        }
        return false;
    });

    function cleanTnanks(form) {
        showModal();
    };

    $('.form-thanks_close').click(function() {
        closeModal();
    });

    $('.overlay').click(function() {
        closeModal();
    });

    function showModal() {
        $('.form-thanks').fadeIn();
        $('.overlay').fadeIn();
    }

    function closeModal() {
        $('.form-thanks').fadeOut();
        $('.overlay').fadeOut();
    }

}); //END READY
