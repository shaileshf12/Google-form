import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'

function AllRoutes() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Dashboard/>}></Route>
        </Routes>
    </Router>
  )
}

export default AllRoutes