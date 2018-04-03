import React, { Component } from 'react';
import styled from 'styled-components';

class QuickLinksItem extends Component {
  render() {
    let categories;
    if(this.props.categories){
      categories = this.props.categories.map((category) => {
            return (
                <SideNavigationGroup key={category.id}>
                    <li>
                        <SideNavigationLink href={category.href}>
                            {category.title}
                        </SideNavigationLink> 
                    </li>
                </SideNavigationGroup>
            );
        });
    }
    return (
        <div>
            {categories}
        </div>
    );
  }
}

const SideNavigationGroup = styled.ul`
    list-style: none;
    padding-left: 0;
    line-height: 1em;
    border-bottom: 1px solid #dcdee0;
    margin-bottom: 15px;
    padding-bottom: 15px;
`;

const SideNavigationLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: #2CB591;
    font-weight: 500;
    &:hover{
        text-decoration: none;
        color: #000;
    }
`;

export default QuickLinksItem;
