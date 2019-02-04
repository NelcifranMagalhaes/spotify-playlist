This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Spotify Playlist

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## packages used
	### react-bulma-components
	### axios
	### react-router
## Use
	This API consult [https://spotifyapiplaylists.herokuapp.com/](https://spotifyapiplaylists.herokuapp.com/)
	 and list my spotify playlist.
	For use a localhost api change `axios.get('https://spotifyapiplaylists.herokuapp.com/')` 
	for `axios.get('http://localhost:your_port/')`.
## Possible issues
	For access the API, react use axios for consult, but in some things you need to allow cors to use,
	in this case just dowload a extension for chrome called *Allow-Control-Allow-Origin:*
