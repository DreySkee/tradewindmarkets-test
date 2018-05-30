import iconFb from 'images/icon-fb.svg';
import iconG from 'images/icon-g.svg';

export default `
  margin: 20px 0;

  .button-holder {
    display: flex;  
  }
  
  .social-login-btn {
    position: relative;
    width: 49%;
    margin-right: 2%;    
    
    &:last-child {
      margin-right: 0;
    }

    button {
      height: 43px;
      width: 100%;
      color: #fff;
      text-align: left;
      padding: 0 20px;
      border-radius: 2px;
      font-size: 12px;
      cursor: pointer;
      transition: .3s;
    }

    .social-icon {
      position: absolute;
      right: 2px;
      top: 2px;
      width: 39px;
      height: 39px;
      background-color: #fff;
      border-radius: 2px;
      background-repeat: no-repeat;
      background-position: center;
    }

    &.fb {
      button {
        background-color: #3c5a99;
        border-color: #3c5a99;

        &:hover {
          background-color: #526bc8;
          border-color: #526bc8;
        }
      }

      .social-icon {
        background-image: url(${iconFb});
        background-size: 12px;
      }
    }

    &.g {
      button {
        background-color: #4285f4;
        border-color: #4285f4;

        &:hover {
          background-color: #3367d6;
          border-color: #3367d6;
        }
      }

      .social-icon {
        background-image: url(${iconG});
        background-size: 18px;
      }
    }
  }

  .or-separator {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0;
    width: 100%;
    height: 1px;
    background: #ccc;

    span {
      color: #666;
      background: #fff;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 700;
      padding: 8px;
    }
  }
`;