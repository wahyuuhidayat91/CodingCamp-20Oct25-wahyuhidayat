welcomeSpeech();

function welcomeSpeech() {
    let name = "Wahyu";

    document.getElementById('greet-name').innerHTML = `Hi ${name}, `;
}

function validateForm() {
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const message = document.getElementById('message-input').value;

    if (name === "" || email === "" || message === "") {
        alert("All fields are required !");
    } else {
        alert(`Thank you ${name}, your message has been submitted successfully!`);
    }
}