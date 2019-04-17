import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Formular from './Formular';
import List from './List';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      budget: 0,
      remaining: 0,
      expenses: {}
    }
  }



  addExpense = (expense) => {
    const expenses = {...this.props.expenses}

    expenses[`expense-${Date.now()}`] = expense;

    console.log(expenses);

    this.setState({
      expenses: expenses
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
                
              />
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default App;
