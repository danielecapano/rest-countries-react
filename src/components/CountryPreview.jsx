/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import './CountryPreview.css'












function CountryPreview({country}) {

const {name, flags, population, region, capital} = country






  return (
    <Link to={`/details/${name.common}`}>
      <div className="card">
          <figure className='card__flag'>
            <img src={flags.svg} alt={name.common} className='card__image' />
          </figure>
          <div className="card__body">
              <h3 className='name'>{country.translations.ita.common || name.common}</h3>
  
              <ul className="card__list">
                  <li className="card__item"><span>Popolazione: </span>{population.toLocaleString()}</li>
                  <li className="card__item"><span>Continente: </span>{region}</li>
                  <li className="card__item"><span>Capitale: </span>{capital}</li>
              </ul>
  
              
          </div>
      </div>
    </Link>
  )
}

export default CountryPreview