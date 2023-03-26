import React from 'react'
import { useEffect } from 'react'

function DisplayForms() {

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('allFormsData'))
        console.log(data)
    })
  return (
    <div>

    </div>
  )
}

export default DisplayForms