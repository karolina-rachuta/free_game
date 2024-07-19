import {
    useState,
    useEffect
} from "react";
import axios from "axios";

let getCache = {};

function useFetch() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        await axios.get('/games', {
            baseURL: `https://${process.env.REACT_APP_API_HOST}/api`,
            headers: {
                'x-rapidapi-key': process.env.REACT_APP_API_KEY,
                'x-rapidapi-host': process.env.REACT_APP_API_HOST
            }
        }).then(response => {
            if (response.data.status !== 0) {
                setGames(response.data)
                // getCache[games] = response.data;
            } else {
                setGames([]);
            }
        }).catch(error => {
            setGames([]);
        })

    }
    return {
        games
    };
}

export default useFetch;