import { ADD_ITEM,UPDATE_ITEM,REMOVE_ITEM } from "./actionType";

export const add_item=(item)=>{
    return{
        type:ADD_ITEM,
        payload:item
    }
}

export const update_item=(index,item)=>{
    return{
        type:UPDATE_ITEM,
        payload_index:index,
        payload:item
        
    }

}
export const remove_item=(index)=>{
    return{
        type:REMOVE_ITEM,
        index:index

    }
}