document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for anchor links
  const links = document.querySelectorAll("a[href^='#']");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Dynamic year update in footer
  const footerYear = document.querySelector("footer p");
  if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.textContent = `\u00A9 ${currentYear} Your Name. All rights reserved.`;
  }

  // Email button functionality
  const emailButton = document.querySelector(".contact-button");
  if (emailButton) {
    emailButton.addEventListener("click", () => {
      window.location.href = "mailto:ghogarevaishnavi8@example.com";
    });
  }
});
