import React,{Component} from 'react';
import Keys from './Keys';
import Store from '../stores/Store';

export default class Layout extends Component {
  constructor (props) {
  super(props);

  this.state = {
    result: Store._getresult(),
    expression:Store._getexpression()
  }
  this._onChange = this._onChange.bind(this);
}
componentWillMount() {
  Store.startListening(this._onChange)
}

componentWillUnmount(){
  Store.stopListening(this._onChange)
}

_onChange(){
  this.setState({
    results: Store._getresult(),
    expression:Store._getexpression()
  })
}
  render(){
    const {result,expression} = this.state;
    return (
      <div className="container">
        <Keys result={result} expression ={expression}/>
      </div>
    )
  }
}
