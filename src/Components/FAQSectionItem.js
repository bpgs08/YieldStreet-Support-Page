import React, { Component } from 'react';
import styled from 'styled-components';
import Parser from 'html-react-parser';

class FAQSectionItem extends Component {
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
            <div className='d-flex'>
                <FAQIcon style={shown}><i className="fa fa-caret-down" /></FAQIcon>
                <FAQIcon style={hidden}><i className="fa fa-caret-right" /></FAQIcon>
                <p>
                    <FAQATag data-toggle="collapse" href={`#${this.props.faq.id}`}  role="button" onClick={this.toggle}>
                        {this.props.faq.title}
                    </FAQATag> 
                </p>
            </div>
            <div className="collapse" id={`${this.props.faq.id}`}>
                <FAQDescription>
                    {Parser(`${this.props.faq.description}`)}
                </FAQDescription>
            </div>
        </div>
    );
  }
}

const FAQIcon = styled.div`
    font-size: 20px;
    flex-shrink: 1;
    padding-right: 15px;
`;

const FAQATag = styled.a`
    color: #191b1d;
    text-decoration: none;
    font-weight: 500;
    &:hover{
        color: #191b1d;
        text-decoration: none;
    }
`;

const FAQDescription = styled.div`
    padding: 0rem 1.25rem;
    border: none;
`;

export default FAQSectionItem;
