import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2';

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
    <><div className='bg-image'>
    <table align='center'>
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-24'>
        <br/><br/><br/><br/><br/><br/><br/>
            <h1 className='JobHeading'>We are hiring<br/> <span className='text-blue'>{job.jobTitle}</span> </h1>
            <p className='jobDescription'>Thousands of jobs in the computer, engineering and technology sectors are waiting for you.</p>
            <table align='center'>
            {/* <h2 className='jobDescription'>JobDetails: {id}</h2> */}
            <br/>
            <button className="px-40 py-4 bg-primary text-xl text-white rounded hover:bg-body hover:text-white transition-all duration-300" onClick={handdleApply}>Apply Now</button>
            </table>
        </div>
    </table>
       
     
         <footer class="sticky-footer">

            <ul>
                <li><a href="#">Home</a></li>
                 <li><a href="#">Available Jobs</a></li>
                 <li><a href="#">Post A Job</a></li>
                 <li><a href="#">My Jobs</a></li>
                 <li><a href="#">Contact Us</a></li>
            </ul>
        </footer>
        </div>
        </>
  )
}

export default JobDetails