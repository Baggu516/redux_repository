import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increase,decrease,reset } from '../redux/actions/CounterActions'
const Conter = () => {
    const t=useSelector(state=>state.count)
    console.log(t,"useselection")
    const dispatch= useDispatch()
  return (
    <div>Conter:{t}
    <button onClick={()=>dispatch(increase())}>+</button>
    <button onClick={()=>dispatch(decrease())}>-</button>
    <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Conter