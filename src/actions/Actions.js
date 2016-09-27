import AppDispatcher from '../AppDispatcher'

const Actions ={
   equal(){
     AppDispatcher.dispatch({
       type: 'EQUAL'
     })
   },
   clear(){
     AppDispatcher.dispatch({
       type: 'CLEAR'
     })
   }
}
export default Actions;
