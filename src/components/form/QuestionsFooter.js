import React from 'react'
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';


function QuestionsFooter() {

  const [data, setData] = useState([])

  useEffect(()=>{
    localStorage.setItem('allFormsData', JSON.stringify(data))
  },[data])

  const formData = useSelector((state)=>state.form)
  const finalData = {...formData, questions:formData.questions.slice(0, formData.questions.length-1)}

  // useEffect(()=>{
  //   setData([...data, finalData])
  // },[formData])
  const dataHandler = () =>{
    setData([...data, finalData])
  }

  return (
    <div>
      <Button variant="success" onClick={dataHandler}>Save</Button>
    </div>
  )
}

export default QuestionsFooter