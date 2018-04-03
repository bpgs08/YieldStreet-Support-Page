import React, { Component } from 'react';
import styled from 'styled-components';
import FAQSectionItem from './FAQSectionItem';

class FAQSectionItemGroup extends Component {
  render() {
    let faqs;
    if(this.props.data){
      faqs = this.props.data.map((faq, index) => {
          return (
                <FAQSectionItem key={index} faq={faq} />
            );
        });
    }
    return (
      <div>
        {faqs}
      </div>
    );
  }
}

export default FAQSectionItemGroup;
