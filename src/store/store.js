import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "../reducers/noteReducer";


const store = configureStore(
    {
        reducer: notesReducer
    }
)
export default store