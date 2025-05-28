import React from 'react';
import { motion } from "motion/react"
import team1 from "../../assets/team/team1.jpg"
import team2 from "../../assets/team/team2 (2).jpg"
const Banner = () => {
    return (
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='flex-1'>
      <motion.img
      src={team1}
      animate={
        {
          y:[100,150,100]

        }
      }
     
      transition={{duration:5, repeat:Infinity}}
      className="max-w-sm rounded-t-[40px] rounded-r-[40px] w-[300px]   border-b-8 border-l-8 border-blue-500 shadow-2xl"
    />
      <motion.img
      src={team2}
      animate={
        {
          x:[100,150,100]

        }
      }
   
      transition={{duration:5,
        delay:5,
         repeat:Infinity}}
      className="max-w-sm rounded-t-[40px] rounded-r-[40px] mt-3 border-b-8 border-l-8 border-blue-500 w-[350px]  shadow-2xl"
    />
    </div>
    <div className='flex-1'>
      <h1 className="text-5xl font-bold">The 
   <motion.span 
   animate={
    {
      color:['#ffa07a','#0000cd','#ffdead','#87ceeb'],
      transition:{duration:4 , repeat:Infinity}
    }
   }
   >Easiest Way</motion.span>
        </h1>
        <motion.h1 
        className="text-5xl font-bold"
          animate={{
            rotate:360,
  
    transition: { duration: 10 }
  }}
        >
          to Get Your New Job
        </motion.h1>
      <p className="py-6">
       Each month, more than 3 million job seekers turn to
website in their search for work, making over 140,000
applications every single day
      </p>
      <motion.button 
      
       whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')}className="btn btn-primary">Get Started</motion.button>
    </div>
  </div>
</div>
    );
};

export default Banner;