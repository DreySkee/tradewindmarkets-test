import { injectGlobal } from 'styled-components';

injectGlobal`
  * {
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    font-family: Arial,Helvetica,sans-serif;
    font-weight: 500;
  }

  :focus { outline: none; }

  h2 {
    font-size: 24px;
    line-height: 27px;
    margin-bottom: 10px;
    font-weight: 500;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: #6288a5;
  }

  p {
    color: #666;
    font-size: 16px;
  }

  .page {
    width: 100%;
    max-width: 972px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .container {
    width: 100%;
    max-width: 525px;
    margin: 0 auto; 
  }
`;