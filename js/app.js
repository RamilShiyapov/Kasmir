(() => {
  const Body = document.body;

  const MobileMenuButtons = document.querySelectorAll(".MobileMenuButton");

  MobileMenuButtons.forEach((MobileMenuButton) => {
    MobileMenuButton.addEventListener("click", () => {
      Body.style.overflow = Body.style.overflow === "hidden" ? "auto" : "hidden";
    });
  });
})();
