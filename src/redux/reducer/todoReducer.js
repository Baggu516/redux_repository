// import { add_item,remove_item,update_item } from "../actions/TodoActions";
import { ADD_ITEM,REMOVE_ITEM,UPDATE_ITEM } from "../actions/actionType";

let intialstate=[]

const todoReducer=(state=intialstate,action)=>{
    switch(action.type){
        case ADD_ITEM: return [...state,action.payload]
        // case UPDATE_ITEM: return [...state,state.splice(action.payload_index,1,action.payload)]
        case UPDATE_ITEM:
            // let t=[...state]
            state.splice(action.payload_index,1,action.payload)
            return state

        case REMOVE_ITEM: 
        console.log("remove",state)
          state.splice(action.index,1)
          console.log(state,"after")
        //   console.log(state.splice(action.index,1),state)
          return [...state]
        default : return state
                  
                
    }
}
export default todoReducer