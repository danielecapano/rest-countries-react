/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./Country.css"
import { Link } from "react-router-dom";


function Country({country}) {
    // console.log(country);
    const {name, borders, currencies, flags, languages, population, region, subregion, capital, tld} = country
    const setTld = (array) => array.join(', ');

    const [bordersName, setBordersName] = useState([]);
    
    const setNativeName = (obj) => {
        if(obj) {
            const nestedObj = Object.values(obj)[0];
            return nestedObj.common
        } else {
            return 'not available'
        }
    }
    const setCurrency = (obj) => {
        if(obj) {
            const nestedObj = Object.values(obj)[0];
            return nestedObj.name

        } else {
            return 'not available'
        }
    }

    const setLanguages = (obj) => {
        if(obj) {
            const value = []
            for (let key in obj) {
                value.push(obj[key]);
            }
            return value.join(', ');
        } else {
            return 'not available'
        }
    }
   

    useEffect(() => {
        const fetchData = async () => {
            if(country && borders){
                const code = borders.join(',');
                const response = await fetch(`https://restcountries.com/v3.1/alpha?codes=${code}`);
                const result = await response.json();

                setBordersName(result.map(border => {
                    return {
                        name: border.name.common,
                        nameTranslated: border.translations.ita.common
                    }
                }));
                // console.log(result);
            } else {
                setBordersName([]);
            }
        }
        fetchData()
        
    }, [country]);

 
   
        
  return (
    country && 
    <div className="country">
        <img src={flags.svg} alt="" className="country__flag" />
        <div className="country__content">
            <h3 className="name">{name.common}</h3>
            <div className="country__details">
                <ul className="country__list">
                    <li className="list-item"><span>Nome Nativo: </span>{setNativeName(name.nativeName)}</li>
                    <li className="list-item"><span>Popolazione: </span>{population.toLocaleString()}</li>
                    <li className="list-item"><span>Continente: </span>{region}</li>
                    <li className="list-item"><span>Sottoregione: </span>{subregion || 'not available'}</li>
                    <li className="list-item"><span>Capitale: </span>{capital || 'not available'}</li>
                </ul>
                <ul className="country__list">
                    <li className="list-item"><span>Dominio di primo livello: </span>{setTld(tld)}</li>
                    <li className="list-item"><span>Moneta: </span>{setCurrency(currencies)}</li>
                    <li className="list-item"><span>Lingua: </span>{setLanguages(languages)}</li>
                </ul>
            </div>
            <div className="country__border">
            <span>Paesi Confinanti: </span>
            <ul className="border__list">
                {bordersName.length === 0 && <li className="no-border__item">Non ci sono paesi confinanti</li>}
                {
                    bordersName.map(border => (
                        <li key={border.name} className="border__item">
                        {/* Aggiungi Link per ciascun paese confinante */}
                        <Link to={`/details/${border.name}`} className="border-link">
                          {border.nameTranslated}
                        </Link>
                      </li>
                    ))
                }
                
            </ul>
            </div>

        </div>
    </div>
  )
  
}

export default Country