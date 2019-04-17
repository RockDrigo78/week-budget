import React, { Component } from 'react';

class Formular extends Component {

  constructor(props){
    super(props);
    this.nameExpense = React.createRef();
    this.quantity = React.createRef();
}

  createExpense = (e) => {
    e.preventDefault();

    //object creation
    let expense = {
        nameExpense: this.nameExpense.current.value,
        quantity: this.quantity.current.value
    }
    this.props.addExpense(expense);

    // to reset the formular fields
    e.currentTarget.reset();

}

  render() {
    return(
      <form onSubmit={this.createExpense}>
          <h2>Add expenses here</h2>
          <div className="campo">
              <label>Name</label>
              <input ref={this.nameExpense} className="u-full-width" type="text" placeholder="E.g. Food" required />
          </div>
          <div className="campo">
              <label>Quantity</label>
              <input ref={this.quantity} className="u-full-width" type="text" placeholder="E.g. 300" required/>
          </div>
          <input className="button-primary u-full-width" type="submit" value="Add" />
      </form>
    )
  }

}

export default Formular;