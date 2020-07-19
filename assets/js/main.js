document.addEventListener("DOMContentLoaded", () => {
  console.log("document chargé");

  const contactForm = document.querySelector("#contactForm");
  const button = document.querySelector("button");

  contactForm.addEventListener("submit", async (event) => {
    // console.log("CLICK");
    event.preventDefault();
    button.setAttribute("disabled", "disabled");
    button.classList.add("btn-disabled");
    const data = {
      firstname: document.querySelector("#firstname").value,
      lastname: document.querySelector("#lastname").value,
      email: document.querySelector("#email").value,
      title: document.querySelector("#title").value,
      message: document.querySelector("#message").value,
    };
    // console.log(data);
    const response = await axios.post(
      "https://formulaire-backend-greg.herokuapp.com/",
      data
    );
    console.log(response);
    if (response.status !== 200) {
      alert("Le formulaire n'a pas pu etre envoyé !");
      button.removeAttribute("disabled");
      button.classList.remove("btn-disabled");
    } else {
      alert("Le formulaire a bien ete envoyé !");
      button.removeAttribute("disabled");
      button.classList.remove("btn-disabled");
      contactForm.reset();
    }
  });
});
