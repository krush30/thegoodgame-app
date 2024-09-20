import { createSlice } from "@reduxjs/toolkit";

const pokeSlice = createSlice({
    name: "pokemons",
    initialState: {
        knownpokemons: null
    },
    reducers: {
        addKnownPokemon: (state, action) => {
            state.knownpokemons = action.payload;
        }
    }
})

export const { addKnownPokemon } = pokeSlice.actions;
export default pokeSlice.reducer;