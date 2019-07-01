import React, { Component } from 'react';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs').then(response => this.setState({smurfs : response.data})).catch(error => console.log(error));
  }

  reloadSmurfs = (newSmurfs) => {
    this.setState({
      smurfs: newSmurfs
    })
  }
  
  render() {
    return (
      <Router>
      <div className="App">
      
      <div className = 'nav-bar'>
      <NavLink to = '/'>Smurfs</NavLink>
      <NavLink to = '/smurf-form'>Add Smurfs</NavLink>
      </div>
      
      <Route exact path = '/' render = {(props) => <Smurfs {...props} smurfs = {this.state.smurfs} />} />
      <Route path = '/smurf-form' render = {(props) => <SmurfForm {...props} reloadSmurfs = {this.reloadSmurfs} />} />
      
      
      </div>
      </Router>
    );
  }
}

export default App;
