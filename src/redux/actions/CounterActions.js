import { Increase,Decrease,Reset } from "./actionType";

export const increase =(value=1)=>{
return {
    type:Increase,
    value:value
}
}

export const decrease=()=>{
    return {
        type:Decrease
    }
}

export const reset=()=>{
    return {
        type:Reset
    }
}
