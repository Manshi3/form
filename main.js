let popup = document.getElementById("popup");
function openPopup() {
    popup.classList.add("open-popup");
}
function closePopup() {
    popup.classList.remove("open-popup");
}
function closePopup() {
    const element = document.getElementById("invoice");
    html2pdf()
    .from(element)
    .save();
}