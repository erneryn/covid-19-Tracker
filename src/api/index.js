import axios from 'axios';


const url = 'https://indonesia-covid-19.mathdro.id/api'

export const fetchData = async (province) => {

    let changeUrl = url

    if(province){
        changeUrl = `https://indonesia-covid-19.mathdro.id/api/provinsi`
    }

    try {
        const data = await axios.get(changeUrl)
        return data
    } catch (error) {
        return error
    }
}
 
export const dailyData = async () => {

    try{
        const { data } = await axios.get(`${url}/harian`)
        return data 
    } catch (error){
        return error
    }

}

export const province = async () =>{
    try {
        const { data } = await axios.get('https://indonesia-covid-19.mathdro.id/api/provinsi')
        return data
    } catch (error) {
        return error
    }
}
