import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Formular from './Formular';
import List from './List';
import  {validateBudget} from '../helper';
import BudgetControl from './BudgetControl';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      budget: 0,
      remaining: 0,
      expenses: {}
    }
  }

  componentDidMount(){
    this.getBudget();
  }

  getBudget = () => {
    let budget = prompt("Write your Budget");

    let result = validateBudget(budget);
    if(result){
      this.setState({
        budget: budget,
        remaining: budget
      });
    } else {
      this.getBudget();
    }
  }
  
  addExpense = (expense) => {
    const expenses = {...this.state.expenses};

    expenses[`expense-${Date.now()}`] = expense;

    this.substractBudget(expense.quantity);

    this.setState({
      expenses: expenses
    });
  }

  substractBudget = quantity => {
    let substractNumber = Number(quantity);
    let remaining = this.state.remaining;
    remaining -= substractNumber;
    this.setState({
      remaining: remaining.toFixed(2)
    });
  }

  render() {
    return (
      <div className="App container">
        <Header 
          title='Week Budget'
        />
        <div className='contenido-principal contenido'>
          <div className='row'>
            <div className='one-half column'>
              <Formular 
                addExpense = {this.addExpense}
              />
            </div>
            <div className='one-half column'>
              <List 
                expenses={this.state.expenses}
              />
              <BudgetControl
                budget={this.state.budget}
                remaining={this.state.remaining}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
