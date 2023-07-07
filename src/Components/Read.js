import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const[tabledark,setTableDark]=useState("");

  function getData() {
    axios
      .get("https://649887119543ce0f49e21fed.mockapi.io/crud-operation")
      .then((res) => {
        console.log("res.data");
        setData(res.data);
      });
  }
  function handleDelete(id) {
    axios
      .delete(
        `https://649887119543ce0f49e21fed.mockapi.io/crud-operation/${id}`
      )
      .then(() => {
        getData();
      });
  }

  //Data Save to local storage
  const setDataToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" 
      onClick={()=>{
        if(tabledark==="table-dark")setTableDark("")
        else setTableDark("table-dark");
      }}
      />
      </div>

      <div className="d-flex justify-content-between m-2">
        <h2>Read Operation</h2>
        <Link to="/">
          <button className="btn btn-secondary">Create</button>
        </Link>
      </div>

      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn-success "
                        onClick={() =>
                          setDataToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.email
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;
