import React,{useEffect, useState} from 'react'
import { NavLink,useParams,useNavigate, Navigate } from 'react-router-dom'
import axios from 'axios'

const Edit = () => {
  // const [getuserdata,setuserdata] = useState([]);
  // console.log(getuserdata)
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
     const {id} = useParams("");
    console.log(id);
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
          // setuserdata(res.data);
          setInp(res.data)
          console.log("get data")
        }
        }
        useEffect(()=>{
          getdata();
        },[])
        const updateuser = async(e)=>{
          e.preventDefault();
          const {name,email,work,address,mobile,desc,age} = inpval;
          try {
            const res2 = await fetch(`http://localhost:8003/updateuser/${id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name, email, work, address, mobile, desc, age,
              }),
            });
      
            const data2 = await res2.json();
            console.log(data2);
      
            if (res2.status === 422 || !data2) {
              alert("Fill all the data");
            } else {
              alert("Data updated successfully");
              navigate("/")
            }
          } catch (error) {
            console.error("Error updating data:", error);
            alert("An error occurred while updating the data");
          }
        };
  return (
    <div>
        
    <div className='container'>
    <NavLink to='/'>Home2</NavLink>
    <form className='mt-5'>
    <div className='row'> 

  <div class=" mb-3 col-lg-6 col-md-6 col-12 ">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" value={inpval.name} onChange={setdata}  class="form-control" name='name' id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class=" mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" class="form-label">email</label>
    <input type="email"  value={inpval.email} onChange={setdata} class="form-control" name='email' id="exampleInputPassword1"/>
  </div>
  <div class=" mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" class="form-label">Age</label>
    <input type="text"  value={inpval.age} onChange={setdata} class="form-control" name='age' id="exampleInputPassword1"/>
  </div>
  <div class=" mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" class="form-label">Mobile</label>
    <input type="number"  value={inpval.mobile} onChange={setdata} class="form-control" name='mobile' id="exampleInputPassword1"/>
  </div>
  <div class=" mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" class="form-label">Work</label>
    <input type="text"  value={inpval.work} onChange={setdata}  class="form-control" name='work' id="exampleInputPassword1"/>
  </div>
  <div class=" mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" class="form-label">Address</label>
    <input type="text"  value={inpval.address} onChange={setdata}  class="form-control" name='address' id="exampleInputPassword1"/>
  </div>
  <div class=" mb-3 col-lg-12 col-md-12 col-12">
    <label for="exampleInputPassword1" class="form-label">Description</label>
    <textarea name="desc" value={inpval.desc} onChange={setdata} className='form-control' id="" cols="30" rows="5"></textarea>
  </div>
   
  <button type="submit" onClick={updateuser} class="btn btn-primary">Submit</button>
  </div>
</form>
    </div>
    </div>
  )
}

export default Edit