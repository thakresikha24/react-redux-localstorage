import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteblog } from '../store/Actions/blogaction';

const Display = () => {
    const dispatch = useDispatch()
    const { blogs, errors, loading } = useSelector(state => state.blogs);


    useEffect(() => {
        if (errors) {
            console.log(errors);
            alert('Something Went Wrong')
        }
    }, [errors])




    return loading ? 'Loading...' : (
        <div className="list-group mt-5 container">
            {
                blogs.map((b, i) => {
                    return (
                        <a key={i}  href="#" className="list-group-item list-group-item-action" aria-current="true">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{b.title}</h5>
                               
                            </div>
                            <p className="mb-1">{b.subtitle}</p>
                            <small>{b.shortDescription}</small>
                             <button onClick={() => { dispatch(deleteblog(b)) }}>delete</button>
                        </a> 
                    )
                })
            }
        </div>
    )
}

export default Display