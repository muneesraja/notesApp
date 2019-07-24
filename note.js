const fs = require('fs')

const addNote = (title, body) => {
    const existingNote = existingNotes();
    const duplicationCheck = existingNote.filter((data) => {
        return data.title == title
    })
    if(duplicationCheck.length != 0){
        return console.log("Title name already exists")
    }
    existingNote.push({title, body})
    writeNewNote(existingNote);
    console.log("Note successfully added")
}

const removeNote = (title) => {
    const existingNote = existingNotes();
    const checkedNote = existingNote.filter((data) => {
        return data.title != title
    })
    if(checkedNote.length != existingNote.length){
        writeNewNote(checkedNote)
        console.log("Note successfully Deleted")
    }else{
        console.log("The note title not found")
    }
}

const readNote = (title) => {
    const existingNote = existingNotes();
    const noteRead = existingNote.filter((data) => {
        return data.title == title
    })
    if(noteRead.length == 0){
        return console.log("Title not available")
    }
    console.log(noteRead[0].body)
}

const listNotes = () => {
    const existingNote = existingNotes()
    const listedNote = existingNote.map((data) => {
        const noteTitle = data.title;
        return data.title,noteTitle
    })
    if(listedNote.length == 0){
        console.log("There is no data to read")
    }else{
        for (const i in listedNote){
            console.log(listedNote[i])
        }
    }
}

const existingNotes = () => {
    try{
        const existFile = fs.readFileSync('note.json')
        const parsedToJs = JSON.parse(existFile)
        return parsedToJs
    }catch(e){
        return [];
    }
}


const writeNewNote = (noteToadd) => {
    const parsedFile = JSON.stringify(noteToadd)
    fs.writeFileSync("note.json", parsedFile)
}
module.exports = {
    add:addNote,
    remove:removeNote,
    read:readNote,
    list:listNotes
}