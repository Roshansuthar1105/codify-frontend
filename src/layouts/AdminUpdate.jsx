import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';
function AdminUpdate() {
    const [user , setUser] = useState({
        username:"",
        email:"",
        phone:"",
    })
    const {authorizationToken,API}=useAuth();
    const params = useParams();
    const handleChange = (e)=>{
        const name =e.target.name;
        const value =e.target.value;
        setUser({
            ...user,
            [name]:value
        })
    }
    const fetchUserdata = async ()=>{
        try {
            const response = await fetch(`${API}/admin/users/${params.id}`,{
                method:"GET",
                headers:{
                    Authorization:authorizationToken
                }
            })
            if(response.ok){
                const data = await response.json();
                setUser({
                    email:data.email,
                    username:data.username,
                    phone:data.phone
                });
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchUserdata();
    },[]);
    const handleSubmit = async(e)=>{
        e.preventDefault();
        
        try {
            const response = await fetch(`${API}/admin/users/update/${params.id}`,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:authorizationToken
                },
                body:JSON.stringify(user)
            })
            if(response.ok){
                toast.success("User Updated successfully");
            }else{
                toast.error("User not updated");
            }
            const data = await response.json();
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username : </label>
        <input
          type="username"
          id="username"
          name="username"
          required
          placeholder="Enter your username"
          value={user.username}
          onChange={handleChange}
        />
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Enter your email"
          value={user.email}
          onChange={handleChange}
        />
        <label htmlFor="phone">mobile : </label>
        <input
          type="number"
          id="phone"
          name="phone"
          required
          placeholder="Enter your phone"
          value={user.phone}
          onChange={handleChange}
        />
        <button type="submit">update</button>
      </form>
    </div>
  )
}

export default AdminUpdate
