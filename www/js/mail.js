function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}

function showResponse() {
    $("#mailform").slideUp(200, function () {
        $(".footer-form").html('<div class="my_div"><span style="font-size:30px;margin-top:20px;">Vos coordonnées ont été correctement envoyées</span><span>MERCI</span></div>');
    });
}

function checkForm() {
    $('input[name="phone"], input[name="mail"], input[name="nom"]').each(function () {
        item = $(this);
        check_noempty(item);
    });
    check_mail();
    
    if ($(document).contents().find('.alert').length > 0) {
        mess = 'Error in fields';
        alert(mess);
        return false;
    }
}

function err_show(err, item) {
    if (err.length > 0) {
        item.addClass('alert');
        alert(err);
    } else {
        item.removeClass('alert').addClass('ok');
    }
}

function check_mail() {
    var err = '';
    var mail = $('#mailform').find('input[name="mail"]').val();
    if (mail.length == '') {
        err = 'You have not filled mail';
    }
    else if (!isValidEmailAddress(mail)) {
        err = 'Wrong email';
    }
    err_show(err, $('#mailform').find('input[name="mail"]'));
}

function check_noempty(item) {
    var err = '';
    var val = item.val();       
        if (val.length == '') {
            err = 'Empty field: ' + item.attr('placeholder');
        }
    err_show(err, item);
}

function check_phone() {
    var err = '';
    var val = $('input[name="phone"]').val();
    //alert(val);
    if (val.length == 0) {
        err = 'Please fill contact phone';
    }
    err_show(err, $('input[name="phone"]'));
}

$(document).ready(function () {
    var options = {
        beforeSubmit: checkForm, // pre-submit callback
        success: showResponse,
    };
    $('#mailform').ajaxForm(options);
    
   
    
});