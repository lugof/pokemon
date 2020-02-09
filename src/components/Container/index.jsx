import React from 'react';
import {Switch, Route, Redirect, withRouter } from 'react-router-dom'
import MainPage from '../MainPage/index'
import { connect} from 'react-redux';
import {fetchAll,fetchSingle} from '../../actions/actionCreator'
import  FullInfo  from '../FullInfo/index'

class Container extends React.Component{
    
    /**
     * Fetch all pokemons to render content
     * @param {function} fetchAllPoke redux funtion to fetch all pokemons from api
     */
    componentDidMount(){
        const { fetchAllPoke }=this.props
           fetchAllPoke(true);
    }
    render(){
        return(
            <div style={{width:"100", padding: "10px", backgroundColor:"antiquewhite"}}>
                <Switch>
        <Route exact path='/fullInfo/:pokeNumber' render={ (match)=> <FullInfo match={match}/>}/>
                    <Route exact path='/mainPage' render={ (match)=> <MainPage match={match}/> }/>
                    <Route exact path='/not-found' render={()=> { return( <h1>Not found</h1>)}}/>
                    <Redirect from= '/' to ='mainPage'/>
                    <Redirect from ='*' to ='not-found'/>
                </Switch>


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

export default withRouter(connect(
    mapStateToProps,mapDispatchToProps)(Container));
