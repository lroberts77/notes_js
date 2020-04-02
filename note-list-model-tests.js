function ListInstantiatedWithAnEmptyArray() {
    var notelist = new NoteList();
    assert.isTrue(notelist.list.length === 0, "empty-array");
}
ListInstantiatedWithAnEmptyArray();

function CreatesANewNote(){
    var notelist = new NoteList();
    notelist.create("Hi")
    console.log(notelist)
    assert.isTrue(notelist.list[0].text == "Hi", "Creates-a-new-note")
}
CreatesANewNote()

function DisplaysAllNotes(){
    var notelist = new NoteList();
    notelist.create("Hi")
    notelist.create("Hey")
    var notes = notelist.displayall();
    console.log(notes)
    assert.isTrue(notes[0].text == "Hi", "Displays-all-notes")
    assert.isTrue(notes[1].text ==  "Hey", "Displays-all-notes")
}
DisplaysAllNotes()
    