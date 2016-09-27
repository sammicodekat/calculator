import AppDispatcher from '../AppDispatcher'

const Actions ={
   equal(result){
     AppDispatcher.dispatch({
       type: 'EQUAL',
       payload:{result}
     })
   },
   eq(value){
     AppDispatcher.dispatch({
       type: 'EQ',
       payload:{value}
     })
   },
   clear(){
     AppDispatcher.dispatch({
       type: 'CLEAR'
     })
   }
}
export default Actions;
