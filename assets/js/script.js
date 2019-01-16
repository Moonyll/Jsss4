function alert()
{
    if (document.getElementById('password').value == document.getElementById('confirmPassword').value)
    //condition si le mot de passe entré et la confirmation sont identiques.
    {
    //création de la bordure verte.
    document.getElementById('password').style.border = '3px solid green';
    document.getElementById('confirmPassword').style.border = '3px solid green';
    }
    else
    //condition si le mot de passe entré et la confirmation sont differents.
    {
    //création de la bordure rouge.
     document.getElementById('password').style.border = '3px solid red';
     document.getElementById('confirmPassword').style.border = '3px solid red';
    }
}