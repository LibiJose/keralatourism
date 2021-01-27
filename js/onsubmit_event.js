function ValidationEvent() {
    // Storing Field Values In Variables
    var name = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("phonenumber").value;
    // Regular Expression For Email
    var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
    // Conditions
    if (name != '' && email != '' && contact != '') {
    if (email.match(emailReg)) {
    if (pwd.value.length<=8) {
    if (contact.length == 10) {
    alert("All type of validation has done on OnSubmit event.");
    return true;
    } else {
    alert("The Contact No. must be at least 10 digit long!");
    return false;
    }
    } else {
        alert("Password is medium");
        pwd.style.border="2px solid orange";
        return false
    }
    } else {
    alert("Invalid Email Address...!!!");
    return false;
    }
    } else {
    alert("All fields are required.....!");
    return false;
    }
    }