import React from 'react';

class Button extends React.Component {
  state = { clicked: false };

  toggleSearchByTicker = (event) => {
    event.preventDefault();
    return this.props.toggleSearchByTicker();
  }

  renderButtonText = () => {
    return this.props.searchByTicker 
      ? 'Press here to search ticker by company name' 
      : 'Press here to search company profile by ticker'
  }

  render() {
    return (
      <div> 
        <button className="ui button" onClick={this.toggleSearchByTicker}>
          {this.renderButtonText()}
        </button>
      </div>
    );
  }
}

export default Button; 