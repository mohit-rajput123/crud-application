import React, { useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate();
    const [inpval,setInp] = useState({
       name : "", 
       email : "", 
       age : "", 
       mobile : "", 
       work : "", 
       address : "", 
       desc : "", 
    })

    const setdata = (e)=>{
   console.log(e.target.value)
   const {name,value} = e.target;
   setInp((preval)=>{
    return{
        ...preval,
        [name]:value
    }
   })
    }
    const addinpdata = async(e)=>{
      // e.preventdefault();
      const {name,email,age,work,address,desc,mobile} = inpval;
      const res = await fetch('http://localhost:8003/Register',{
        method:"POST",
        headers:{
          "Content-type": "application/json"
        },
        body:JSON.stringify({
          name,email,age,work,address,desc,mobile
        })
      })
      const data = await res.json();
      console.log(data);

      if(res.status===404 || !data){
        alert("error");
        console.log("error")
      }else{
        alert("data added")
        navigate('/')
        console.log("data added")
      }
    }
  return (
    <div className='container'>
    <NavLink to='/'>Home</NavLink>
    {/* <form className='mt-5'> */}
    <div className='row'> 
      <h1>hello</h1>

  <div className=" mb-3 col-lg-6 col-md-6 col-12 ">
    <label   className="form-label">Name</label>
    <input type="text" value={inpval.name} onChange={setdata}  className="form-control" name='name' id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className=" mb-3 col-lg-6 col-md-6 col-12">
    <label   className="form-label">email</label>
    <input type="email"  value={inpval.email} onChange={setdata} className="form-control" name='email' id="exampleInputPassword1"/>
  </div>
  <div className=" mb-3 col-lg-6 col-md-6 col-12">
    <label   className="form-label">Age</label>  
    <input type="number"  value={inpval.age} onChange={setdata} className="form-control" name='age' id="exampleInputPassword1"/>
  </div>
  <div className=" mb-3 col-lg-6 col-md-6 col-12">
    <label   className="form-label">Mobile</label>
    <input type="number"  value={inpval.mobile} onChange={setdata} className="form-control" name='mobile' id="exampleInputPassword1"/>
  </div>
  <div className=" mb-3 col-lg-6 col-md-6 col-12">
    <label   className="form-label">Work</label>
    <input type="text"  value={inpval.work} onChange={setdata}  className="form-control" name='work' id="exampleInputPassword1"/>
  </div>
  <div className=" mb-3 col-lg-6 col-md-6 col-12">
    <label   className="form-label">Address</label>
    <input type="text"  value={inpval.address} onChange={setdata}  className="form-control" name='address' id="exampleInputPassword1"/>
  </div>
  <div className=" mb-3 col-lg-12 col-md-12 col-12">
    <label   className="form-label">Description</label>
    <textarea name="desc" value={inpval.desc} onChange={setdata} className='form-control' id="exampleInputPassword1" ></textarea>
  </div>
   
  <button type="submit" onClick={addinpdata} className="btn btn-primary">Submit</button>
  </div>
{/* </form> */}
    </div>
  )
}

export default Register