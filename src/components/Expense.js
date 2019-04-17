import React, { Component } from 'react';

class Expense extends Component {
  render(){

    const {nameExpense, quantity} = this.props.expense

    return(
      <li className="gastos">
        <p>
          {nameExpense}
          <span className="gasto">${quantity}</span>        
        </p>
      </li>
    );
  }
}

export default Expense;