function validate() {
    var email = document.myForm.email.value;
    
    if( document.myForm.np.value == "" ) {
       alert( "Veuillez fournir votre nom complet" );
       document.myForm.np.focus() ;
       return false;
    }
    if( email == "" ) {
       alert( "Veuillez fournir votre email" );
       document.myForm.email.focus() ;
       return false;
    }

    if( document.myForm.tel.value == "" ) {
        alert( "Veuillez fournir votre numéro de téléphone" );
        document.myForm.tel.focus() ;
        return false;
    }

    if( !document.myForm.tel.value.match(/^\d{8}$/)) {
        alert( "Veuillez fournir un numéro de téléphone valide" );
        document.myForm.tel.focus() ;
        return false;
    }

    if( document.myForm.sujet.value == "" ) {
        alert( "Veuillez spécifier le sujet" );
        document.myForm.sujet.focus() ;
        return false;
    }

    if( document.myForm.message.value == "" ) {
        alert( "Veuillez spécifier votre message" );
        document.myForm.message.focus() ;
        return false;
    }

    // Validation email n'est past necessaire grace á HTML5
    /* atpos = email.indexOf("@");
    dotpos = email.lastIndexOf(".");

    if (atpos < 1 || ( dotpos - atpos < 2 )) {
        alert("Veuillez entrer un email valide")
        document.myForm.email.focus() ;
        return false;
    } */
    
    document.getElementById("button").value = "Merci!";
    setTimeout(function(){
        document.getElementById("button").value = "Message envoyé";
    },3000);
    
    return( true );
}