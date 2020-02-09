import React from 'react';
import './App.css';
import Container from '../src/components/Container/index'
import {BrowserRouter as Router} from 'react-router-dom'



function App() {
      return (
    <div>
        <Router>
        <React.Fragment >
            <Container/>
        </React.Fragment>

        </Router>

    </div>
)
}

export default App;
