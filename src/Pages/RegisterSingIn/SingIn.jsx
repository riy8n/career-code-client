import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import Lottie from 'lottie-react';
import signin from '../../assets/Lottie/signin.json'
import LogInWithSocial from '../Shared/LogInWithSocial';
import { Link } from 'react-router';

const SingIn = () => {
      const {singInUser}=useContext(AuthContext)
      const handleSingIn=e=>{
        e.preventDefault()
        const form= e.target
        const email=form.email.value
        const password=form.password.value
        console.log(email,password)
        //  create user 
       singInUser(email,password)
       .then(result=>{
        console.log(result)
       })
       .catch(error=>{
        console.log(error)
       })
    
    
      }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="w-[300px] text-center lg:text-left">
      <Lottie  animationData={signin} loop={true}> </Lottie>
    
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-5xl text-center font-bold">SingIn now!</h1>
     <form onSubmit={handleSingIn} >
       <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
         
          <button className="btn btn-neutral mt-4">Register</button>
         <p>Don't you have any account? Please <span className='text-red-400' ><Link to='/register'>SingUp</Link></span> </p>
        
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

export default SingIn;