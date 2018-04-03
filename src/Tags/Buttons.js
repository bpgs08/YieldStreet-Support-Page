import React, { Component } from 'react';
import styled from 'styled-components';

const SearchBarButton = styled.input`
    font-style: normal;
    font-weight: 500;
    color: #fff;
    border-radius: 2px;
    border: none;
    min-height: 38px;
    background-color: rgba(0,0,0,0.3);
    padding: 10px 0;
    width: 85px;
    cursor: pointer;
    text-align: center;
`;

const ButtonAttention = styled.a`
    padding: 5px 10px;
    background: #f0f2f4;
    color: #191b1d;
    font-size: 13.5px;
    font-weight: 300;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.15);
    line-height: 1.5;
    border-radius: 1px;
    align-self: flex-start;
    cursor: pointer;
    &:hover{
        background: #dcdee0;
    }
`;



export {
    SearchBarButton,
    ButtonAttention,
}