
function NoteList(){
this.list = []
};

NoteList.prototype = (function(){

function create(text){
    this.list.push(new Note(text));
    
};

function displayall(){
    return this.list;
};

return {
    create: create,
    displayall: displayall
}

})();
