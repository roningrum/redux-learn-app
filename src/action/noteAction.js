export const addNote = (note) =>{
    return{
        type:'ADD_NOTE',
        payload:note
    }
}

export const editNote =(index, updateNote)=>{
    return{
        type:'EDIT_NOTE',
        payload:{index, updateNote}
    }
}

export const deleteNote = (index)=>({
        type:'DELETE_NOTE',
        payload: index
})