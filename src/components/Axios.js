import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Axios = () => {
    const [value, setValue] = useState([])
    console.log(value,'55')
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then(res => setValue(res))
    }, [])
    console.log(value.data, "8==")
    return (
        <div>
            <table>
                <tr >
                    <th>postId</th>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>body</th>
                </tr>
                {
              value.data && value.data.map(items=>{
                    return(
                        <>
                          <tr>
                            <td>{items.postId}</td>
                            <td>{items.id}</td>
                            <td>{items.name}</td>
                            <td>{items.email}</td>
                            <td>{items.body}</td>
                          </tr>
                        </>
                    )
                })
            }
            </table>
        </div>
    )
}
export default Axios;