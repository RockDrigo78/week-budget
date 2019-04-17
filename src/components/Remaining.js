import React, {Component} from 'react';

class Remaining extends Component {
  render(){
    return(      
      <div className="alert alert-primary">
          Remaining: ${this.props.remaining}
      </div>)
  }
}

export default Remaining;