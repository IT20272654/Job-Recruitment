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
    <><div className='bg-color'>
    <table align='center'>
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-24'>
            <h1 className='Heading'>We are hiring <span className='text-blue'>{job.jobTitle}</span> </h1>
            <p className='text-lg text-black/70 mb-8'>Thousands of jobs in the computer, engineering and technology sectors are waiting for you.</p>
        </div>
    </table>

        </div>
        <div className='max-w-screen-2xl contailner mx-auto xl:px-24 px-4'>
            <h2>JobDetails: {id}</h2>
            

            <button className='bg-blue px-8 py-2 text-white' onClick={handdleApply}>Apply Now</button>

        </div></>
  )
}

export default JobDetails