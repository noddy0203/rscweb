import React, { useState } from 'react';
import Error from "./Error"
import axios from "axios"
import { useHistory } from 'react-router-dom';


const FormComp = () => {
  const history = useHistory()
  const [state, setState] = useState({
    fullname: "",
    time: "",
    dob: "",
    countryCode: "",
    phone: "",
    email: "",
    grade: ""
  })

  const [error, setError] = useState({})


  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const urlLink = "http://localhost:7000/rsc/students/register"

  const postData = async (e) => {
    //  changing the usual form behaviour
    e.preventDefault();
    // seeting up the error as per state value
    setError(Error(state))
    //adding try catch block 
    try {
      // axios to send data to backend server
      const { fullname, time, dob, countryCode, phone, email, grade } = state
      if (fullname && time && dob && countryCode && phone && email && grade) {
        await axios.post(urlLink, state, {
          headers: { "Content-Type": "application/json" }
        })
      }
      history.push("/")
    } catch (error) {
      console.log(error)
    }

  }

  return <>
    <div className='row parentDiv'>
      <div className='col-md-3 leftsyde'></div>

      <div className='col-md-9 pl-5'>
        <div className="headers">
          <h3>Register a new student</h3>
          <h4>Personal details-</h4>
        </div>
        <form>
          <div className='mb-2'>
            <label htmlFor="fullname">Student name:</label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder='Student full name'
              value={state.fullname}
              onChange={handleChange}
              autoFocus
            />
          </div>
          {error.fullname && <p>{error.fullname}</p>}

          <div className='mb-2'>
            <label htmlFor="time">Time zone:</label>
            <select name="time" id="time" className='timeZone' value={state.time} onChange={handleChange}>
              <option value=""></option>
              <option value="UTC-5">Eastern standard time</option>
              <option value="UTC">Europian standard time</option>
              <option value="UTC+5:30">Indian standard time</option>
            </select>
          </div>

          <div className='mb-2'>
            <label htmlFor="dob" >DOB:</label>
            <input type="date" id="dob" name="dob" max="2020-01-01" min="2002-01-01" value={state.dob} onChange={handleChange} />
          </div>

          <div className='mb-2'>
            <label htmlFor="phone">Country-Code:</label>
            <select name="countryCode" className='countryCode' id="countryCode" value={state.countryCode} onChange={handleChange}>
              <option value=""></option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+91">+91</option>
            </select>
          </div>

          <div className='mb-2'>
            <label htmlFor="phone">whatsapp-number:</label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder='whatsapp mobile number'
              value={state.phone}
              onChange={handleChange}
            />
          </div>
          {error.phone && <p>{error.phone}</p>}
          <div className='mb-2'>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder='xyz@email.com'
              autoComplete='off'
              value={state.email}
              onChange={handleChange}
            />
          </div>
          {error.email && <p className="errorStyle">{error.email}</p>}

          <div className='mb-2'>
            <label htmlFor="grade">Grade:</label>
            <select name="grade" id="grade" className='grades' value={state.grade} onChange={handleChange}>
              <option value=""></option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <button onClick={postData} className="submitButton" >Submit</button>


        </form>
      </div>
    </div>
  </>

};

export default FormComp;
