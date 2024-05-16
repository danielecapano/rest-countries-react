
import { useEffect, useState } from 'react';
import CountryPreview from '../components/CountryPreview';
import './HomePage.css';




function HomePage() {

  const [data, setData] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const result = await response.json();
      const sortedResults = result.sort((a, b) => a.name.common.localeCompare(b.name.common));
      setData(sortedResults);
      setCountries(sortedResults);
      console.log(sortedResults);
      
    }

    fetchData();
    
    

  }, [setData])


  
  const onFilterHandler = (e) => {
    const text = e.target.value.toLowerCase();
    const filteredCountries = data.filter(country => 
      country.translations.ita.common.toLowerCase().includes(text) ||
      country.name.common.toLowerCase().includes(text) ||
      country.region.toLowerCase().includes(text)
    );
    setCountries(filteredCountries);
  };

  






  return (
    <section>
      <div className='container'>
        <div className='search-group'>
          <input className='search' 
          type="text" 
          placeholder="Cerca per Stato..."
          
          onChange={onFilterHandler}
          />
          
          <select className="search-by-zone"
          onChange={onFilterHandler}
          >
            <option className='option' value="">Filta per Contintente</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europa</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctic">Antartide</option>
          </select>
        </div >

        <div className="countries">
          {countries.map(country => (<CountryPreview country={country} key={country.name.common}/>))}

        </div>
      </div>
    </section>
  )
}

export default HomePage