import React, { Component } from 'react';
import './App.css';
import Images from "./components/Images";
import Wrapper from "./components/Wrapper";
import imageHolder from "./imageHolder.json";
import Title from "./components/Title";


class App extends React.Component {
 constructor() {
   super();
   this.state = {
      picture: imageHolder,
      score: 0,
      highScore: 0
   }

 }

 mix(array) {
  for (let i = 0; i < array.length; i++) {
    const position = Math.floor(Math.random() *i);
    [array[i], array[position]] = [array[position], array[i]];
  }
  return array;
 }

 handleClick (pic) {

    let {picture, score, highScore} = this.state;

    if (picture[pic].clicked) {
      picture = picture.map((picture, index) => {
        picture.clicked = false;
        return picture;
      });

      highScore = score > highScore ? score : highScore;
      score = 0;
    }

    else {
      picture[pic].clicked = true;
      score++;
    } 

    picture = this.mix(picture)

    this.setState({
      picture, score, highScore
    })

  }

 render() {
    return (
      <div class="container">
      <Wrapper>
        <h1>Clicky Game</h1>
        <div>Actual Score: {this.state.score} / Highest Score: {this.state.highScore}</div>
        <div className="jumbotron">
          <h2>Click on an images, but dont repeat!</h2>
        </div>
          {this.state.picture.map((picture, index) => (
            <Images key={index}
              image={picture.url}
              index={index}
              handleClick={(index) => {
                this.handleClick(index);
              }}
            />
          ))}
      </Wrapper> 
      </div>
    );
  }
}



export default App;
