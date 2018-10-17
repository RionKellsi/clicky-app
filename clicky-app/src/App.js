import React, { Component } from 'react';
import './App.css';
import artists from './artists.json';
import Wrapper from './components/Wrapper/Wrapper';
import Navtab from './components/Nav/Nav';
import Title from './components/Title/Title';
import ArtistCard from './components/ArtistCard/AristCard';


class App extends Component {

  state = {
    artists,
    message: "Click on an image to begin!",
    topScore: 0,
    curScore: 0,
    clickedArray: [],
    unselectedArtists: artists
  };








  componentDidMount(){

  }

  //create a function to shuffle the array 
 
  shuffleArray = array => {

  };

      // const arrLength = array.length
      // const shuffledArray = []
      
      // while(array.length) {
        
      //   const randomIndex = Math.floor(Math.random() * (i + 1))
      //   // get random number between 0 and length of array
      //   // pop item from current array
      //   // put into 'shufffledArray' using random index (ex: shuffledArray[randomIndex] = popped item)
      // }

      // // return shuffledArray

      // console.log(array);
      // return array;
      
  

  
  selectArtist = artists => {
    const findArtist = this.state.unselectedArtists.find(item => item.artists === artists);

    if (findArtist === undefined) {
      //fail to select artist

      this.setState({
        message: "You guessed incorrectly!",
        topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
        curScore: 0,
        artists: artists,
        unselectedArtists: artists
      });
    }
    else {
      const newArtists = this.state.unselectedArtists.filter(item => item.artists !== artists);

      this.setState({
        message: "You guessed correctly!",
        curScore: this.state.curScore + 1,
        artists: artists,
        unselectedArtists: newArtists
      });
    }

    const shuffledArtist = this.shuffleArray(artists);

    return shuffledArtist;
    
  };

  render() {
    return (
      <Wrapper>
        
        <Navtab 
          message={this.state.message}
          curScore={this.state.curScore}
          topScore={this.state.topScore}
        />

        <Title />

        {this.state.artists.map(artists => (
            <ArtistCard
              artist={artists.artist}
              image={artists.image}
              selectArtist={this.selectArtist}
              curScore={this.state.curScore}
              />
          ))
        }

      </Wrapper>
        
    );
  }

}

export default App;
