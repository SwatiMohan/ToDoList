function checkInputs() {
    //loginAction(e,redirectAndAuthenticate);
    var unameErrFlag= true;
    var passwordErrFlag= true;
    const username = document.getElementById('uname');
    const pswd = document.getElementById('password');
    //const usernameValue = username.value.trim();
    //const pswdValue = pswd.value.trim();
    
    if (username.value != "admin") {
        //show error
        //add error class
        setErrorFor(username, 'Username is incorrect');
        unameErrFlag = false;
    }
    else {
        //add success class
        setSuccessFor(username);
    }

    if (pswd.value != "12345") {
        //show error
        //add error class
        setErrorFor(pswd, 'Password is incorrect');
        passwordErrFlag = false;
    }
    else {
        //add success class
        setSuccessFor(pswd);
    }

    if (unameErrFlag == true && passwordErrFlag == true) {
        //location.href = "todo.html";
        window.localStorage.setItem('user', JSON.stringify({ uname: 'admin' }));
        window.location = 'todo.html';
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    //add error message inside small tag
    small.innerText = message;

    //add error class
    formControl.className = 'form-group error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-group success';

}

$(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
        input.attr("type", "password");
    } else {
      
      input.attr("type", "text");
    }
  });

const validate = (el, authValue) => {
    let flagName = el + "ErrFlag";
    if ($(`#${el}`).val() === authValue) {
        errorFlags[flagName] = false;
        const msg = '';
        $(`#${el}Error`).html(msg);
        $(`#${el}Error`).addClass('hidden');
    }
    else {
        errorFlags[flagName] = true;
        const msg = `Invalid  ${el} `;
        $(`#${el}Error`).html(msg);
        $(`#${el}Error`).removeClass('hidden');
    }

}
$('#uname').on('input', (e) => { validate('uname', 'admin') });
$('#password').on('input', (e) => { validate('password', '12345') });

const redirectAndAuthenticate = () => {
    window.localStorage.setItem('user', JSON.stringify({ uname: 'admin' }));
    window.location = 'todo.html';
}
const loginAction = (e, callback) => {
    const username = document.getElementById('uname');
    const pswd = document.getElementById('password');
    //const usernameValue = username.value.trim();
    //const pswdValue = pswd.value.trim();
    var validation = true;

    if (username.value != "admin") {
        //show error
        //add error class
        setErrorFor(username, 'Username is incorrect');
        unameErrFlag = false;
    }
    else {
        //add success class
        setSuccessFor(username);
    }

    if (pswd.value != "12345") {
        //show error
        //add error class
        setErrorFor(username, 'Password is incorrect');
        passwordErrFlag = false;
    }
    else {
        //add success class
        setSuccessFor(username);
    }

    if (!errorFlags['unameErrFlag'] && !errorFlags['passwordErrFlag']) {
        //e.preventDefault();
        //callback();
    }
}
