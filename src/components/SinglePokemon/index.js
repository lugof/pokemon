import {  Modal,Card,ListGroupItem,ListGroup } from 'react-bootstrap';
import React, { Component } from 'react';
import './style.css'
import Button from 'react-bootstrap/Button'
import { withRouter} from "react-router-dom"


class SinglePokemon extends Component{
    constructor(props){
        super(props)
        this.state={
            active:false
        }
    }
/**
 * Function to fetch card data and set the first modal flag to open
     * @param {object} pokeData poke data to render, coming from api
     * @param {array} allpokes all pokemons data 
     * @param {function} fetchSingle redux function to fetch pokemon moves
 */
    getSinglePokeData= ()=>{
        const{ pokeData,fetchSingle,openModal }=this.props
          fetchSingle(pokeData.url)
         openModal();
         
    }
/**
 * Function to obtain selected pokemon Id for router redirection
 * @param {object} pokeData pokemon individual data
 */
    fullInfo=async () =>{
        const { pokeData}=this.props
        const poke= await fetch(pokeData.url)
        const poke1 = await poke.json();
        this.props.history.push({
            pathname: `/fullInfo/${poke1.id}`
          })
    }
    render(){
        const{pokeData}=this.props
        return(
        <React.Fragment>
            <div className={'single-pokemon'}>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png" style={{width:'100px', height:'100px' }}  />
                <Card.Body>
                    <Card.Title>{pokeData.name}</Card.Title>
                    <Card.Text>
                        Click the button below to find more info about {pokeData.name}
                    </Card.Text>
                    <Button className={'description-button'} onClick={this.getSinglePokeData} variant={'success'} type={'submit'} size={'sm'}>Description</Button>
                    <Button className={'full-info--button'} onClick={this.fullInfo} variant={'primary'} type={'submit'} size={'sm'}>Pokemon Moves</Button>
                </Card.Body>
                </Card>
                </div>
        </React.Fragment>
        )
    }
}

export default withRouter(SinglePokemon)