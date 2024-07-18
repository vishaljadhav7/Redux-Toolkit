import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {id : nanoid(), title : "learning state management", content : "its important to know how to manage..." },
    {id: nanoid(), title : "slices...", content : "the more you create slices..."}
]

const postSlice = createSlice({
    name : "posts",
    initialState,
    reducers : {

    }
})

export const selectAllPosts = (state) => state.posts;

export default postSlice.reducer;

// what is the structure of the state/ store changes  so we'll create a selector in the slice itself & export it, now in that way the shape of the state ever change we don't have to go and make changes in each & every component in which we are making use of the state.posts, that is we can change only in the slice 