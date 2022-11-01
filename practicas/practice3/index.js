const form = {};
form.addNotesForm = document.querySelector("#notes-add__form");
form.addNotesText = document.querySelector("#notes-add__text");
form.addNotesButton = document.querySelector("#notes-add__button");
form.addNotesSelect = document.querySelector("#notes-add__select");

form.addNotes = document.querySelector("#notes-list");

document.addEventListener("submit", (event) => {
  event.preventDefault();
  addNote();
});

addNote = () => {
  const textValue = form.addNotesText.value;
  let note = document.createElement("div");
  const color = form.addNotesSelect.value;
  const messages = document.querySelector(".notes-messages");

  note.classList.add("note-card");
  note.style.borderColor = color;
  if (textValue.length > 0) {
    messages.style.display = "none";
    note.innerHTML = `
    <p>${textValue}</p>
    <button type="button" class="note-card__delete">X</button>
  `;
    const button = note.querySelector(".note-card__delete");

    deleteNote(button);
    form.addNotes.appendChild(note);
    form.addNotesText.value = "";
    form.addNotesSelect.value = "";
  } else{
    messages.style.display = "block";
  }
};

const deleteNote = (deleteButton) => {
  deleteButton.addEventListener("click", () => {
    console.log("parent ", deleteButton.parentElement);
    deleteButton.parentElement.remove();
  });
};
