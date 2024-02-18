import Banner from '../components/Banner'
import React, { useEffect, useState } from "react";
import Card from '../components/Card';
import Jobs from './Jobs';
import Sidebar from '../sidebar/Sidebar';
import SideBarRight from '../sidebar/SideBarRight';
import banner2 from "../assets/coverImage1.png";
import banner1 from "../assets/coverImage2.png";


const Search = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [jobs,setJobs] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage =10;

    useEffect(() => {
        setIsLoading(true);
        fetch("http://localhost:5000/all-jobs")
            .then(res => res
            .json())
            .then(data => {
           //console.log(data) 
           setJobs(data)
           setIsLoading(false)
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

    //calculate the index range
    const calculatePageRange = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return {startIndex, endIndex};
    }

    //function for the next page
    const nextPage = () => {
        if(currentPage < Math.ceil(filteredItems.length / itemsPerPage)){
            setCurrentPage(currentPage+1);
        }
    }

    //function for the previous page
    const prevPage = () => {
        if(currentPage > 1){
            setCurrentPage(currentPage-1);
        }
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
                experienceLevel.toLowerCase() === selected.toLowerCase() ||
                employmentType.toLowerCase() === selected.toLowerCase()
            ))
                console.log(filteredJobs);
        }
        //slice the data based on current page
        const {startIndex, endIndex} = calculatePageRange();
        filteredJobs = filteredJobs.slice(startIndex, endIndex)
        return filteredJobs.map((data, i) => <Card key={i} data={data}/>)

    }

    const result = filteredData(jobs, selectedCategory, query);


    return (
            <div>
                
           


<table align='center'>         
<section id="hero">
<div class="search_box">
   <div class="search">
     <div class= "select_area">
       <i class="fas fa-map-marker-alt map_icon"></i>
       <div class="text">Search</div>
     </div>
     
     <div class="line"></div>
     
     <div class = "text_and-icon">
       <input type="text" class="search_text" id="search_text" placeholder="position here.."onChange={haddleInputChange}
                value={query}/> 
            <i class="fas fa-search search_icon"></i>
              </div>
        </div> </div> 
        </section>
        </table><br/>




{/* <table align='center'>
        <ul class="hList">
  <li>
    <a href="#click" class="menu">
      <h2 class="menu-title">animals</h2>
      <ul class="menu-dropdown">
        <li>cat</li>
        <li>dog</li>
        <li>horse</li>
        <li>cow</li>
        <li>pig</li>
      </ul>
    </a>
  </li>
  <li>
    <a href="#click" class="menu">
      <h2 class="menu-title menu-title_2nd">names</h2>
      <ul class="menu-dropdown">
        <li>Kevin</li>
        <li>Jim</li>
        <li>Andy</li>
      </ul>
    </a>
  </li>
  <li>
    <a href="#click" class="menu">
      <h2 class="menu-title menu-title_3rd">things</h2>
      <ul class="menu-dropdown">
        <li>bench</li>
        <li>pizza</li>
        <li>Honda CB125</li>
        <li>space</li>
        <li>black matter</li>
        <li>apple</li>
        <li>philodendron</li>
        <li>liver</li>
        <li>brass</li>
      </ul>
    </a>
  </li>
  <li>
    <a href="#click" class="menu">
      <h2 class="menu-title menu-title_4th">Movies</h2>
      <ul class="menu-dropdown">
        <li>Godzilla</li>
        <li>Man on Wire</li>
        <li>Spirited Away</li>
        <li>Interstellar</li>
      </ul>
    </a>
  </li>
</ul>  
</table> */}




            <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:24 px-4 py-12'>
                {/* left side */}
                <div className='bg-white p-4 rounded'>
                    <Sidebar haddleChange={haddleChange} haddleClick={haddleChange}/>
                    <img src={banner1} alt="" className="w-full" />
                </div>

               



                {/* job side */}
                <div className='col-span-2 bg-white p-4 rounded-sm'>
                <div className='flex justify-start md:flex-row flex-col md:gap-0 gap-4'>
                <div className='flex md:rounded-s-md rounded shadow-sm ring-2 ring-inset ring-gray-400 focus-within:ring-2 focus-within:ring-inset  md:w-1/7 w-full'>
                {/* <input type="text" name="title" id="title" placeholder='What position are you looking for?' className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-black-400 focus:right-0 sm:text-sm sm:leading-6'onChange={haddleInputChange}
                value={query}/> */}
                 </div></div>
                  {
                    isLoading ? (<p className='font-medium'>Loading...</p>) : result.length > 0 ? (<Jobs result={result}/>) :
                    <>
                    {/* <h3>{result.length} Jobs</h3> */}
                    <p >No Jobs Found</p>
                    </>
                  }

                {/* Pages numbers */}

                  {
                    result.length > 0 ? (
                        <div className='flex justify-center mt-4 space-x-8'>
                            <button onClick={prevPage} disabled = {currentPage ==1} className='hover:underline'>Previous</button>
                            <span>Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}</span>
                            <button onClick={nextPage} disabled = {currentPage == Math.ceil(filteredItems.length / itemsPerPage)} className='hover:underline'>Next</button>
                        </div>
                    ) : ""
                  }     
                </div>
                
                {/* right side */}
                <div className='bg-white p-4 rounded'>
                    <SideBarRight haddleChange={haddleChange} haddleClick={haddleChange}/>
                    <br/><br/>
                    <img src={banner2} alt="" className="w-full" />
                </div>
                </div>

                <footer class="sticky-footer">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Available Jobs</a></li>
                  <li><a href="#">Post A Job</a></li>
                  <li><a href="#">My Jobs</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
                </footer>
                <br/><br/>
                </div>
    )
}
export default Search