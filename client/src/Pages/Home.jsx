import Banner from '../components/Banner'
import React, { useEffect, useState } from "react";
import Card from '../components/Card';
import Jobs from './Jobs';


const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [jobs,setJobs] = useState([]);

    useEffect(() => {
        fetch("jobs.json").then(res => res.json()).then(data => {
           //console.log(data) 
           setJobs(data)
        })
    }, [])

   // console.log(jobs)

    const [query, setQuery] = useState("");
    const haddleInputChange = (event) => {
        setQuery(event.target.value)
    }

    //filter jobs by title
    const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);

    //radio button filter
    const haddleChange = (event) =>{
        setSelectedCategory(event.target.value)
    }

    //button based filtering
    const haddleClick = (event) => {
        setSelectedCategory(event.target.value)
    }

    // main function
    const filteredData = (jobs, selected, query) =>
    {
        let filteredJobs = jobs;

        //filtering input items
        if(query){
            filteredJobs = filteredItems;
        }

        //category filtering
        if(selected){
            filteredJobs = filteredJobs.filter(({jobLocation, maxPrice, experienceLevel, salaryType, employmentType, postingDate}) => (
                jobLocation.toLowerCase() === selected.toLowerCase() || 
                parseInt(maxPrice) === parseInt(selected) ||    
                salaryType.toLowerCase() === selected.toLowerCase() ||
                employmentType.toLowerCase() === selected.toLowerCase()
            ))
                console.log(filteredJobs);
        }
        return filteredJobs.map((data, i) => <Card key={i} data={data}/>)

    }

    const result = filteredData(jobs, selectedCategory, query);


    return (
        <div>
            <Banner query={query} haddleInputChange={haddleInputChange}/>

            {/* main content*/}

            <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:24 px-4 py-12'>
                {/* left side */}
                <div className='bg-white p-4 rounded'>Left</div>

                {/* job side */}
                <div className='col-span-2 bg-white p-4 rounded-sm'><Jobs result={result}/></div>
                
                {/* right side */}
                <div className='bg-white p-4 rounded'>Right</div>
            </div>
        </div>
    )
}

export default Home