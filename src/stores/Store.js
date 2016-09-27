import AppDispatcher from '../AppDispatcher';
import {EventEmitter} from 'events';

let _result = 0;
let _expression = '';
class Store extends EventEmitter{
  constructor(){
    super();
    AppDispatcher.register(action => {
      switch(action.type){
        case 'EQUAL':
        let {result} =action.payload;
        _result = eval(result);
        this.emit('CHANGE');
        break;
        case 'EQ':
        let {value} =action.payload;
        _expression += value;
        this.emit('CHANGE');
        break;
        case 'CLEAR':
        return _result = 0;
        this.emit('CHANGE');
        break;
      }
    })
  }

startListening(cb){
  this.on('CHANGE',cb);
}
stopListening(cb){
  this.removeListener("CHANGE",cb);
}

_getresult(){
  return _result;
}
_getexpression(){
  return _expression;
}
}

export default new Store();
