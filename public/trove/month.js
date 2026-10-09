for (const crab of document.querySelectorAll(".crab")) {
  const dialog = document.getElementById(crab.dataset.dialog);
  dialog.style.setProperty("--crab", crab.style.getPropertyValue("--crab"));
  crab.innerHTML = `
    <img class="crab-idle" src="/img/crab-idle.png" alt="" />
    <img class="crab-o" src="/img/crab-o.png" alt="" />
    <span class="bubble">${crab.textContent}</span>`;

  crab.addEventListener("click", () => {
    const { left, top, width, height } = crab.getBoundingClientRect();
    dialog.style.setProperty("--x", `${left + width / 2}px`);
    dialog.style.setProperty("--y", `${top + height / 2}px`);
    dialog.showModal();
    history.pushState({ dialog: dialog.id }, "");
  });
}

for (const dialog of document.querySelectorAll(".dialog")) {
  dialog.insertAdjacentHTML("afterbegin", '<form method="dialog"><button class="link-button">X</button></form>');
  dialog.addEventListener("close", () => {
    if (history.state?.dialog) history.back();
  });
}

window.addEventListener("popstate", () => {
  document.querySelector(".dialog[open]")?.close();
});
