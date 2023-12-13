import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { starting_request,data_fetch,failure_request,fetchposts } from '../redux/actions/fetchingActions'
import axios from 'axios'
const FetchData = () => {
    const {loading,data,error}=useSelector(state=>state)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchposts())
        // dispatch(starting_request)
        // axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
        // .then(res=>dispatch(data_fetch(res.data))).catch((err)=>dispatch(failure_request(err.message)))
    },[])
  return (
    <div>
        <h1>FetchData</h1>
        {
            data&&data.map((item,i)=>{
                return <p>{item.title}</p>
            })
        }
    </div>
  )
}

export default FetchData