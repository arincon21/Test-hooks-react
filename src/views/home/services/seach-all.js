import axios from 'axios'

export default async () => {
    try {
        const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=964`)        
        return {
            success: true,
            response: data
        }
    } catch (error) {
        return {
            success: false,
            response: error
        }
    }
}