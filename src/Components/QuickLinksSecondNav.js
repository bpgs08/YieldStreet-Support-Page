import React, { Component } from 'react';
import styled from 'styled-components';

import { NavSelectLinksInput } from '../Tags/Inputs';

class QuickLinksSecondNav extends Component {
    constructor(props) {
        super(props);
    }	
  render() {

    return (
        <NavSelect className='d-block d-md-none'>
            <NavSelectIcon style={ this.props.isShow }><i className="fa fa-caret-up" /></NavSelectIcon>
            <NavSelectIcon style={ this.props.isHidden }><i className="fa fa-caret-down" /></NavSelectIcon>
            <NavSelectLinksInput onClick={this.props.trigger}>Home</NavSelectLinksInput>
        </NavSelect>
    );
  }
}

const NavSelectIcon = styled.div`
  position: absolute;
  height: 30px;
  right: 15px;
  align-items: center;
`;

const NavSelect = styled.a`
  @media (max-width: 767px) {
    display: block;
    padding: 15px 10px;
    border-top: 10px solid #f0f2f4;
    border-bottom: 10px solid #f0f2f4;
  }
`;

export default QuickLinksSecondNav;
