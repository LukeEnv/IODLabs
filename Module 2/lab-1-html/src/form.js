function submitForm(e) {
  e.preventDefault();

  console.log(e);

  var formData = new FormData(e.target);

  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");
  const language = formData.get("language");
  const vehicle = formData.getAll("vehicle");
  const brand = formData.get("brand");

  console.log(vehicle);

  const profile = {
    firstname,
    lastname,
    language,
    vehicle,
    brand,
  };

  fetch("http://localhost:3000/profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profile),
  })
    .then((res) => {
      if (res.ok) {
        console.log("Form submitted successfully");
        //window.location.href = "http://localhost:3000/profile";
      } else {
        console.error("Form submission failed");
      }
    })
    .catch((err) => {
      console.error("Form submission failed");
    });
}
