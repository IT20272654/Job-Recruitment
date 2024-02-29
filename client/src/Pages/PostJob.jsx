import { useState } from "react";
import { useForm } from "react-hook-form"
import CreatableSelect from 'react-select/creatable';

const PostJob = () => {


  
        const [selectedOption,setSelectedOption] = useState(null);

        const {
            register,
            handleSubmit, reset,
            formState: { errors },
          } = useForm()
        

          
          const onSubmit = (data) => {
            data.skills=selectedOption;
            //console.log(data)
            fetch("http://localhost:5000/post-job", {
                method:"POST",
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                if(result.acknowledged === true){
                    alert("Job Posted Successfully!!!")
                }
                reset()
            });
        };
        
        const options = [
            {value: "JavaScript", lable: "JavaScript"},
            {value: "C++", label: "C++"},
            {value: "HTML", label: "HTML"},
            {value: "CSS", label: "CSS"},
            {value: "React", label: "React"},
            {value: "Node", label: "Node"},
            {value: "MongoDb", label: "MongoDb"},
        ]
    
        return (

            //   <><div className='bg-color'>
            //     <table align='center'>
            //         <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-24'>
            //             <h1 className='Heading'>Post your <span className='text-blue'>Job</span> here...</h1>
            //             <p className='text-lg text-black/70 mb-8'>Thousands of jobs in the computer, engineering and technology sectors are waiting for you.</p>
            //         </div>
            //     </table>

            // </div>
           
            <div className=""><br/><br/>
            <div className=""><div className="max-w-screen-2xl container mx-auto xl:px-24 px-4"> <br/><div>
           
            


          {/* <div className="mb-20 text-center">
            <p className="text-xl text-headingcolor font-semibold mb-5">Get In Touch</p>
            <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">Contact me
            </h2>
          </div> */}


    {/* Job posting form */}
      <div className="md:w-2/3 mx-auto mb-20">
      <form onSubmit={handleSubmit(onSubmit)} className="jobPostForm">
         
          <div className="flex flex-col sm:flex-row gap-8 items-center mb-8">
            <div className="sm:w-1/2 w-full">
              <label htmlFor="minPrice" className="text-base text-headingcolor w-full">Job Title</label>
              <input type="text" {...register("jobTitle")} className="block border border-primary rounded-lg py-2 mt-2 w-full" required/>
            </div>

            <div className="sm:w-1/2 w-full">
              <label htmlFor="maxPrice" className="text-base text-headingcolor w-full">Company Name</label>
              <input type="text"{...register("companyName")} className="block border border-primary rounded-lg py-2 mt-2 w-full" required/>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 items-center mb-8">
            <div className="sm:w-1/2 w-full">
              <label htmlFor="jobTitle" className="text-base text-headingcolor w-full">Minimum Salary</label>
              <input type="text" {...register("minPrice")} 
              className="block border border-primary rounded-lg py-2 mt-2 w-full" required/>
            </div>

            <div className="sm:w-1/2 w-full">
              <label htmlFor="companyName" className="text-base text-headingcolor w-full">Maximum Salary</label>
              <input type="text" {...register("maxPrice")} className="block border border-primary rounded-lg py-2 mt-2 w-full" required/>
            </div>
          </div>

          <div className="w-full mb-8">
            <label htmlFor="salaryType" className="text-base text-headingcolor w-full">Category</label>
            <select {...register("salaryType")} className="block border border-primary rounded-lg py-2 px-2 mt-2 w-full">
            <option value="">Choose Category</option>
            <option value="Design & Creative">Design & Creative</option>
            <option value="Design & Development">Design & Development</option>
            <option value="Sales & Marketing">Sales & Marketing</option>
            {/* <option value="Mobile Application">Mobile Application</option> */}
            <option value="Construction">Construction</option>
            <option value="Information Technology">Information Technology</option>
            {/* <option value="Real Estate">Real Estate</option> */}
            <option value="Content Writer">Content Writer</option>
            </select>
          </div>

          <div className="w-full mb-8">
            <label htmlFor="jobLocation" className="text-base text-headingcolor w-full">Location</label>
            <select {...register("jobLocation")} className="block border border-primary rounded-lg py-2 px-2 mt-2 w-full">
            <option value="">Choose Location</option>
            <option value="Western Province">Western Province</option>
            <option value="Southern Province">Southern Province</option>
            <option value="Central Province">Central Province</option>
            <option value="Eastern Province">Eastern Province</option>
            <option value="Northern Province">Northern Province</option>
            <option value="North Western Province">North Western Province</option>
            <option value="North Central Province">North Central Province</option>
            <option value="Uva Province">Uva Province</option>
            <option value="Sabaragamuwa Province">Sabaragamuwa Province</option>
            </select>
          </div>


          <div className="flex flex-col sm:flex-row gap-8 items-center mb-8">
            <div className="sm:w-1/2 w-full">
              <label htmlFor="postingDate" className="text-base text-headingcolor w-full">Job Posting Date</label>
              <input type="date" {...register("postingDate")}
              className="block border border-primary rounded-lg py-2 mt-2 w-full" required/>
            </div>

            <div className="sm:w-1/2 w-full">
              <label htmlFor="postingDate" className="text-base text-headingcolor w-full">Company Logo</label>
              <input type="url" placeholder={"Paste your company url logo here"} {...register("companyLogo")}
              className="block border border-primary rounded-lg py-2 mt-2 w-full" required/>
            </div>
          </div>

          <div className="w-full mb-8">
            <label htmlFor="experienceLevel" className="text-base text-headingcolor w-full">Experience Level</label>
            <select {...register("experienceLevel")} className="block border border-primary rounded-lg py-2 px-2 mt-2 w-full">
            <option value="">Choose Your Experience Level</option>
            <option value="Any experience">Any experience</option>
            <option value="Work remotely">Work remotely</option>
            <option value="Intership">Intership</option>
            </select>
          </div>

          <div className="w-full mb-8">
              <label htmlFor="skills" className="text-base text-headingcolor w-full">Required Skill Sets:</label>
              <CreatableSelect
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                isMulti
                className="block border border-primary rounded-lg py-2 mt-2 w-full" />
          </div>

          <div className="w-full mb-8">
            <label htmlFor="experienceLevel" className="text-base text-headingcolor w-full">Experience Level</label>
            <select {...register("employmentType")} className="block border border-primary rounded-lg py-2 px-2 mt-2 w-full">
            <option value="">Choose Your Employee Type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Temporary">Temporary</option>
            </select>
          </div>

           
          <div className="w-full mb-8">
            <label htmlFor="description" className="text-base text-headingcolor w-full">Description</label>
            <textarea name="message" id="message" cols="30" rows="5" placeholder="Type your description..." {...register("description")}className="block border border-primary rounded-lg py-2 px-2 mt-2 w-full"></textarea>
          </div>
         
          <div className="w-36 mx-auto border rounded-lg">
          <input type="submit" value="Submit" className="jobPost-submit"/>
          </div>
          <br/><br/>
        </form>
      </div>
      
      </div>
    
      </div>
      <footer class="sticky-footer">
          <ul>
             <li><a href="/">Home</a></li>
             <li><a href="/Search">Available Jobs</a></li>
             <li><a href="/post-job">Post A Job</a></li>
             <li><a href="/contact">Contact Us</a></li>
             <li><a href="/bugReport">Report Bugs</a></li>
             <li><a href="/about">About Us</a></li>
         </ul>
      </footer>
      <br/><br/><br/>
       </div>
      </div>
        )
    }


export default PostJob