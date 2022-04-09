function sendMail(contactForm) {
    emailjs.send("service_8iw7r1g", "template_m9mos9v", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            alert("Your email was sent successfully!", response);
        },
        function(error) {
            alert("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}