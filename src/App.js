import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import Playlist from './Playlist/Playlist';
import { Box } from 'react-bulma-components';

class App extends Component {
  render() {
    return (
      <Box className="App">
        <NavBar/>
        <span> </span>
        <Playlist/>
      </Box>
    );
  }
}

export default App;
