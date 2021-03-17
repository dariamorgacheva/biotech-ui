import React from 'react';

class SearchBar extends React.Component { 
  state = { term:  ''};
  
  onTermChange = async (event) => {
    await this.setState({ term: event.target.value })
    return
  }
  onSearchBarSubmit = (event) =>  {
    event.preventDefault();
    
    this.props.onSearchBarSubmit(this.state.term);
  }

  renderSearchBarText = () => {
    return this.props.searchByTicker 
      ? 'You are searching by ticker'
      : 'You are searching by company name' 
  }
  
  render()  {
    return (
      <div className="ui segment">
        <form onSubmit={this.onSearchBarSubmit} className="ui form">
           <div className="field">
             <label>{this.renderSearchBarText()}</label>
             
            <input 
              type="text" 
              value={this.state.term}
              onChange={this.onTermChange}
            />
           </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;