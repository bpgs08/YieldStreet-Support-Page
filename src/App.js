import React, { Component } from 'react';
import styled from 'styled-components';

import QuickLinksMobile from './Components/QuickLinksMobile';
import QuickLinksSecondNav from './Components/QuickLinksSecondNav';
import SearchBarComponent from './Components/SearchBar';
import QuickLinks from './Components/QuickLinks';
import FAQSection from './Components/FAQSection';

import { CATEGORIES, ACCOUNT_BALANCES, INVESTING_ON_YIELDSTREET, OTHERS, INVESTOR_ACCREDITATION, MY_PORTFOLIO, RISK_MANAGEMENT } from './Data/Data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: false,
    };
    this.toggle = this.toggle.bind(this);
  }	

    toggle() {
      this.setState({
        shown: !this.state.shown
      });
    }
  render() {
    let shown = {
      display: this.state.shown ? 'flex' : 'none'
    };
    
    let hidden = {
        display: this.state.shown ? 'none' : 'flex'
    }
    return (
      <div>
        <header>header</header>
        <SearchBarComponent />
        <QuickLinksSecondNav  trigger={this.toggle} isShow={shown} isHidden={hidden}/>
        <QuickLinksMobile trigger={this.toggle} isShow={shown} isHidden={hidden} categories={CATEGORIES}  />
        <BodyContainer className='container d-md-flex'>
          <QuickLinks categories={CATEGORIES}  />
          <FAQSection accountBalances={ACCOUNT_BALANCES} investingOnYieldstreet={INVESTING_ON_YIELDSTREET} others={OTHERS}
          investorAccreditation={INVESTOR_ACCREDITATION} myPortfolio={MY_PORTFOLIO} riskManagement={RISK_MANAGEMENT}/>
        </BodyContainer>
        
        <footer>Footer</footer>
      </div>
    );
  }
}

const BodyContainer = styled.div`
    font-style: normal;
    font-weight: 300;
    font-size: 13.5px;
    line-height: 1.5;
`;



export default App;
