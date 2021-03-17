import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import Button from './Button.js';

class App extends React.Component {
  state = { 
    searchByTicker: true,
    companyProfiles: [],
    termsWithNoMatch: [],
  };

  toggleSearchByTicker = async () => {
    await this.setState({ searchByTicker: !this.state.searchByTicker });
    return
  }

  callApi = async (term, ticker) => {    
      return await axios.get(`https://www.financialmodelingprep.com/api/v3/profile/${term}?apikey=2362a93c26930a2494672642d811cb49`); 
  }

  onSearchBarSubmit = async (termString) => {
    termString.split(', ').map(async (term) => {
      const { data } = await this.callApi(term)
      if (data && data[0]) {
        const { 
          companyName, 
          website,
          description, 
          image, 
          mktCap, 
          ceo, 
          industry,
          exchangeShortName,
          country, 
          fullTimeEmployees,
        } = data[0];
        await this.setState({
          companyProfiles: [
            ...this.state.companyProfiles,
            {
              companyName,
                website,
                description, 
                ceo,
                country,
                fullTimeEmployees,
                industry,
                exchangeShortName,
                image,
                mktCap: Math.floor(mktCap /1000000) + 'M'
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

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <div>
          <Button 
            toggleSearchByTicker={this.toggleSearchByTicker}
            searchByTicker={this.state.searchByTicker}
          /> 
        </div>
        <SearchBar onSearchBarSubmit={this.onSearchBarSubmit}/>
        <div>
          {
            this.state.termsWithNoMatch.map(({ companyName, description }, i) => {
              return <div key={`${companyName}-${i}`}> {companyName} {description} </div>
            })
          }
        </div>
        {
          this.state.companyProfiles.map((profile, i) => {
            console.log(this.state.profile);
            const { 
              companyName, 
              mktCap,
              website,
              description, 
              ceo, 
              country, 
              fullTimeEmployees,
              exchangeShortName,
              industry, 
              image 
            } = profile;
            const {
              symbol
            } = profile;
            return ( 
                <div key={`${companyName}-${i}`}>
                <img src={image} />
                <h1>{companyName}</h1>
                <div>{website}</div>
                <div>{symbol}</div>
                <div>{exchangeShortName}</div>
                <div>Market capitalization {mktCap}</div>
                <div>CEO {ceo}</div>
                <div>Country {country}</div>
                <div>{industry}</div>
                <div>{fullTimeEmployees} full time employees</div>
                <div>{description}</div> 
                
              </div>
            );
          }) 
        }
      </div>
    );
  }
}

export default App; 
