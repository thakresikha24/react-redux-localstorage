import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

import { createblog } from '../store/Actions/blogaction';
const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const SubmitHandler = (e) => {
        e.preventDefault();

        const blog = {
            title: e.target.title.value,
            subtitle:e.target.subtitle.value,
            shortDescription:e.target.shortDescription.value
        }

        dispatch(createblog(blog));
        navigate('/show')
    }

    return (
      <div classname="container">
        <form onSubmit={SubmitHandler} className="container mt-5 ">

            <div className="col-md-12">
                <label className="form-label">Title</label>
                <input 
                    type="text" 
                    name="title"
                    className="form-control" />
            </div>
            <br />
            <div className="col-md-12">
                <label className="form-label">Sub Title</label>
                <input 
                    type="text" 
                    name="subtitle"
                    className="form-control" />
            </div>
            <br />
            <div className="col-md-12">
                <label className="form-label">Short Description</label>
                <input 
                    type="text" 
                    name="shortDescription"
                    className="form-control" />
            </div>
            <br />
            <div class="d-grid gap-2 col-6 mx-auto">
                <button type="submit" className="btn btn-outline-warning">Submit </button>
            </div>
        </form>
        </div>
    )
}

export default Home