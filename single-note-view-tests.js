function DisplaysSingleNotesInHtmlFormat(){
    var note = new SingleNoteView("Hey")
    assert.isTrue(note.outputhtml() == "<div>Hey</div>", "Displays note in html format")
}
DisplaysSingleNotesInHtmlFormat();