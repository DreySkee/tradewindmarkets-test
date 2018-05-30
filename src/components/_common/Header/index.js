import React from 'react';
import styled from 'styled-components';
import style from './style';
import logo from 'images/nyt-logo.svg';

const Header = ({className}) => {
  return(
    <header className={className}>
      <div className="container">
        <img src={logo} alt="New York Times"/>
      </div>
    </header>
  );
} 

export default styled(Header)`${style}`;