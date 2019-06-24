import React, {Component} from 'react';
import Profile from './components/Profile.js';
import Projects from './components/Projects.js'
import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App">
      <Profile />
      <Projects />
    </div>
  );
}
}

export default App;
