import { FETCH_SINGLE_POKEMON_SUCCESS, FETCH_ALL_POKEMONS_SUCCESS,LOADING_POKEMON } from '../actions/actionTypes'
import{ loading } from '../actions/actionCreator'


const initialState={
        allpokes:[],
        singlePoke:null,
        isLoading:false
}

export function pokeReducer(state= initialState, action){
    switch(action.type){
        case FETCH_ALL_POKEMONS_SUCCESS:
            return {...state, allpokes:action.payload } 
        case FETCH_SINGLE_POKEMON_SUCCESS:
            return{...state, singlePoke:action.payload}
        case LOADING_POKEMON:
            return{...state, isLoading:action.payload}    
            default:
                return state;
    }
}

