'use client'
import React,{useState} from 'react'

const List = () => {
    const [name,setName] = useState('sam')
    return (
        <div>
            List {name}
        </div>
    )
}

export default List
