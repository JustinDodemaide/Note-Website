function sendNote(){
    /*
    1. take the note from the inputbox
    2. clear the note from the input box
    3. add the note at the bottom of our notes list
    */
    const inputElement = document.getElementById('input');
    const noteContent = inputElement.value;
    inputElement.value = "";

    // li = list
    let newNote = document.createElement("li");
    newNote.style = "height: 150px;";
    newNote.style.backgroundColor = getRandomColor();
    newNote.classList.add("container");
    newNote.classList.add("inner-container");
    newNote.innerHTML = noteContent;
    let allNotes = document.getElementById("notes");
    allNotes.appendChild(newNote);
}

function getRandomColor(){
    return "#ffc2cd"
}