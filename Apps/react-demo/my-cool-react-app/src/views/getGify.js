import React, { Component } from 'react';
const GIFY_URL =
  'https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=funny&rating=PG';

export default class getGify extends Component {
  state = {
    url: 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy-downsized.gif'
  };
  componentDidMount = async () => {
    const response = await fetch(GIFY_URL);
    const json = await response.json();
    this.setState({
      url: json.data.image_original_url
    });
  };
  render() {
    const { url } = this.state;
    return (
      <div>
        <img src={url} alt="gif" />
      </div>
    );
  }
}
