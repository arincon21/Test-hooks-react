import axios from 'axios'

export default async name => {
    try {
        const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        return {
            success: true,
            response: data
        }
    } catch (error) {
        return{
            success: false,
            response: error
        }
    }
}