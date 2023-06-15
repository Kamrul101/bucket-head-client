import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";



const Register = () => {
    const {createUser,updateUserProfile}= useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    
    
    const navigate = useNavigate();
    const onSubmit = data => {
        console.log(data)
        if(data.password != data.confirm){
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Password didn't match",
                showConfirmButton: false,
                timer: 1500
              });
            return;
        }
        createUser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photo)
            .then(()=>{
              const saveUser = {name: data.name, email:data.email,photo: data.photo}
              fetch('https://summer-school-server-two.vercel.app/users',{
                method:"POST",
                headers:{
                  'content-type':'application/json'
                },
                body:JSON.stringify(saveUser)
              })
              .then(res=>res.json())
              .then(data=> {
                if(data.insertedId){
                  Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Your work has been saved',
                  showConfirmButton: false,
                  timer: 1500
                });
                }
              })
              
                navigate('/')
                  
            })
        })
    };
  return (
    
      
      <div className="card w-full md:w-1/3 md:mx-auto shadow-2xl bg-base-100 my-8">
        <div className="card-body">
        <h1 className="text-5xl font-bold">Sign Up</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your name"
              {...register("name")}
              name="name"
              className="input input-bordered"
              required
            />
          </div>
              <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Email"
              {...register("email")}
              name="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type='password'
              placeholder='Password'
              {...register("password",{ required: true, minLength: 8,  pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/ })}
              name="password"
              className="input input-bordered"
              
            />
            {errors.password?.type === 'minLength' && <p  className="text-red-500">Minimum 8 characters long</p>}
              {errors.password?.type === 'pattern' && <p className="text-red-500">At least one Uppercase, lowercase, one digit and special character</p>}
            
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              {...register("confirm")}
              name="confirm"
              
              className="input input-bordered"
            />
            
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo url"
              {...register("photo")}
              name="photo"
              required
              className="input input-bordered"
            />
            
          </div>
          <div className="form-control mt-6">
            
            <input className="btn btn-primary" type="submit" value="Sign up" />
          </div>
          </form>
          <p className="my-4 text-center">Already have an account? <Link className="text-orange-600 text-bold" to='/login'>Login</Link></p>
          
        </div>
      </div>
   
  );
};

export default Register;
