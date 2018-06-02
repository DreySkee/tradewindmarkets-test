import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import style from './style';
import Cell from './Cell';

class Dashboard extends React.Component {

  state = {
    xAxis: {},
    yAxis: {},
    coordinates: {},
    creditPools: {}
  }

  componentDidMount(){
    fetch('https://api.jsonbin.io/b/5b13004bc2e3344ccd96cb4a')
    .then((resp) => resp.json()) 
    .then((data) => {
      this.buildTable(data);
    })
  }

  buildTable = (creditLines) => {
    const creditPools = {};
    const coordinates = {};
    const xAxis = [];
    const yAxis = [];

    creditLines.forEach((line) => {
      let x, y;

      if(xAxis.indexOf(line.DealcodeFrom) === -1){
        xAxis.push(line.DealcodeFrom);
      } 
      
      if(yAxis.indexOf(line.DealcodeTo) === -1){
        yAxis.push(line.DealcodeTo);
      }
      
      x = xAxis.indexOf(line.DealcodeFrom);
      y = yAxis.indexOf(line.DealcodeTo);
      
      if(!creditPools[line.CreditPool]){
        creditPools[line.CreditPool] = [];
      }
      
      line.closeToLimit = this.isCloseToLimit(line);
      creditPools[line.CreditPool].push({x: x, y: y, line});
      coordinates[`${x}-${y}`] = line;
    }); 

    this.setState(state => ({
      xAxis: xAxis,
      yAxis: yAxis,
      coordinates: coordinates,
      creditPools: creditPools
    }), this.listenToUpdates());   
  }

  isCloseToLimit = (line) => {
    const threshold = line.Limit1 * line.WarnPct / 100;

    if(line.Util1 >= threshold && line.Limit1 != 0){
      return true;
    }

    return false;
  }

  listenToUpdates = () => {
    fetch('https://api.jsonbin.io/b/5b130242c2e3344ccd96cb4d')
    .then((resp) => resp.json()) 
    .then((data) => {
    
      let counter = 0;
      let interval = setInterval(() => {

        this.updateTable(data[counter])
        if(counter === data.length - 1){
          clearInterval(interval)
        }    
        counter++;
      }, 1000);
    })
  }

  updateTable = (data) => {
    if(this.state.creditPools[data.CreditPool]){
      
      this.state.creditPools[data.CreditPool].forEach((pool) => {
        const {x, y} = pool;

        this.setState((state) => ({
            ...state,
            coordinates: {
              ...state.coordinates,   
              [`${x}-${y}`]: {
                ...state.coordinates[`${x}-${y}`],
                Util1: data.Util1,
                closeToLimit: this.isCloseToLimit(data)
              }
            }
        }))     
      });
    }
  }

  render(){
    const { userData } = this.props;
    const { xAxis, yAxis, coordinates } = this.state;

    return (
      <div className={this.props.className}>
          <h2>Dashboard</h2>
          <div>
            {/*Object.keys(userData).map((key, index) => (
              <div key={index}>
                <b>{key}:</b> {userData[key]}
              </div>
            ))*/}

            <div className="table">

              {Object.keys(yAxis).map((row,rowIndex) => (
                <div key={rowIndex} className="row">

                <div className="item label">{yAxis[rowIndex]}</div>
                {Object.keys(xAxis).map((column, columnIndex) => { 
                  const pool = coordinates[`${columnIndex}-${rowIndex}`];
                  return(
                    <Cell key={columnIndex} label={rowIndex === 0 && xAxis[columnIndex]} pool={pool} />
                  );
                })}  
                </div>
              ))} 
            </div>

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