import {  Modal,Card,ListGroupItem,ListGroup } from 'react-bootstrap';
import React, { Component } from 'react';
import './style.css'
import Button from 'react-bootstrap/Button'

class SinglePokemon extends Component{
    constructor(props){
        super(props)
        this.state={
            active:false
        }
    }

    getSinglePokeData= ()=>{
        const{ pokeData,fetchSingle,openModal }=this.props
          fetchSingle(pokeData.url)
         openModal();
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
                    <Button onClick={this.getSinglePokeData} variant={'success'} type={'submit'}> More info... </Button>
                </Card.Body>
                </Card>
                </div>
        </React.Fragment>
        )
    }
}

export default SinglePokemon