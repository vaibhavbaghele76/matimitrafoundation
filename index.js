const college1 = document.getElementById("mmfwebsi");
const college2 = document.getElementById("matimitralink");

college1.addEventListener("click", () => {
  college2.classList.toggle("show");
});

setTimeout(() => {
  document.getElementById("donatepopupmatimitra").style.display = "flex";
}, 2000);

function matimitraclosepopup() {
  document.getElementById("donatepopupmatimitra").style.display = "none";
}

const popup = document.getElementById("donatepopupmatimitra");
setTimeout(() => (popup.style.display = "flex"), 2000);
function matimitraclosepopup() {
  popup.style.display = "none";
}
