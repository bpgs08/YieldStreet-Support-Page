import React, { Component } from 'react';
import styled from 'styled-components';

const SearchBarInput = styled.input`
    border-radius: 2px;
    border: none;
    min-height: 38px;
    background: #fff;
    padding-left: 40px;
    flex: 1;
`;

const NavSelectLinksInput = styled.div`
    background: #fff;
    border-radius: 2px;
    border: 1px solid #e6e8ea;
    cursor: pointer;
    font-size: 13.5px;
    padding: 5px 10px;
    margin-bottom: 5px;
    color: #303335;
    text-decoration: none;
`;

export {
    SearchBarInput,
    NavSelectLinksInput
}