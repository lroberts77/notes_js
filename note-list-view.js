
function NoteListView(noteList){
    this.noteList = noteList;
    }

NoteListView.prototype = (function()
{

     function htmlnotes(){
         
        if(this.noteList.list.length === 0){
            return "No notes added";
        } else {
            var htmlNotesList = [];

            this.noteList.list.forEach(item => {
                htmlNotesList.push("<li><div>" + item.text + "</div></li>");
            });
            return "<ul>" + htmlNotesList.join("") + "</ul>";
        }
        
    }
    return {
        htmlnotes: htmlnotes

    }
})();

//     index = 0; 
      
//     listViewAll.forEach(myFunction); 
//     function myFunction(item, index) 
//     { 
//     var htmlnotes = `<div>${item}</div>` ; 
//     }
//     {
//         console.log(`<ul><li>${htmlnotes}</li></ul>`) ;
//     }


// // NotelistView.prototype.listview = function(){
// //     return this.list
// // }