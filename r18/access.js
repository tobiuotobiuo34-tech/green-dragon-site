(function () {
  const key = "gnd_r18_confirmed";
  const confirmButton = document.querySelector("[data-age-confirm]");
  const leaveButton = document.querySelector("[data-age-leave]");
  if (document.body.hasAttribute("data-r18-protected") && sessionStorage.getItem(key) !== "yes") {
    location.replace("../index.html");
    return;
  }
  if (confirmButton) confirmButton.addEventListener("click", function () {
    sessionStorage.setItem(key, "yes");
    location.href = "games/index.html";
  });
  if (leaveButton) leaveButton.addEventListener("click", function () {
    sessionStorage.removeItem(key);
    location.href = "../../index.html";
  });
})();
