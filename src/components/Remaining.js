import React, {Component} from 'react';
import {checkBudget} from '../helper';

class Remaining extends Component {
  render(){
    const budget = this.props.budget;
    const remaining = this.props.remaining;

    return(      
      <div className={checkBudget(budget, remaining)}>
          Remaining: ${this.props.remaining}
      </div>
      )
  }
}

export default Remaining;