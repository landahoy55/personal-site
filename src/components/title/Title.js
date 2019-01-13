import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
  render() {
    return (
      <div className="left">
                <div className="title">
                            <h1 className="main">Pete Malone</h1>
                            <p className="tagline">Recent Computing graduate enjoying iOS and front-end web... and working in the database field.</p>   
                </div>
      </div>
    );
  }
}

export default Title;