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

              <><div className='bg-color'>
                <table align='center'>
                    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-24'>
                        <h1 className='Heading'>Post your <span className='text-blue'>Job</span> here...</h1>
                        <p className='text-lg text-black/70 mb-8'>Thousands of jobs in the computer, engineering and technology sectors are waiting for you.</p>
                    </div>
                </table>

            </div><div className="form-color"><div className="max-w-screen-2xl container mx-auto xl:px-24 px-4"> <br/><div>
           


                        {/*Post job form*/}
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        
                            <div className="create-job-flex ">
                                <div className="lg:w-1/2 w-full">
                                    <label className="block mb-2 text-lg">Job Title</label>
                                    <input type="text" placeholder={"Web Developer"}
                                        {...register("jobTitle")} className="create-job-input" />
                                </div>
                                <div className="lg:w-1/2 w-full">
                                    <label className="block mb-2 text-lg">Company Name</label>
                                    <input type="text" placeholder={"Ex: Microsoft"}
                                        {...register("companyName")} className="create-job-input" />
                                </div>
                            </div>

                            <div className="create-job-flex">
                                <div className="lg:w-1/2 w-full">
                                    <label className="block mb-2 text-lg">Minimum Salary</label>
                                    <input type="text" placeholder={"$20k"}
                                        {...register("minPrice")} className="create-job-input" />
                                </div>
                                <div className="lg:w-1/2 w-full">
                                    <label className="block mb-2 text-lg">Maximum Salary</label>
                                    <input type="text" placeholder={"$120k"}
                                        {...register("maxPrice")} className="create-job-input" />
                                </div>
                            </div>

                            <div className="create-job-flex">
                                <div className="lg:w-1/2 w-full">
                                    <label className="block mb-2 text-lg">Salary Type</label>
                                    <select {...register("salaryType")} className="create-job-input">
                                        <option value="">Choose Your Type</option>
                                        <option value="Hourly">Hourly</option>
                                        <option value="Monthly">Monthly</option>
                                        <option value="Yearly">Yearly</option>
                                    </select>
                                </div>
                                <div className="lg:w-1/2 w-full">
                                    <label className="block mb-2 text-lg">Job Location</label>
                                    <input type="text" placeholder={"Ex: Colombo"}
                                        {...register("jobLocation")} className="create-job-input" />
                                </div>
                            </div>

                            <div className="create-job-flex">
                                <div className="lg:w-1/2 w-full">
                                    <label className="block mb-2 text-lg">Job Posting Date</label>
                                    <input type="date" placeholder={"Ex: 02/12/2024"}
                                        {...register("postingDate")} className="create-job-input" />
                                </div>
                                <div className="lg:w-1/2 w-full">
                                    <label className="block mb-2 text-lg">Experience Level</label>
                                    <select {...register("experienceLevel")} className="create-job-input">
                                        <option value="">Choose Your Experience Level</option>
                                        <option value="Any experience">Any experience</option>
                                        <option value="Work remotely">Work remotely</option>
                                        <option value="Intership">Intership</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block mb-2 text-lg">Required Skill Sets:</label>
                                <CreatableSelect
                                    defaultValue={selectedOption}
                                    onChange={setSelectedOption}
                                    options={options}
                                    isMulti
                                    className="create-job-input mb-2 text-lg" />
                            </div>

                            <div className="create-job-flex">
                                <div className="lg:w-1/2 w-full">
                                    <label className="block mb-2 text-lg">Company Logo</label>
                                    <input type="url" placeholder={"Paste your company url logo here"}
                                        {...register("companyLogo")} className="create-job-input" />
                                </div>
                                <div className="lg:w-1/2 w-full">
                                    <label className="block mb-2 text-lg">Employeement Type</label>
                                    <select {...register("employmentType")} className="create-job-input">
                                        <option value="">Choose Your Employee Type</option>
                                        <option value="Full-time">Full-time</option>
                                        <option value="Part-time">Part-time</option>
                                        <option value="Temporary">Temporary</option>
                                    </select>
                                </div>
                            </div>

                            <div className="w-full">
                                <label className="block mb-2 text-lg">Job Description</label>
                                <textarea className="w-full pl-3 py-1.5 focus:outline-none"
                                    rows={6}
                                    placeholder="Job Description"
                                    {...register("description")} />
                            </div>

                            <div className="w-full">
                                <label className="block mb-2 text-lg">Job Posted By</label>
                                <input type="email" placeholder={"Company Email"}
                                    {...register("postedBy")} className="create-job-input" />
                            </div>

                            <input type="submit" className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer" /><br/><br/><br/><br/><br/><br/><br/>
                        </form>
                    </div>
                </div></div></>
        )
    }


export default PostJob