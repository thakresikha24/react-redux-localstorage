import { 
    BLOG_FAIL, 
    BLOG_REQUEST, 
    BLOG_SUCCESS,
    BLOG_CREATE,
    BLOG_DELETE
} from '../Actiontypes';
import {v4 as uuidv4} from 'uuid';


const initState = {
blogs: [],
errors: null,
loading: false,
id : uuidv4()
};

const vetReducer = (state=initState, {type, payload}) => {
switch (type) {
    case BLOG_REQUEST:
        return {
            ...state,
            loading: true
        }
    case BLOG_SUCCESS:
        
        return {
            ...state,
            loading: false,
            blogs: payload
        }
    case BLOG_FAIL:
        return {
            ...state,
            loading: false,
            errors: payload
        }
    case BLOG_CREATE: 
        let b = [...state.blogs, payload];
        return {
            ...state,
            loading: false,
            blogs: b
        }

        // case BLOG_DELETE:
        //     return{
        //     blogs: [state.blogs.filter((Blog) => Blog.id !== payload.id)] 
        //     }

            
    default:
        return state;
}
}

export default vetReducer