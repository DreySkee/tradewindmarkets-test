import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import style from './style';

class Dashboard extends React.Component {
  render(){
    const { userData } = this.props;
    console.log(userData) 
    return (
      <div className={this.props.className}>
        <h1>Dashboard</h1>

        <div>
          Your email: {userData.email}
        </div>
        <div>
          Your password: {userData.password}
        </div>
      </div>
    );    
  }
}

const mapStateToProps = (state) => ({  
  userData: state.user
});

const StyledDashboard = styled(Dashboard)`${style}`;

export default connect( mapStateToProps, null )(StyledDashboard);