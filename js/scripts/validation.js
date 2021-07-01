window.addEventListener('load',
    function(){

        clearMessages();

        var formElem = document.querySelector("form");
        formElem.onsubmit = submitForm;

         //월 추가
        var selectInput = document.querySelector('select[name="birth-month"]');
        for (var i=1; i<=12; i++) {
            var option = document.createElement('option');
            option.innerHTML = i + '월';
            option.value = i;
            
            selectInput.appendChild(option);
        }
    
    }
);

function clearMessages(){
    var msgs = document.getElementsByClassName('alert-message ');
    for (var i = 0; i< msgs.length; i++){
       msgs[i].style.display = 'none';
    }
}

function showMessage(inputElement, msg){
    var msgElem = inputElement.parentNode.querySelector('span');
    msgElem.style.display = 'inline';
    msgElem.innerText = message;

    inputElement.forcus();
}

function submitForm() {
    var accountInput = document.querySelector("input[name='account']");
    var passwordInput = document.querySelector("input[name='password']");
    var passwordConfirmInput = document.querySelector("input[name='password2']");

    var selectInput = document.querySelector('select[name="birth-month"]');
    var radioInput = document.querySelector('input[name="gender"]:checked');
    var checkInput = document.querySelector('input[name="agree"]');

    console.log(accountInput.value);
    console.log(passwordInput.value);
    console.log(passwordConfirmInput.value);

    console.log(selectInput.value);
    console.log(radioInput.value);
    console.log(checkInput.value);

    var success = true;

    if(accountInput.value.length <6){
        showMessage(accountInput, '계정은 6자리 이상이어야합니다.');
        success = false;
    }
    if(passwordInput.value.length <10){
        showMessage(passwordInput, '비밀번호은 10자리 이상이어야합니다.');
        success = false;
    }
    if(passwordConfirmInput.value.length <10){
        showMessage(passwordInput, '비밀번호은 10자리 이상이어야합니다.');
        success = false; 
    }


    return false;
}


  
