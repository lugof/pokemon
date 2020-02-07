import apiService1 from '../services/apiService';
import { FETCH_SINGLE_POKEMON_SUCCESS,FETCH_ALL_POKEMONS_SUCCESS } from './actionTypes'
import axios from "axios"

export function fetchAll (){
return dispatch=>{
    apiService1.get('https://pokeapi.co/api/v2/pokemon')
    .then(response=>{
        dispatch({
            type:FETCH_ALL_POKEMONS_SUCCESS,
            payload: response.data.results
        })
    }).catch((error)=>{
        console.log(error)
    })
}
}

export function fetchSingle (url){
    return dispatch=>{
        apiService1.get(url)
        .then(response=>{
            dispatch({
                type:FETCH_SINGLE_POKEMON_SUCCESS,
                payload: response.data
            })
        }).catch((error)=>{
        console.log(error)
        })
    }
}