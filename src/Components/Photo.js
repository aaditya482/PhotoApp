import React from 'react';
import PropTypes from 'prop-types';

function Photo(props) {
    console.log(props.posts);
    const post = props.post
    return <figure className='figure'>
            <img className='photo' src = {post.imageLink} alt={post.description}/>
            <figcaption><p>{post.description}</p></figcaption>
            <div className='button-container'>
                <button onClick={() =>{
                //    props.onRemovePhoto(post)
                  props.removePost(props.index)
                }}> Remove</button>
            </div>
        </figure>
}

Photo.propTypes = {
    post: PropTypes.array.isRequired,
    //onRemovePhoto: PropTypes.func.isRequired
}

export default Photo
