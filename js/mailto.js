function sendEmail(){
    name = document.getElementById('fr_name').value;
    email = document.getElementById('fr_email').value;
    subject = document.getElementById('fr_subject').value;
    message = document.getElementById('fr_message').value;
    
    href="mailto:lakshnri@gmail.com?subject="+subject+" &body="+'Name: '+name+'%0D%0A'+'email: '+email+'%0D%0A'+'message: '+message;
    href = href.replace('\n', '%0D%0A').replace(' ', '%20')

    window.open(href, "_self");
}