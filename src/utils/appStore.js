import { configureStore } from "@reduxjs/toolkit";
import pokemonreducer from "./pokeSlice";

const appStore = configureStore({
    reducer: {
        pokemons: pokemonreducer
    }
})

export default appStore;