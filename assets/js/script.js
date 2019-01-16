function alert() {
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');
    if (password.value == confirmPassword.value)
    //condition si le mot de passe entré et la confirmation sont identiques.
    {
        //création de la bordure verte.
        password.style.border = '3px solid green';
        confirmPassword.style.border = '3px solid green';
    }
    else
    //condition si le mot de passe entré et la confirmation sont differents.
    {
        //création de la bordure rouge.
        password.style.border = '3px solid red';
        confirmPassword.style.border = '3px solid red';
    }
}