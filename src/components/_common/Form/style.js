export default `
  input {
    width: 100%;
    height: 44px;
    padding: 10px;
    border-radius: 2px;
    border: 1px solid #e2e2e2;
    font-size: 14px;
    transition: .3s;

    &.error {
      border-color: #d0021b;
    }
  }

  input[type='submit'] {
    background-color: #6288a5;
    border-color: #4d7b9f;
    cursor: pointer;
    color: #fff;

    &:hover {
      background-color: #326891;
      border-color: #265e8b;  
    }
  } 

  .form-field {
    position: relative;
    margin-bottom: 20px;
    
    a {
      position: absolute;
      right 10px;
      top: 15px;
      font-size: 12px;
    } 
    .error-message {
      padding 5px 0 0 10px;
      font-size: 12px;
      color: #d0021b;
    }
  }
`;