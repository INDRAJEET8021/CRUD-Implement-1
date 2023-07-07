import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';



const Update = () => {
  const[id,setId]=useState('0');
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');

  const navigate=useNavigate();

  useEffect(()=>{
    setId(localStorage.getItem('id'));
    setName(localStorage.getItem('name'));
    setEmail(localStorage.getItem('email'));

  },[]);

  const handleUpdate=(e)=>{
    e.preventDefault(); 
    axios.put(`https://649887119543ce0f49e21fed.mockapi.io/crud-operation/${id}`,
    {
      name:name,
      email:email,
    }
    ).then(()=> {
      navigate('/read');
    });
  };
  return (
    <>
      <h1>Update</h1>
      <form>
        <div classNameName="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            value={name}
             onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
      
        <button type="submit" className="btn btn-primary mx-2" onClick={handleUpdate}>
          Update
        </button>
        <Link to='/read'>
        <button  className="btn btn-secondary mx-2">
          Back
        </button>
        </Link>
      </form>
      
    </>
  )
}

export default Update
