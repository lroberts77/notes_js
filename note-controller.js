function NoteController(noteList){
this.noteList = noteList
this.noteList.create("favourite drink: seltzer")
this.noteListView = new NoteListView(noteList)
}

NoteController.prototype = (function(){

    function htmlinsert(){
       return document.getElementById("app").innerHTML = this.noteListView.htmlnotes()
}
return{
    htmlinsert: htmlinsert

}
})();


noteList = new NoteList
noteController = new NoteController(noteList)
noteController.htmlinsert()