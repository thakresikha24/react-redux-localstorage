import {
    BLOG_FAIL,
    BLOG_REQUEST,
    BLOG_SUCCESS,
    BLOG_CREATE,
    BLOG_DELETE
} from '../Actiontypes';


export const loadBlogs = () => (dispatch) => {
    try {
        dispatch({ type: BLOG_REQUEST })
        setTimeout(() => {
            const data = JSON.parse(localStorage.getItem('Blogs')) || [];
            dispatch({
                type: BLOG_SUCCESS,
                payload: data
            })
        }, 2000);

    } catch (error) {
        dispatch({
            type: BLOG_FAIL,
            payload: error
        })
    }
}


export const createblog = (blog) => (dispatch, getState) => {
    try {

        let NewBlog = [...getState().blogs.blogs, blog];
        localStorage.setItem("Blogs", JSON.stringify(NewBlog));

        dispatch({
            type: BLOG_CREATE,
            payload: blog
        })


    } catch (error) {
        dispatch({
            type: BLOG_FAIL,
            payload: error
        })
    }

}  
export const deleteblog =(id) => (dispatch, getState)=>{
    try{
        dispatch({
            type: BLOG_REQUEST,
           
        })
        const data =[...getState().blogs.blogs, id ];
        localStorage.setItem('blogs', JSON.stringify(data));
        dispatch({type: BLOG_DELETE, payload:data})
    
    }catch (error){
        dispatch({
            type: BLOG_FAIL,
            payload: error
    })
    }
}