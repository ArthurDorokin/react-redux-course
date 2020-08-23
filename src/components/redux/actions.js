import CREATE_POST from "./types";

function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export default createPost