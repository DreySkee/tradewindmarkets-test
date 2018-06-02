import React from 'react';

class Cell extends React.Component {

  state = {
    justUpdated: false
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.pool && nextProps.pool.Util1 != this.props.pool.Util1){
      this.setState((state) => ({
        justUpdated: true
      }), () => {
        setTimeout(() => {
          this.setState((state) => ({
            justUpdated: false
          }))
        }, 500)
      });
    }
  }

  render(){
    const { label, pool } = this.props;

    return (
      <div className={this.state.justUpdated ? `just-updated item` : 'item'}>
        {label && <div className="item label">{label}</div>} 
        
        {pool &&
          <div className={pool.closeToLimit ? `warning pool-data` : `pool-data` }>
            <div><b>Pool# </b>{pool.CreditPool}</div>
            <div><b>Util: </b>{pool.Util1}</div>
            <div><b>Limit: </b>{pool.Limit1}</div>
            <div><b>WarnPct: </b>{pool.WarnPct}</div>
          </div>
        }
      </div>
    );    
  }
}

export default Cell;