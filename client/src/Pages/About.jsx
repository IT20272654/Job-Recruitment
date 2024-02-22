import React from 'react'
import proPic from "../assets/profile.png";
import banner from "../assets/banner.png";

import { useEffect, useState } from "react";




const About = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("projects.json")
    .then(res => res.json())
    .then (data => setProjects(data))
  }, [])



  return (
    <div className="lg:mx-12 mx-4" id="about">
       <div className="mt-20 bg-bgShade" id="home">
      <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5">
      <div className="md:w-1/2 w-full">
          <img src={banner} alt="" className="w-full" />
        </div>
        {/* left side */}
        <div className="md:w-1/2 w-full mt-5">
          <p className="text-xl text-headingcolor font-semibold mb-5">Get in touch with us – we're just a click away!</p>
          <h1 className="md:text-6xl text-4xl font-bold text-headingcolor leading-snug md:leading-[76px]  mb-5">
          Our platform offers a <span className="text-primary">seamless experience</span> tailored to your needs
          </h1>
          <p className="text-2xl text-body leading-9 mb-8">Have a question or need assistance? Don't hesitate to reach out to us! Whether you're a job seeker looking for guidance or an employer seeking support, our team is here to help. 
          </p>
          {/*<button className="btn-primary">Get In Touch</button>*/}
        </div>
        {/* rigth side */}
        
      </div>
      <div className="lg:mx-12 mx-4 my-32" id="portfolio">
      <div className="mb-20 flex flex-col sm:flex-row md:items-center justify-between gap-5">
        <div>
          <p className="text-xl text-headingcolor font-semibold mb-5">
            
          </p>
          <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">
            Our Features
          </h2>
        </div>

        
      </div>

      {/* project card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {
            projects.map(project => <div key={project.id} className="shadow-xl rounded-lg">
              <img src={project.image} alt="" />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2 text-headingcolor">{project.name}</h3>
                <p className="text-body mb-4">{project.description}</p>
                
              </div>
            </div>)
          }
      </div>
        </div>
    </div>
      <div className="flex flex-col sm:flex-row md:gap-24 gap-12 items-center justify-between">
        <div className="sm:w-1/2"> 
          <img src={proPic} alt="" className="w-full sm:w-11/12" />
        </div>
        <div className="sm:w-1/2">
          <p className="text-xl text-headingcolor font-semibold mb-5">
            
          </p>
          <h3 className="md:text-5xl text-4xl text-headingcolor font-bold">About Us</h3>
          <p className="mt-8 md:pr-8 mb-8">
          we specialize in connecting talented individuals with leading companies across diverse industries. Our team's expertise lies in creating innovative solutions that streamline the job recruitment process, providing both job seekers and employers with a platform that is intuitive, efficient, and effective. With a deep understanding of the evolving needs of the job market, coupled with cutting-edge technology and personalized service, we're committed to helping you achieve your hiring or career goals. Trust in our expertise to navigate the ever-changing landscape of employment with confidence and success.
            <br /> <br />
            Join us and experience the difference that our expertise can make in your job recruitment journey.
          </p>
          
        </div>
      </div>

      <div className="lg:px-12 px-4">
      <div className="mb-20 text-center">



      </div>



      {/* Form */}
      {/* <div className="md:w-2/3 mx-auto mb-20">
        <form>
          <div className="flex flex-col sm:flex-row gap-8 items-center mb-8">
            <div className="sm:w-1/2 w-full">
              <label
                htmlFor="firstname"
                className="text-base text-headingcolor w-full"
              >
                First name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                className="block border border-primary rounded-lg py-2 mt-2 w-full"
              />
            </div>
            <div className="sm:w-1/2 w-full">
              <label
                htmlFor="lastname"
                className="text-base text-headingcolor w-full"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                className="block border border-primary rounded-lg py-2 mt-2 w-full"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 items-center mb-8">
            <div className="sm:w-1/2 w-full">
              <label
                htmlFor="firstname"
                className="text-base text-headingcolor w-full"
              >
                Email
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                className="block border border-primary rounded-lg py-2 mt-2 w-full"
              />
            </div>
            <div className="sm:w-1/2 w-full">
              <label
                htmlFor="lastname"
                className="text-base text-headingcolor w-full"
              >
                Phone number
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                className="block border border-primary rounded-lg py-2 mt-2 w-full"
              />
            </div>
          </div>
          <div className="w-full mb-8">
            <label
              htmlFor="firstname"
              className="text-base text-headingcolor w-full"
            >
              Choose a topic
            </label>
            <select name="topic" id="topic" className="block border border-primary rounded-lg py-2 px-2 mt-2 w-full">
                <option value="1">Select one...</option>
                <option value="2">Submission Failure</option>
                <option value="3">Page Not Found (404 Error)</option>
                <option value="4">Slow Page Load Times</option>
                <option value="5">Broken Internal Links</option>
            </select>
          </div>
          <div className="w-full mb-8">
            <label
              htmlFor="message"
              className="text-base text-headingcolor w-full"
            >
              Message
            </label>
            <textarea name="message" id="message" cols="30" rows="5" className="block border border-primary rounded-lg py-2 px-2 mt-2 w-full">Type your message...</textarea>
          </div>
          <div className="w-full mb-8">
            <input type="checkbox" name="agree" id="agree"/>
            <label
              htmlFor="message"
              className="text-base text-headingcolor w-full ml-3"
            >
             I accept the terms
            </label>
          </div>
          <div className="w-36 mx-auto border rounded-lg">
          <input type="submit" value="Submit" className="btn-primary py-3 bg-primary px-8 text-white font-medium rounded-b-md cursor-pointer inline-block w-full "/>
          </div>
        </form>
      </div> */}
      
    </div>



    </div>
    
  )
}

export default About