import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const Register = () => {
    const {createUser,updateUserProfile}= useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    
    const navigate = useNavigate()
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photo)
            .then(()=>{
                console.log("user profile updated");
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Account created successfully',
                    showConfirmButton: false,
                    timer: 1500
                  });
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
              type="text"
              placeholder="Password"
              {...register("password",{ required: true, minLength: 8,  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/ })}
              name="password"
              className="input input-bordered"
            />
            {errors.password?.type === 'minLength' && <p  className="text-red-500">Minimum 8 characters long</p>}
              {errors.password?.type === 'pattern' && <p className="text-red-500">One Uppercase and lowercase and one digit</p>}
            
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
