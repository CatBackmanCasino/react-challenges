import React from 'react'
import css from "./css/PostItem.module.css"

function PostItem(props) {
    return (
        <div>{
            props.savedPosts.map(post => {
                const {title, name, image, description} = post
                return <div key={post.title} className={css.SearchItem}>
                    {title}
                    {name}
                    <img src={image} />
                    {description}
                </div>
            })
        }
        </div>
    )
}

export default PostItem