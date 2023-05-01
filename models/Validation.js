function Validation() {
    this.checkEmty = function (value, idError, name) {
        if (value.trim() === '') {
            document.getElementById(idError).innerHTML = `This field is required`;
            return false;
        }
        document.getElementById(idError).innerHTML = '';
        return true;
    }
    this.checkLetter = function (value, idError, name) {
        var regexLetter = /^[A-Z a-z]+$/;
        if (regexLetter.test(value)) {
            document.getElementById(idError).innerHTML = '';
            return true;
        }
        document.getElementById(idError).innerHTML = ` Only letter!`;
        return false;
    }
    this.checkemail = function(value,idError,name){
        var regexEmail =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
        if(regexEmail.test(value)){
            document.getElementById(idError).innerHTML='';
            return true;
        }
        document.getElementById(idError).innerHTML=` Incorrect  Format ! `;
        return false;
    }
    this.checkPassword = function(value,idError,name){
        var regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&].{5,9}$/
        if(regexPassword.test(value)){
            document.getElementById(idError).innerHTML='';
            return true;
        }
        document.getElementById(idError).innerHTML=` at least 1 number , 1 uppercase , 1 special character, length from 6 to 10 `;
        return false;
    } 
    this.checkNumber = function(value,idError){
        var regexNumber =  /^[0-9]+$/;
        if(regexNumber.test(value)){
            document.getElementById(idError).innerHTML='';
            return true;
        }
        document.getElementById(idError).innerHTML='Only Number !';
        return false;
    }
    this.checkLength = function(value,idError,min,max){
        if(value.length<min || value.length>max){
            document.getElementById(idError).innerHTML=` from ${min} to ${max} letter`;
        return false;
        }
        document.getElementById(idError).innerHTML='';
        return true;
    }
}