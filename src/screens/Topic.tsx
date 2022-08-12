import React from 'react'
import { useParams } from 'react-router-dom'
import './Topic.css'


const Topic: React.FC = () => {
    const params = useParams()
    let { topic } = useParams()
    return (
        <>{topic}</>
    )
}
export default Topic