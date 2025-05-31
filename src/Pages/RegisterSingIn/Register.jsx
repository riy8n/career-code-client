import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import lottie from "../../assets/Lottie/lottite.json";
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import LogInWithSocial from '../Shared/LogInWithSocial';
import { useNavigate } from 'react-router';

const Register = () => {
  const {createUser}=useContext(AuthContext)
  const navigate =useNavigate()
  const handleRegister=e=>{
    e.preventDefault()
    const form= e.target
    const email=form.email.value
    const password=form.password.value
    console.log(email,password)
    //  create user 
    createUser(email,password)
    .then(result=>{
      console.log(result)
      navigate('/')
    }).catch(error=>{
        console.log(error)
      })


  }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="w-[300px] text-center lg:text-left">
      <Lottie  animationData={lottie} loop={true}> </Lottie>
    
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-5xl text-center font-bold">Register now!</h1>
     <form onSubmit={handleRegister} >
       <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
         
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </div>
     </form>
     <LogInWithSocial></LogInWithSocial>
    </div>
  </div>
            </div>
        </div>
    );
};

export default Register;