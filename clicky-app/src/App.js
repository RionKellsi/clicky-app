import React, { Component } from 'react';
import './App.css';
import artists from './artists.json';
import Wrapper from './components/Wrapper';
import Navtab from './components/Nav';
import Title from './components/Title';
import ArtistCard from './components/ArtistCard';


class App extends Comment {

  state = {
    message: "Click on an image to begin!",
    topScore: 0,
    curScore: 0,
    artists: artists,
    unselectedArtists: artists
  }

  componentDidMount (){

  }

  //create a function to shuffle the array 

  shuffleArray = array => {
      for (let i = array.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
      }
  }

  selectArtist = artists => {
    const findArtist = this.state.unselectedArtists.find(item => item.artist === artist);

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

    this.shuffleArray(artists);
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

        {
          this.state.artists.map(artist => (
            <ArtistCard
              artist={artist.artists}
              image={artist.image}
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
