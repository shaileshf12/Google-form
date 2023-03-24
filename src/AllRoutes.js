import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import Header from './components/form/Header'
import Questions from './components/form/Questions'

function AllRoutes() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Dashboard/>}></Route>
            <Route path=':id' element={<Header/>}>
                <Route path='' element={<Questions/>}></Route>
                <Route path='responses'></Route>
                <Route path='settings'></Route>
            </Route>
        </Routes>
    </Router>
  )
}

export default AllRoutes