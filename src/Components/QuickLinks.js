import React, { Component } from 'react';
import styled from 'styled-components';

import QuickLinksItem from '../Components/QuickLinksItem';
import { ButtonAttention } from '../Tags/Buttons';

class QuickLinks extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <div className='col-12 col-md-3'>
          <div className='d-none d-md-block'>
            <AbsoluteNav>
              <QuickLinksItem categories={this.props.categories}/>
              <p>Got a Question ?</p>
              <ButtonAttention>Ask us anything</ButtonAttention>
            </AbsoluteNav>
          </div>
        </div>
    );
  }
}

const AbsoluteNav = styled.nav`
  display: block;
  padding-top: 25px;
  @media (max-width: 767px) {
    width: calc(100% - 20px);
    left: 0px;
    position: absolute;
    z-index: 10;
    background: #fff;
    border-radius: 2px;
    padding: 20px 10px 10px 10px;
    margin: 0 10px;
    margin-top: -30px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.5);
    flex-direction: column;
  }
`;



export default QuickLinks;
