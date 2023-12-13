import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { add_item,update_item,remove_item } from '../redux/actions/TodoActions'
const Todo = () => {
    // .......
    const todo=useSelector(state=>state.todo)
    let dispatch=useDispatch()
    // .................
    const [index,setIndex]=useState("")
    const [a,setA]=useState(false)
    const [text,setText]=useState("")
    const HandleAdd=()=>{
        dispatch(add_item(text));
        setText("")
    }
    const HandleEdit=(id)=>{
        setText(todo[id])
        setIndex(id)
        setA(true)
    }
    const HandleUpdate=()=>{
        dispatch(update_item(index,text))
        setText("")
        setA(false)
        
    }
  return (
    <div>
        <input type="text"  value={text} onChange={(e)=>setText(e.target.value)} placeholder='Enter text...' onKeyPress={(e)=>e.key=="Enter"}/>
        {!a?<button onClick={HandleAdd}>Add_Item</button>:<button onClick={HandleUpdate}>Update_Item</button>}
        {
         todo&&todo.map((item,i)=>{
            return(
                <div key={i}>
                 <p>{item}</p>
                 <button onClick={()=>HandleEdit(i)}>Edit</button>
                 <button onClick={()=>dispatch(remove_item(i))}>Delete</button>
                </div>
               
            )
         })
        }
    </div>
  )
}

export default Todo