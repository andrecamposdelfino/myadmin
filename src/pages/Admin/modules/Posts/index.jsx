import { useEffect, useState } from "react"

import {Table} from "antd"


export function Posts(){


    const columns = [
        {
            title:'Id',
            dataIndex:'id',
            key:'title'
        },
        {
            title:'Titulo',
            dataIndex:'title',
            key:'age'
        }
    ]

    const [posts, setPosts] = useState([])
    const [load, setLoading] = useState(false)

    useEffect(() => {
       async function fetchPost() {
        setLoading(true)
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await response.json()

            setPosts(data)
            setLoading(false)
       }

       fetchPost()
    }, [])
    return(
        <>
            <h1>Posts...</h1>

             <Table rowKey= "id" columns={columns}  dataSource={posts} /> 
        </>
    )
}