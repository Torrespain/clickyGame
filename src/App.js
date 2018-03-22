import React, { Component } from 'react';
import './App.css';
import imageHolder from "./imageHolder.json";

class App extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
      picture: imageHolder
   }

   this.pictureClick = this.pictureClick.bind(this);
   this.mix = this.mix.bind(this);
 }

 pictureClick = (url) => {
   const mixArray = this.mix(this.state.imageHolder);
   this.setState({imageHolder: mixArray});
   console.log(this.state.imageHolder);
 }

 mix = (array) => {
  for (let i = 0; i < array.length; i++) {
    const position = Math.floor(Math.random() *i);
    [array[i], array[position]] = [array[position], array[i]];
  }
  return array;
 }

 render = () => {
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
}



export default App;
