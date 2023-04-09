import React,  {useEffect, useState} from "react";


export default function Posts() {
    const [posts, setPosts] = useState([]);
useEffect (() => {
    async function getPosts() {
        try {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-PT/posts')
            let result = await response.json()
            setPosts(result.data.posts)
            console.log ('result.data.posts', result.data.posts )
            

        } catch(err) {
            console.log(err)
        }
    }

    getPosts()

},[])

return posts.map(post => {
    return(
        <div key={post._id} className="card">
            <div>{post.title}</div>
            <div>{post.description}</div>
            <div>{post.price}</div>
        </div>
    )
})

}