import React from 'react';

//Stateless functional component with styles.
const h3Style = {
  color: '#54657a',
  fontFamily: 'Times New Roman, Times, serif',
  fontSize: 30,
  fontWeight: 700
};

const Subtitle = (props) => (
  <h3 className="subTitle" style={h3Style} >{props.text}</h3> 
);

export default Subtitle;