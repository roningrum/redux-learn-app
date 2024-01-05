import { useState } from "react"
import { useDispatch } from "react-redux"
import { addNote, editNote } from "../action/noteAction"
import { Button, TextInput, View } from "react-native"

const NoteForm = ()=>{
    const [noteText, setNoteText] = useState('')
    const dispatch = useDispatch()

    const handleAddNote = ()=>{
        if(noteText.trim() !== ''){
            dispatch(addNote(noteText))
            setNoteText('')
            console.log("Note", noteText)
        }
    }

    return(
        <View>
            <TextInput
            placeholder="Type your note"
            value={noteText}
            onChangeText={(text)=> setNoteText(text)}
            />
            <Button title="Add Note" onPress={handleAddNote}/>
        </View>
    )
}

export default NoteForm