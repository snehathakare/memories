import React from 'react'
import { useSelector } from 'react-redux'

export const Post = () => {
    const posts = useSelector(state => state.posts)
    console.log(posts)
    return (
        <div>
            this is a new post
        </div>
    )
}

