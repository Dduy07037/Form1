function submitForm() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var age = document.getElementById("age").value;
    var dob = document.getElementById("dob").value;
    var occupation = document.getElementById("occupation").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;

    var formboldForm = document.getElementById("userForm");
    formboldForm.elements["firstname"].value = firstname;
    formboldForm.elements["lastname"].value = lastname;
    formboldForm.elements["age"].value = age;
    formboldForm.elements["dob"].value = dob;
    formboldForm.elements["occupation"].value = occupation;
    formboldForm.elements["email"].value = email;
    formboldForm.elements["address"].value = address;

    formboldForm.submit();
    setTimeout(function() {
        window.location.reload();
    }, 1000); 
}