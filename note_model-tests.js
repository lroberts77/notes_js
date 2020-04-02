function takesTheTextOfANoteUponInstantiation() {
    var note = new Note("Hello world");
    assert.isTrue(note.text === "Hello world", "text-on-instantiation");
}
takesTheTextOfANoteUponInstantiation();

function MethodShouldReturnNoteText() {
    var note = new Note("Hello");
    var notetext = note.display();
    assert.isTrue(notetext === "Hello", "display-note");
}
MethodShouldReturnNoteText();
