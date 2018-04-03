import React, { Component } from 'react';
import styled from 'styled-components';
import FAQSectionItemGroup from './FAQSectionItemGroup';

class FAQSection extends Component {
  render() {
    return (
      <FAQContainer className='col-12 col-md-9'>
        <FAQH2 id='ACCOUNT_BALANCES'>Account Balances</FAQH2>
        <FAQSectionItemGroup data={this.props.accountBalances} />

        <FAQH2 id='INVESTING_ON_YIELDSTREET'>Investing on YieldStreet</FAQH2>
        <FAQSectionItemGroup data={this.props.investingOnYieldstreet} />

        <FAQH2 id='OTHERS'>Others</FAQH2>
        <FAQSectionItemGroup data={this.props.others} />

        <FAQH2 id='INVESTOR_ACCREDITATION'>Investor Accreditation</FAQH2>
        <FAQSectionItemGroup data={this.props.investorAccreditation} />

        <FAQH2 id='MY_PORTFOLIO'>My Portfolio</FAQH2>
        <FAQSectionItemGroup  data={this.props.myPortfolio} />

        <FAQH2 id='RISK_MANAGEMENT'>Risk Management</FAQH2>
        <FAQSectionItemGroup data={this.props.riskManagement} />
      </FAQContainer>
    );
  }
}

const FAQContainer = styled.div`
  border-left: 5px solid #f5f7f9;
  @media (max-width: 767px) {
    border-left: none;
  }
`;

const FAQH2 = styled.h2`
  margin: 22px 0 10px 0;
  font-size: 20px;
  font-weight: 300;
`;

export default FAQSection;
