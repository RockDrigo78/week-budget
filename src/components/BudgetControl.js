import React, {Component} from 'react';
import Budget from './Budget';
import Remaining from './Remaining';

class BudgetControl extends Component {
  render() {
    return(
      <div>
        <Budget
          budget={this.props.budget}
        />
        <Remaining 
          remaining={this.props.remaining}
        />
      </div>
    );
  }
}

export default BudgetControl;