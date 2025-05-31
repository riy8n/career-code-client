import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobsApply = () => {
    const {id : jobId}=useParams()
    const{user}=useContext(AuthContext)
    const navigate =useNavigate()
    console.log(jobId,user)
    const handleForm=e=>{
        e.preventDefault()
        const form =e.target
        const linkedIn=form.linkdin.value
        const gitHub=form.github.value
        const resume=form.resume.value
        console.log(linkedIn,gitHub,resume)
          const applications = {
            jobId,
            applicant: user.email,
          linkedIn,
          gitHub,
          resume
        }
       
          axios.post('http://localhost:3000/applications', applications)
            .then(res => {
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your application has been submitted",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      navigate('/')
                }
            })
            .catch(error => {
                console.log(error)
            })

    }
     
    return (
        <div className='w-11/12 mx-auto'>
        <h1 className='font-bold text-center text-3xl
        '>Apply for Jobs <span><Link  to={`/jobs/${jobId}`}>Details</Link></span> </h1>
        <form onSubmit={handleForm} >
       <div className="card-body flex justify-center items-center">
        <fieldset className="fieldset">
          <label className="label">LinkDin</label>
          <input name='linkdin' type="url" className="input" placeholder="Your linkDin" />
          <label className="label">GitHub</label>
          <input name='github' type="url" className="input" placeholder="Your github" />
          <label className="label">Resume</label>
          <input name='resume' type="url" className="input" placeholder="Your Resume" />
         
          <input className='btn border-2 p-2' type="submit" value="Apply" />
        </fieldset>
      </div>
     </form>

        </div>
    );
};

export default JobsApply;