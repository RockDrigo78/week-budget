import React, { Component } from 'react';

class Formular extends Component {

  constructor(props){
    super(props);
    this.nameExpenseRef = React.createRef();
    this.quantityRef = React.createRef();
}

  createExpense = (e) => {
    e.preventDefault();

    //object creation
    let expense = {
        nameExpenseRef: this.nameExpenseRef.current.value,
        quantityRef: this.quantityRef.current.value
    }
    // to reset the formular fields
    e.currentTarget.reset();

    this.props.addExpense(expense);


}

  render() {
    return(
      <form onSubmit={this.createExpense}>
          <h2>Add expenses here</h2>

          <div className="campo">
              <label>Name</label>
              <input ref={this.nameExpenseRef} className="u-full-width" type="text" placeholder="E.g. Food" required />
          </div>

          <div className="campo">
              <label>Quantity</label>
              <input ref={this.quantityRef} className="u-full-width" type="text" placeholder="E.g. 300" required/>
          </div>

          <input className="button-primary u-full-width" type="submit" value="Add" />
      </form>
    )
  }

}

export default Formular;

