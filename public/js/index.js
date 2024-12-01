//email form
const emailForm = document.getElementById("contactForm");

path = '/send-email';

const sendEmailContact = async (sender, email, subject, message) => {

  try {

    const response = await fetch(path, {
      method: "POST",
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        sender,
        email,
        subject,
        message
      })
    });

    console.log(response);

  } catch (error) {
    console.error('Error sending email:', error);
  }
}

emailForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  sendEmailContact(name, email, subject, message);

})