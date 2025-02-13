document.querySelector(".register-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const bio = document.getElementById("bio").value;
    const skills = document.getElementById("skills").value;
    const availability = document.getElementById("availability").value;

    console.log("Name:", name);
    console.log("Bio:", bio);
    console.log("Skills:", skills);
    console.log("Availability:", availability);

    alert("Form submitted! (Currently without backend)");
});