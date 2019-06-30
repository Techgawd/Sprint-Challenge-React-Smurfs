import React, { Component } from 'react';
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
      <div className="App">
        <SmurfForm reloadSmurfs={this.reloadSmurfs}/>
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;