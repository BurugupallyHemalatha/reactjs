import React ,{useState,useEffect}from 'react';
import axios from  'axios';
const URL='https://jsonplaceholder.typicode.com/posts';
const Button =(props)=>{
    const {name,cl,value}=props
    const [data,setData]=useState([]);
    console.log(data.data,'777')
    useEffect(()=>{
     axios.get(URL).then(response=>setData(response.data))
    },[])
    return(
        <div>
        <ul>
            <li>{name}</li>
            <li>{cl}</li>
            <li>{value}</li>
        </ul>
        <div>
        <table border="2" width={300} >
            <tr>
                <th>Id</th>
                <th>UserId</th>
                <th>Title</th>
            </tr>
            {
               data.map(items=>{
                    return(
                        <>
                          <tr>
                            <td>{items.userId}</td>
                            <td>{items.id}</td>
                            <td>{items.title}</td>
                          </tr>
                        </>
                    )
                })
            }
        </table>
        </div>
        </div>
        
    )
}
export default Button;