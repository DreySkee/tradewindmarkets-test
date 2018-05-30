import React from 'react';
import styled from 'styled-components';
import style from './style';

const Footer = ({className}) => {
  return(
    <footer className={className}>
      <div className="container">
        <p>&copy; 2018 The New York Times Company</p>
        <ul>
          <li><a href="">Help</a></li>
          <li><a href="">Feedback</a></li>
        </ul>
      </div>
    </footer>
  );
} 

export default styled(Footer)`${style}`;