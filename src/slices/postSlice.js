import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {id : nanoid(), title : "learning state management", content : "its important to know how to manage..." },
    {id: nanoid(), title : "slices...", content : "the more you create slices..."}
]

const postSlice = createSlice({
    name : "post",
    initialState,
    reducers : {

    }
})

export default postSlice.reducer;