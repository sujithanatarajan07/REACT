import'./College.css'
const dobInput = document.getElementById("dob");
const ageInput = document.getElementById("age");
const markInput = document.getElementById("mark");
const form = document.getElementById("admissionForm");
const message = document.getElementById("message");

dobInput.max = new Date().toISOString().split("T")[0];

dobInput.addEventListener("change", function () {
    if (!dobInput.value) {
        ageInput.value = "";
        return;
    }

    const birthDate = new Date(dobInput.value + "T00:00:00");
    const today = new Date();

    if (birthDate > today) {
        ageInput.value = "";
        message.textContent = "Please select a valid date of birth.";
        message.style.color = "red";
        return;
    }

    let age = today.getFullYear() - birthDate.getFullYear();

    const birthdayNotReached =
        today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() &&
         today.getDate() < birthDate.getDate());

    if (birthdayNotReached) {
        age--;
    }

    ageInput.value = age;
    message.textContent = "";
});

// Validate and submit the form
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const mark = Number(markInput.value);

    if (mark < 0 || mark > 600 || markInput.value === "") {
        message.textContent = "Enter a valid mark between 0 and 600.";
        message.style.color = "red";
        return;
    }

    if (!ageInput.value || Number(ageInput.value) < 1) {
        message.textContent = "Please select a valid date of birth.";
        message.style.color = "red";
        return;
    }

    message.style.color = "green";
    message.textContent =
        "Application submitted successfully! Thank you.";

    form.reset();
    ageInput.value = "";
});
export default College