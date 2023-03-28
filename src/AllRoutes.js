import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import Header from './components/form/Header'
import Questions from './components/form/Questions'
import Responses from './components/form/Responses'
import Settings from './components/form/Settings'
import ShowForm from './components/display-form/ShowForm'
import ShowFormQuestions from './components/display-form/ShowFormQuestions'

function AllRoutes() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Dashboard/>}></Route>
            <Route path=':id' element={<Header/>}>
                <Route path='questions' element={<Questions/>}></Route>
                <Route path='responses' element={<Responses/>}></Route>
                <Route path='settings' element={<Settings/>}></Route>
            </Route>
            <Route path='form/:id' element={<ShowForm/>}>
            <Route path='questions' element={<ShowFormQuestions/>} ></Route>
            </Route>
        </Routes>
    </Router>
  )
}

export default AllRoutes