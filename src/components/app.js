import React,   { Component } from 'react';
import Button from './button.js';
import Sounds from '../assets/sounds.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      sounds: Object.keys(Sounds)
    }
    this.playSound = this.playSound.bind(this);
  }

  playSound(eventObj) {
    //code to be run when click event is fired goes below this line!
    console.log(eventObj.currentTarget.id)
    const id = eventObj.currentTarget.id;
    const audio = Sounds[id]
    audio.play()
  }

  render(){
    const button = this.state.sounds.map((sounds, index) => {
      return <Button key={index} 
      sound={this.state.sounds[index]} 
      playSound={this.playSound}
      ></Button>
    })
    // const button = [
    //   <Button key={1}/>, 
    //   <Button key={2}/>, 
    //   <Button key={3}/>
    // ]
    console.log(this.state.sounds)
    return (
      <div className='button-container'>
         {button}
      </div>
    );
  }
}

export default App;

