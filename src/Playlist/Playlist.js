import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import axios from 'axios';
import {Card , Content,Columns} from 'react-bulma-components';


class Playlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playlist: [],
    };
  }

componentDidMount() {

    axios.get('https://spotifyapiplaylists.herokuapp.com/') //You can change url for 'http://localhost:4000/' for test
      .then(res => {
        const playlist = res.data;
        this.setState({ playlist });
      })
  }


  render() {
    return (
      <Columns>
        { this.state.playlist.map((playlist,index) =>
          <Columns.Column key={index +'key' }>
          <Card key={'key'+ index}>
            <Card.Content>
              <Content>
                {playlist.name}
                <br />
              </Content>
            </Card.Content>
          </Card>
        </Columns.Column>
         )}
      </Columns>
 
    )
  }
}
export default Playlist;

