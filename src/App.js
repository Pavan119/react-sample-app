import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MultiLine from './MultiLine';
import DropDown from './DropDown';

class App extends Component {


  constructor(props) {
    super(props);

    this.state = {
     
      greetMsg:'Good morning',
      names:[],
      // name:'?'
    };
  }

  handleInput = (event) => {
    // console.log(event);
      var names = event.target.value.split('\n');
      this.setState({names})
  };
  
  changeLang = (event) => {
    console.log(event);
    if(event.target.value=='fr'){
      this.setState({greetMsg:'Bonjour'})
    }else{
      this.setState({greetMsg:'Good morning'});
    }
      
  };


  render() {
    
    return (
      <div className="App">
        <MultiLine handleInput={this.handleInput}/>
        <DropDown changeLang={this.changeLang} />
        
        {this.state.names.map((name,i) => {
          return (<h1 key={i}> {name}, {this.state.greetMsg}</h1>)
        })}
      
      </div>
    );
  }
}

export default App;
