var element = document.getElementById("modal");

var elementDel = document.getElementById("modal-delete");
function openModal() {
  element.classList.add("open-modal");
}
function closeModal() {
  element.classList.remove("open-modal");
}

function openModalDelete() {
  elementDel.classList.add("open-modal-delete");
}
function closeModalDelete() {
  elementDel.classList.remove("open-modal-delete");
}
