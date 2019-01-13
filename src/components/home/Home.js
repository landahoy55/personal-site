import React, { Component } from 'react';

import Title from '../title/Title';
import Content from '../content/Content'
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="flex-container"> 
        <Title />
        <Content />
      </div>
    );
  }
}

export default Home;