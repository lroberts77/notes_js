function SingleNoteView(text){
    this.text = new Note(text)

}

SingleNoteView.prototype.outputhtml = function(){
    
    return "<div>" + this.text.display() + "</div>"
}

// SingleNoteView.prototype = (function(){

//     function outputhtml(){
//         return "<div>" + this.text.display + "</div>";
//     }
//     return {
//         outputhtml: outputhtml
    
//     }
//     })();
