import React, { useEffect, useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from 'react-router-dom';
import axios from 'axios'

const Home = () => {
const [getuserdata,setuserdata] = useState([]);
console.log(getuserdata);
  const getdata = async()=>{
    // e.preventdefault();
    // const {name,email,age,work,address,desc,mobile} = inpval;  
    const res = await axios.get('https://crud-application-backend-gqub.onrender.com/getdata')
    // const data = await res.json();
    console.log(res.data);

    if(res.status===404 || !res){
      // alert("error");
      console.log("error")
    }else{
      // alert("data added")
      setuserdata(res.data);
      console.log("get data")
    }
    }
      useEffect(()=>{
        getdata()
      },[])
      
  const deleteuser = async (id) => {
    try {
      const res = await axios.delete(`https://crud-application-backend-gqub.onrender.com/deleteuser/${id}`, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(res.data);

      if (res.status === 200) {
        console.log("User deleted successfully");
        getdata(); // Refresh data after deletion
      } else {
        console.log("Error deleting user:", res.status);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };


  return (
    <>
    <div className="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Success!</strong> user added successfully!
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    <div className='mt-5' >
    <div className='container'>
        <div className='add-btn mt-2 mb-2'>
            <NavLink to="/register" className='btn btn-primary'>Add data</NavLink>
        </div>
        <table className="table">
  <thead>
    <tr className='table-dark'>
      <th scope="col">id</th>
      <th scope="col">Username</th>
      <th scope="col">email</th>
      <th scope="col">Job</th>
      <th scope="col">Number</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
  {getuserdata.map((element, index) => (
              <tr key={index}>
                <th scope="row">{index}</th>
                <td>{element.name}</td>
                <td>{element.email}</td>
                <td>{element.work}</td>
                <td>{element.mobile}</td>
                <td className='d-flex justify-content-between'>
                 <NavLink to={`view/${element._id}`}><button className='btn btn-success'><RemoveRedEyeIcon /></button></NavLink>  
                 <NavLink to={`edit/${element._id}`}>  <button className='btn btn-primary'><EditIcon /></button></NavLink>
                  <button className='btn btn-danger' onClick={()=>deleteuser(element._id)}><DeleteIcon /></button>
                </td>
              </tr>
            ))}
     
     
  </tbody>
</table>
    </div>

    </div>
    </>
  )
}

export default Home