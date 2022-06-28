
import React, { useEffect } from 'react';
import Navigation from './components/Navigation.js'
import Home from './components/Home.js'
import Display from './components/Display.js'
import { useDispatch} from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { loadBlogs } from './store/Actions/blogaction';
import './App.css'
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(loadBlogs())

  }, [dispatch])
  

  return (
    <>
      <Navigation />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show" element={<Display />} />
      </Routes>
    </>
  )
}

export default App





  
  


