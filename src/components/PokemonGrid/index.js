import { Button, Modal,Col,Row,Image } from 'react-bootstrap';
import React, { Component } from 'react';
import SinglePokemon from '../SinglePokemon/index';
import './style.css'


class PokemonGrid extends Component{
    constructor(props){
        super(props)
        this.state={
            showModal:false,
            couldModalshow:false
        }
    }
    componentDidUpdate(prevProps){
        const{ couldModalshow}=this.state
        const{ singlePoke}=this.props
        if(singlePoke!== prevProps.singlePoke && couldModalshow===true){
            this.setState({showModal:true})
            return false
        }
        return true
    }

    openModal=()=>{
        this.setState({couldModalshow:true})
    }

    closeModal=()=>{
        this.setState({showModal:false})
    }

    render(){
        const{ allPokes,fetchSingle,singlePoke }=this.props
        const{showModal}=this.state
        return(
            <React.Fragment>
        <div className='pokemonGrid-container'>
       
            {allPokes && allPokes.length>0 && allPokes.map((poke)=>{
                return(    <SinglePokemon pokeData={poke} key={`poke-${poke.name}`} fetchSingle={fetchSingle} openModal={this.openModal}/>)
            
            })}

              { singlePoke && singlePoke.species &&( 
              <Modal show={showModal} onHide={this.closeModal} size={'lg'}>
                        <Modal.Header closeButton>
                            <Modal.Title>{singlePoke.species.name}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Row>
                            <Col md={4}>
                                <Image src={singlePoke.sprites.front_default} rounded/>
                                <h5>Abilities:</h5>
                                    {singlePoke.abilities.map((ability)=>{
                                        return( <p> + {ability.ability.name}</p>)
                                    })}
                            </Col>
                            <Col md={4}>
                                <Image src={singlePoke.sprites.back_default} rounded/>
                                <h5>Types:</h5>
                                    {singlePoke.types.map((type)=>{
                                        return( <p> + {type.type.name}</p>)
                                    })}
                            </Col>
                            <Col md={4}>
                                <Image src={singlePoke.sprites.front_shiny} rounded/>
                                       <h5>General Info:</h5>
                                       <p>Base experience: {singlePoke.base_experience}</p>
                                       <p>Height: {singlePoke.height}</p>
                                       <p>Weight: {singlePoke.weight}</p>
                            </Col>
                            </Row>
                        
                 
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.closeModal}>Close</Button>
                        </Modal.Footer>
                </Modal>)
                 }
                 </div>
        </React.Fragment> )
    }
}

export default PokemonGrid