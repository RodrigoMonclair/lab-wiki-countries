import {useParams} from 'react-router-dom'


function CountryDetails({allCountries}){
    const { id } = useParams()
    const countrySelected = allCountries.find((country)=>{
        return country.id === id
    })


    return(
        <div>

        </div>
    )
}

export default CountryDetails