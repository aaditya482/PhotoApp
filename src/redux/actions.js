//remove

export function removePost(index){
    return {
        // reducer will know that the actions dispached is for removing photo
        type: 'REMOVE_POST',
        index // same as index: index
    }
}


//adding post

export function addPost(post) {
    return {
        // reducer will know that the actions dispached is for removing photo
        type: 'ADD_POST',
        //    post: post
    // key and value has same name, so we can use ES6 to make it more concise
        post
    }
}
