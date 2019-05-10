import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchfield: ''
    };
  }

  componentDidMount() {
    fetch(
      'https://cors-anywhere.herokuapp.com/http://api.giphy.com/v1/gifs/search?q=[KEYWORD_HERE]&api_key= DLCVuTK6KZExOS7JoMq82bi5MaI6EbWO&limit=1'
    )
      .then(response => response.json())
      .then(rawdata => this.setState({ data: rawdata.data }));
  }


  gifFinder(){
    if (document.querySelector("input").value==={this.state.data}){
      return this.state.data;
    }
  }

  render() {
    return (
      <div className="App">
        <h1>GIF Finder</h1>

        
        <label>keyword</label>
        <input type="text" placeholder="enter keyword" />
        <button>Submit button</button>
        <p>gifFinder()</p>
      </div>
    );
  }
}
export default App;
