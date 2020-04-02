function instanceReceivesNoteList(){
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.noteList.list.length === 0, "instance of note list view receives a note list");
};
instanceReceivesNoteList();

function htmlnotes(){
    var noteList = new NoteList();
    noteList.create("test");
    var noteListView = new NoteListView(noteList);
    var htmlnotes = noteListView.htmlnotes();
    assert.isTrue(htmlnotes === "<ul><li><div>test</div></li></ul>", "html format");
}
htmlnotes();

function htmlnotesNoNotes(){
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    var htmlnotes = noteListView.htmlnotes();
    assert.isTrue(htmlnotes === "No notes added", "html format with no notes"); 
}
htmlnotesNoNotes();