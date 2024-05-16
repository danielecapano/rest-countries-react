/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useParams } from "react-router-dom"
import "./Details.css"
import Country from "../components/Country"
import { useState, useEffect } from "react"




function Details() {
const {countryName} = useParams()

const [country, setCountry] = useState(null)


useEffect(() => {
  const fetchData = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    const result = await response.json();
    setCountry(result[0]);
  }

  fetchData();
  
}, [countryName])

  return (
    <section>
      <div className="container">
        <Link to="/" className="btn">Back</Link>
        
        {country && <Country country={country} />}
      </div>
    </section>
  )
}

export default Details