import React, { Component } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import { connect } from 'react-redux';
import {fetchAll,fetchSingle,loading} from '../../actions/actionCreator'
import { Card, ListGroupItem, ListGroup,Col,Row, Button } from 'react-bootstrap'
import './style.css'
import { withRouter } from 'react-router';



class FullInfo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            basicUrl:'https://pokeapi.co/api/v2/pokemon/'
        }
    }
/**
 * ComponentDidMount to fetch single pokemon and render it's data
 * @param {function} fetchSingle redux function to fetch the single pokemon data
 * @param {object} match router props provided through redux
 * 
 */
    componentDidMount(){
        const{ fetchSingle,match}=this.props
        const{ basicUrl}=this.state
            fetchSingle(basicUrl+`${match.params.pokeNumber}`)
    }

/**
 * Function to redirect to MainPage
 */
        homePage=()=>{
            this.props.history.push({
                pathname: '/mainPage'
              })
        }
   
/**
 * Function to render a spinner if data has not been obtained from api
 * @param {object} singlePoke data to render, coming from api
 */
    chooseRender=()=>{
        const{ singlePoke}=this.props
        window.scrollTo({ top: 100, left: 100, behavior: 'smooth' });
        loading(false)
        if( singlePoke===null || singlePoke===undefined){
            return(
                <Spinner animation="border" role="status">
                    <span className="spinner-loading">Loading...</span>
                </Spinner>
            )
        }else{
            return(
               <div className={'card-move'} >

                                <Card bg={'light'} border={'primary'} style={{ width: '35rem' }}>
                                <Button className={'homePageButton'} onClick={this.homePage}>HomePage</Button>
                                    <Row  className={"nav-div"} >
                                    <Col md={4}> <Card.Img variant="top" src={`${singlePoke.sprites.back_default}`} /></Col>
                                      <Col md={4}> <Card.Img variant="top" src={`${singlePoke.sprites.front_default}`} /></Col>
                                      <Col md={4}> <Card.Img variant="top" src={`${singlePoke.sprites.front_shiny}`} /></Col>
                    </Row>
    
                <Card.Body>
                    <Card.Title>{singlePoke.name}</Card.Title>
                
                   <h5>Moves List:</h5>

                   
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup>
                    {singlePoke.moves.map((move,index)=>{
                        return( <ListGroupItem key={`pokemon-move__${move.move.name}`}> {index+1}.- {move.move.name}</ListGroupItem>)
                    })}
                    </ListGroup>
              
                </ListGroup>
                <Card.Body>

                </Card.Body>
                </Card>
                </div>
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
        isLoading: state.isLoading
    } ;   
}




 const mapDispatchToProps = dispatch=>{
    return{
        fetchAllPoke:(bool)=> dispatch(fetchAll(bool)),
        fetchSingle: url=> dispatch(fetchSingle(url)),
        loading: bool=> dispatch(loading(bool))
    }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps) (FullInfo))