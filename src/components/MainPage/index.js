import { Button, Modal } from 'react-bootstrap';
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import {fetchAll,fetchSingle} from '../../actions/actionCreator'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import Spinner from 'react-bootstrap/Spinner'
import PokemonGrid from '../PokemonGrid/index'


class MainPage extends React.Component{

    componentDidMount(){
        const { fetchAllPoke }=this.props
           fetchAllPoke(true);
    }

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
        singlePoke: state.singlePoke
    } ;   
}




 const mapDispatchToProps = dispatch=>{
    return{
        fetchAllPoke:(bool)=> dispatch(fetchAll(bool)),
        fetchSingle: url=> dispatch(fetchSingle(url))
    }
}

export default connect(
    mapStateToProps,mapDispatchToProps)(MainPage)
