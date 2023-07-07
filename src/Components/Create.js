import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const history = useNavigate();

  const Header ={"Access-Control-Allow-Origin" : " * "};
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("Clicked");
    axios.post ("https://649887119543ce0f49e21fed.mockapi.io/crud-operation",{
         name: name,
         email: email,
         Header
        });
        history("/read");

        //  .then(()=> {
        //    history("/read");

      //  });

      };
  return (
    <>
    <div className='d-flex justify-content-between m-2'>
        <h2>Create</h2>
        <Link to="/read">
      <button className='btn btn-primary'>Show Data</button>
        </Link>
    </div>
     
      <form>
        <div classNameName="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
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
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        
      
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
