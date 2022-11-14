import {Link, useParams} from 'react-router-dom'


function CountryDetails({allCountries}){
    const { id } = useParams()
    const countrySelected = allCountries.find((country)=>{
        return country.id === id  
    })


    return(
        
        <div className="col-7">
            <h1>France</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style="width: 30%">Capital</td>
                  <td>Paris</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    551695 km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      <li><Link href="/AND">Andorra</Link></li>
                      <li><Link href="/BEL">Belgium</Link></li>
                      <li><Link href="/DEU">Germany</Link></li>
                      <li><Link href="/ITA">Italy</Link></li>
                      <li><Link href="/LUX">Luxembourg</Link></li>
                      <li><Link href="/MCO">Monaco</Link></li>
                      <li><Link href="/ESP">Spain</Link></li>
                      <li><Link href="/CHE">Switzerland</Link></li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
    )
}

export default CountryDetails