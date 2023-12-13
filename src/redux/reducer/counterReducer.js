import { Increase,Decrease,Reset } from "../actions/actionType";
const intialstate={count:0}


const counterReducer=(state=intialstate,action)=>{
    switch(action.type){
        case Increase: return {...state,count:state.count+action.value}
        case Decrease: return {...state,count:state.count-1}
        case Reset:return intialstate
        default : return state

    }

}
export default counterReducer;