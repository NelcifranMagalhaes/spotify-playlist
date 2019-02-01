import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Navbar } from 'react-bulma-components';


function NavBar() {

  return (

  	<Navbar
  	  color='dark'
  	  fixed='top'
  	  active= {true}
  	  transparent= {true}
  	>
  		<Navbar.Brand>
  			<Navbar.Item href="#">Spotify Playlist</Navbar.Item>
	   	</Navbar.Brand>

  	</Navbar>

  );
}

export default NavBar;