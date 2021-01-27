let email= document.getElementById("email");
let pwd = document.getElementById("pwd");
let phonenumber = document.getElementById("phonenumber");
let username = document.getElementById("username");

var passw = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
function vaildate(){
    
     if(pwd.value.length<=5){
        alert("Password is poor");
        pwd.style.border="2px solid red";
        return false;
     }
    else if(pwd.value.length<=8){
        alert("Password is medium");
        pwd.style.border="2px solid orange";
        return false;
    }
    else if(pwd.value.length<=9){
        alert("Password is strong");
        pwd.style.border="2px solid green";
        return true;
    }
    else if(passw.test(email.value)) {
        return true;
    }
    else{
        alert("validate successfully");
        return true;
    }

}