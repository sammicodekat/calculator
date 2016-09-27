import React, { Component } from 'react';
import Store from '../stores/Store';
import Actions from '../actions/Actions'
export default class Keys extends Component {
  constructor (props) {
    super(props);
  }

  _buttonInput(event){
    let pButton =event.target.value;
      Actions.eq(pButton);
  }
  _equal(){
    const {result} =this.props;
    Actions.equal(result);
  }
  _clear(){
    const {result} =this.props;
    Actions.clear(result);
  }

  render(){
    const {result,expression} = this.props;
    let expressions = '';
		result ? expressions = result : expressions = this.props.expression;
    return(
      <div id="calculator">
      <div className ="keys">
      <div className ="row"><div className ="col-sm-1"><button className ="btn btn-lg btn-danger custom" onClick={this._clear} value ="C">C</button></div><div className = "display col-sm-6"><h3>{expressions}</h3></div></div>
      <div className ="row">
      <button className ="btn btn-lg btn-default custom" onClick={this._buttonInput} value ="7">7</button>
      <button className ="btn btn-lg btn-default custom" onClick={this._buttonInput} value ="8">8</button>
      <button className ="btn btn-lg btn-default custom" onClick={this._buttonInput} value ="9">9</button>
      <button className ="btn btn-lg btn-info custom" onClick={this._buttonInput} value ="+">+</button>
      </div>
      <div className ="row">
      <button className ="btn btn-lg btn-default custom" onClick={this._buttonInput} value ="4">4</button>
      <button className ="btn btn-lg btn-default custom" onClick={this._buttonInput} value ="5">5</button>
      <button className ="btn btn-lg btn-default custom" onClick={this._buttonInput} value ="6">6</button>
      <button className ="btn btn-lg btn-info custom" onClick={this._buttonInput} value ="-">-</button>
      </div>
      <div className ="row">
      <button className ="btn btn-lg btn-default custom" onClick={this._buttonInput} value ="1">1</button>
      <button className ="btn btn-lg btn-default custom" onClick={this._buttonInput} value ="2">2</button>
      <button className ="btn btn-lg btn-default custom" onClick={this._buttonInput} value ="3">3</button>
      <button className ="btn btn-lg btn-info custom" onClick={this._buttonInput} value ="*">*</button>
      </div>
      <div className ="row">
      <button className ="btn btn-lg btn-default custom" onClick={this._buttonInput} value ="0">0</button>
      <button className ="btn btn-lg btn-default custom" onClick={this._buttonInput} value =".">.</button>
      <button className ="btn btn-lg btn-info custom" onClick={this._buttonInput} value ="/">/</button>
      <button className ="btn btn-lg btn-warning custom" onClick={this._equal} value ="=">=</button>
      </div>
      </div>
      </div>
    )
  }
}
