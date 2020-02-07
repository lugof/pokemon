import { FETCH_SINGLE_POKEMON_SUCCESS, FETCH_ALL_POKEMONS_SUCCESS } from '../actions/actionTypes'


const initialState={
        allpokes:[],
        singlePoke:null
}

export function pokeReducer(state= initialState, action){
    switch(action.type){
        case FETCH_ALL_POKEMONS_SUCCESS:
            return {...state, allpokes:action.payload } 
        case FETCH_SINGLE_POKEMON_SUCCESS:
            return{...state, singlePoke:action.payload}
            default:
                return state;
    }
}

