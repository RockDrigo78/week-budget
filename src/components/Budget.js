import React, {Component} from 'react';

class Budget extends Component {
  render(){
    return(
      <div className="alert alert-success">
          Budget: ${this.props.budget}
      </div>
      
    )
  }
}

export default Budget;