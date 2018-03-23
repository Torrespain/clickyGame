import React, { Component } from 'react';
import './App.css';
import Images from "./components/Images";
import imageHolder from "./imageHolder.json";

class App extends React.Component {
 constructor() {
   super();
   this.state = {
      picture: imageHolder,
      score: 0,
      highScore: 0
   }

   // this.pictureClick = this.pictureClick.bind(this);
   // this.mix = this.mix.bind(this);
 }



 // pictureClick = (url) => {
 //   const mixArray = this.mix(this.state.imageHolder);
 //   this.setState({imageHolder: mixArray});
 //   console.log(this.state.imageHolder);
 // }

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
      picture = picture.map((friend, pic) => {
        friend.clicked = false;
        return friend;
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


 render(){
  console.log(this.mix);

  const emptyArray=[];

  this.state.picture.map((image) => {
     const img = (<img src={image.url} class="pic" onClick={this.pictureClick } ></img>);
     emptyArray.push(img);
   });

   return (
     <div>
       {emptyArray}

     </div>
   );
 }

 render() {
    return (
      <Wrapper>
      <h1>Clicky Game</h1>
      <div>{this.state.score} | {this.state.highScore}</div>
      <div className="jumbotron">
        <h2>Click on an images, but dont repeat!</h2>
      </div>
        {this.state.picture.map((picture, index) => (
          <FriendCard key={index}
            image={friend.image}
            index={index}
            handleClick={(index) => {
              this.handleClick(index);
            }}
          />
        ))}
      </Wrapper>
    );
  }
}



export default App;
