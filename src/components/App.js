import React from 'react';
import './app.css';
import SearchBar from './SearchBar';
// import VideoList from './VideoList';
// import VideoDetail from './VideoDetail';
// import VideoItem from './VideoItem';

class App extends React.Component {
  onFormSubmit = (term) => {
    console.log(term);
  }

  render() {
    return ( 
      <div className="ui container">
        <SearchBar onFormSubmit={this.onFormSubmit} /> 
      </div>
    );
  }
  
}

export default App;