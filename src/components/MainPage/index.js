import { Button, Modal } from 'react-bootstrap';
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import {fetchAll,fetchSingle,loading} from '../../actions/actionCreator'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import Spinner from 'react-bootstrap/Spinner'
import PokemonGrid from '../PokemonGrid/index'


class MainPage extends React.Component{

    /**
     * Function to render the pokemonGrid component in case all info has been fetched
     * @param {object} singlePoke poke moves to render, coming from api
     * @param {array} allpokes all pokemon data to feed PokemonGrid props
     * @param {function} fetchAllPoke redux function to fetch all pokemons and feed pokemonGrid
     * @param {function} fetchSingle redux function to fetch pokemon moves
     */
    chooseRender=()=>{
        const{ allPokes,fetchAllPoke,fetchSingle,singlePoke }=this.props
        if(allPokes===undefined || allPokes===null){
            return(
                <Spinner animation="border" role="status">
                        <span className="spinner-loading">Loading...</span>
                </Spinner>
            )
        }else{
            return(
                <PokemonGrid allPokes={allPokes} fetchSingle={fetchSingle} fetchAllPoke={fetchAllPoke} singlePoke={singlePoke}/>
            )
        }
    }

    render(){
        return(
            <div>
                {this.chooseRender()}
            </div>
        )
    }
}


 const mapStateToProps = state=> {
    return{
        allPokes: state.allpokes,
        singlePoke: state.singlePoke,
        isLoading:state.isLoading
    } ;   
}




 const mapDispatchToProps = dispatch=>{
    return{
        fetchAllPoke:(bool)=> dispatch(fetchAll(bool)),
        fetchSingle: url=> dispatch(fetchSingle(url)),
        loading: bool=> dispatch(loading(bool))
    }
}

export default connect(
    mapStateToProps,mapDispatchToProps)(MainPage)
