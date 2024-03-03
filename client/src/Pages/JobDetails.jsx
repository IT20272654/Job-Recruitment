import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import {FiCalendar, FiClock, FiDollarSign, FiMapPin} from "react-icons/fi"

const JobDetails = () => {
    const {id} = useParams();
    const [job, setJob] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/all-jobs/${id}`).then(res => res.json()).then(data => setJob(data))
    }, [])


    const handdleApply = async() => {
        const { value: url } = await Swal.fire({
            input: "url",
            inputLabel: "URL address",
            inputPlaceholder: "Enter the URL"
          });
          if (url) {
            Swal.fire(`Entered URL: ${url}`);
          }
    }

  return (
    // <><div className='bg-image'>
    // <table align='center'>
    //     <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-24'>
    //     <br/><br/><br/><br/><br/>
    //         <h1 className='JobHeading'>We are hiring<br/> <span className='text-blue'>{job.jobTitle}</span> </h1>
    //         <p className='jobDescription'>Thousands of jobs in the computer, engineering and technology sectors are waiting for you.</p>
    //         <table align='center'>
    //         {/* <h2 className='jobDescription'>JobDetails: {id}</h2> */}
    //         <br/>
    //         <button className="px-40 py-4 bg-primary text-xl text-white rounded hover:bg-body hover:text-white transition-all duration-300" onClick={handdleApply}>Apply Now</button>
    //         </table>
    //     </div>
    // </table>

    
    // <br/><br/><br/><br/><br/>
    //     </div>
    //     </>


    <div>
    <table align='center'>
   <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-0 py-24'>
       <h1 className='JobHeading'>We are hiring <span className='text-blue'>{job.jobTitle}</span> </h1>
   </div>
</table>
        <div className='splitScreen'>
         <div className='topPane'>
         <section className='cardDescription'>
         <h3 className='text-lg font-semibold mb-2'>Company Information</h3>
        <img className='descriptionImage' src={job.companyLogo} alt="" />
         <table cellPadding={10}>
         <tr>
           <td>Company Name :</td>
           <td> {job.companyName}</td>
         </tr>
         <tr>
           <td>Company Email Address :</td>
           <td> {job.email}</td>
         </tr>
         </table>
            <div>
                {/* <h4 className='text-primary mb-1'>{job.companyName}</h4> */}           
            <br/>
            <h3 className='text-lg font-semibold mb-2'>Job Description</h3>
                <p className='text-base text-primary/'>{job.description}</p>
            </div>
   </section>
         </div>
         
         <div className='bottomPane'>

         <section className='cardDescription'>
         <h3 className='text-lg font-semibold mb-2'>Job Overview</h3>
         <br/>
         <table cellPadding={10}>
         <tr>
           <td>Posted date :</td>
           <td> {job.postingDate}</td>
         </tr>
         <tr>
           <td>Location :</td>
           <td> {job.jobLocation}</td>
         </tr>
         <tr>
           <td>Experience Level :</td>
           <td> {job.experienceLevel}</td>
         </tr>
         <tr>
           <td>Employeement Type :</td>
           <td> {job.employmentType}</td>
         </tr>
         <tr>
           <td>Salary :</td>
           <td> Around Rs. {job.maxPrice} yearly</td>
         </tr>
         </table>
         <br/>
         <a href='mailto:'><button className="login-button-home">Apply Now</button></a>
          
   </section>




         </div>
        </div>

    </div>
  )
}

export default JobDetails