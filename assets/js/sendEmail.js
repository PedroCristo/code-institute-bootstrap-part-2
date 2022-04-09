const EMAIL_SUCCESS = "Your email was sent successfully!";
const EMAIL_ERROR = "Your email was not sent! Please try again.";

function sendMail(contactForm) {
    emailjs.send("service_8iw7r1g", "template_m9mos9v", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.projectsummary.value
    })
    .then(
        function() {
            document.getElementById("email-success").innerHTML = EMAIL_SUCCESS;
        },
        function() {
            document.getElementById("email-error").innerHTML = ERROR;
         
        }
    );
    return false;  // To block from loading a new page
}