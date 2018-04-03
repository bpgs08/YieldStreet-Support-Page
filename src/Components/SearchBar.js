import React, { Component } from 'react';
import styled from 'styled-components';
import { SearchBarInput } from '../Tags/Inputs';
import { SearchBarButton } from '../Tags/Buttons';

class SearchBarComponent extends Component {
  render() {
    return (
        <SearchBar className="col-12">
            <SearchBarWrapper className='container'>
                <SearchBarIcon className='fa fa-search' />
                <SearchBarInput placeholder='keyword, article, video etc.' className='mr-1' />
                <SearchBarButton readOnly value="Search"/>
            </SearchBarWrapper>
            <div className="container d-none d-md-block">
                <H1>Frequently Asked Questions</H1>
            </div>
        </SearchBar>
    );
  }
}

const H1 = styled.h1`
    font-weight: 200;
    margin: 15px 0 10px 0;
    font-size: 30px;
    color: #fff;
`;

const SearchBarIcon = styled.i`
    position: absolute;
    left: 30px;
`;

const SearchBar = styled.div`
    color: #b4b4b4;
    background-color: #1e9c9f;
    padding: 5px 0;
`;

const SearchBarWrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    color: #b4b4b4;
    
`;

export default SearchBarComponent;
