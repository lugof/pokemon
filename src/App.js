import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from '../src/components/MainPage/index'
import { Provider } from "react-redux"
import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {pokeReducer } from './reducer/pokeReducer'



function App() {
      return (
    <div>
        <MainPage/>
    </div>
)
}

export default App;
