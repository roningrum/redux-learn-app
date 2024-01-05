const initialState ={
    notes:[],
}
const notesReducer = (state = initialState, action)=>{
    console.log(action)
    switch(action.type){
        case 'ADD_NOTE':
            return{...state, notes:[...state.notes, action.payload]}
        case 'EDIT_NOTE':
            const {index, updatedNote} = action.payload
            const editNote = [...state.notes]
            editNote[index] = updatedNote
            return{...state, notes:editNote}
        case 'DELETE_NOTE':
            const updatedNotes = state.notes.filter((note, index) => index !== action.payload);
            return { ...state, notes: updatedNotes };
        default:
        return state
    }
}
export default notesReducer