import AppDispatcher from '../AppDispatcher';
import {EventEmitter} from 'events';

let _input =0;
class Store extends EventEmitter{
  constructor(){
    super();
    AppDispatcher.register(action => {
      switch(action.type){
        case 'EQUAL':
        let {result} =action.payload;
        return input = eval(result);
        this.emit('CHANGE');
        break;
        case 'CLEAR':
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

getsum(){
  return _input;
}
}

export default new Store();
