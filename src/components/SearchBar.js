import React from 'react';

class SearchBar extends React.Component{

  state = { term: ''};

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render(){
    return(
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video search (examples: cars, plants, stars)</label>
            <input
              type="text"
              onChange={this.onFormSubmit}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;