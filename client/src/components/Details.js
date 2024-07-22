import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import axios from 'axios';
import { NavLink, useNavigate, useParams } from 'react-router-dom';


const Details = () => {
    const [getuserdata,setuserdata] = useState([]);
    console.log(getuserdata)
    const {id} = useParams("");
    console.log(id);
    const navigate =  useNavigate();
    const getdata = async()=>{
        // e.preventdefault();
        // const {name,email,age,work,address,desc,mobile} = inpval;  
        const res = await axios.get(`http://localhost:8003/getuser/${id}`)
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
            getdata();
        },[])
        const deleteuser = async (id) => {
            try {
              const res = await axios.delete(`http://localhost:8003/deleteuser/${id}`, {
                headers: {
                  "Content-Type": "application/json"
                }
              });
              console.log(res.data);
        
              if (res.status === 200) {
                console.log("User deleted successfully");
                navigate('/'); // Refresh data after deletion
              } else {
                console.log("Error deleting user:", res.status);
              }
            } catch (error) {
              console.error("Error deleting user:", error);
            }
          };
        
  return (
    <div className='container mt-3'>
        <h1 style={{fontWeight:400}}>Welcome Harsh Pathak</h1>
        <Card sx={{ maxWidth: 675 }}>
        <CardContent>
        <div className="add_btn">
           <NavLink to={`/edit/${getuserdata._id}`}>  <button className='btn btn-primary mx-2'>< EditIcon/></button></NavLink>
        <button className='btn btn-danger' onClick={()=>deleteuser(getuserdata._id)}> <DeleteIcon/></button>
            </div>
            <div className="row">

        <div className='left_view col-lg-6 col-md-6 col-12' >

            <h3 className='mt-5' >Name:<span style={{fontWeight:400}}> {getuserdata.name}</span></h3>
           <h3 className='mt-3'>Age :  <span style={{fontWeight:400}}> {getuserdata.age}</span></h3>
           <p className='mt-3'>< MailOutlineIcon/>Email:<span> {getuserdata.email}</span></p>
           <p className='mt-3'><WorkIcon/>Occupation: <span> {getuserdata.work}</span></p>

        </div>
        <div className='right_view col-lg-6 col-md-6 col-12'>
            
           <p className='mt-3'><PhoneAndroidIcon/>mobile :<span>+91 {getuserdata.mobile}</span></p>
           <p className='mt-3'><LocationOnIcon/>location :<span>{getuserdata.address}</span></p>
           <p className='mt-3'>Description : <span>  {getuserdata.desc}</span></p>
        </div>
            </div>
        </CardContent>
        </Card>
    </div>
  )
}

export default Details