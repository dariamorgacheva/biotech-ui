import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class SearchByCompanyName extends React.Component {

  state = { 
    companyProfiles: [],
    termsWithNoMatch: []
  };
  
  callApi = async (term, ticker) => {
    return await axios.get(`https://financialmodelingprep.com/api/v3/search?query=${term}&limit=2&exchange=NASDAQ&apikey=2362a93c26930a2494672642d811cb49`);
      
  }

    

  onSearchBarSubmit = async (termString) => {
    termString.split(', ').map(async (term) => {
      const { data } = await this.callApi(term)
      if (data && data[0]) {
        const {
          symbol
        } = data[0];
        await this.setState({
            companyProfiles: [
              ...this.state.companyProfiles,
              {
                symbol
              }
            ]
          })
      } else {
        this.setState({
          termsWithNoMatch: [
            ...this.state.termsWithNoMatch,
            {
              companyName: term,
              description: 'Not found'
            }
          ]
        })
      }
      return;
    });  
    return; 
  }

  render () {
      return (

        <div className="ui container" style={{ marginTop: '10px' }}>
          <SearchBar 
            onSearchBarSubmit={this.onSearchBarSubmit}
            searchByTicker={this.props.searchByTicker}
          />
          <div>
            {
              this.state.termsWithNoMatch.map(({ companyName, description }, i) => {
                return <div key={`${companyName}-${i}`}> {companyName} {description} </div>
              })
            }
          </div>
          {
            this.state.companyProfiles.map((profile, i) => {
              console.log(this.state.symbol);
              const {
                symbol
              } = profile;
              return ( 
                 <div key={`${symbol}-${i}`}>
                  <div>{symbol}</div>
                  
                </div>
              );
            })
          }
        </div>
      );
  }
} 

  export default SearchByCompanyName; 
