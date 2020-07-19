document.addEventListener("DOMContentLoaded", () => {
  console.log("document chargé");

  const contactForm = document.querySelector("#contactForm");
  contactForm.addEventListener("submit", async (event) => {
    // console.log("CLICK");
    event.preventDefault();
    const data = {
      firstname: document.querySelector("#firstname").value,
      lastname: document.querySelector("#lastname").value,
      email: document.querySelector("#email").value,
      title: document.querySelector("#title").value,
      message: document.querySelector("#message").value,
    };
    // console.log(data);
    const response = await axios.post("http://localhost:3000/", data);
    console.log(response);
  });
});
