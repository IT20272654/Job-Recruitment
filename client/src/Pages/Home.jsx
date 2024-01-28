import Banner from '../components/Banner'
import React, { useState } from "react";


const Home = () => {
    const [query, setQuery] = useState("");
    const haddleInputChange = (event) => {
        setQuery(event.target.value)
    }
    console.log(query)
    return (
        <div>
            <Banner query={query} haddleInputChange={haddleInputChange}/>
        </div>
    )
}

export default Home