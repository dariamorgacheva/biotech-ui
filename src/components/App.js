import React from 'react';
import SearchByCompanyName from './SearchByCompanyName.js';
import SearchByTicker from './SearchByTicker';
import Button from './Button';

class App extends React.Component {
  state = {
    searchByTicker: true,
  }
  toggleSearchByTicker = async () => {
    await this.setState({ searchByTicker: !this.state.searchByTicker });
    return
  }

  render() {
    return (
      <div>
        <Button 
          toggleSearchByTicker={this.toggleSearchByTicker}
          searchByTicker={this.state.searchByTicker}
        /> 
        {
          this.state.searchByTicker 
          ? <SearchByTicker 
              searchByTicker={this.state.searchByTicker}
            /> 
          : <SearchByCompanyName 
              searchByTicker={this.state.searchByTicker}
            />
        }

      </div>
    )
  }
}

export default App; 
