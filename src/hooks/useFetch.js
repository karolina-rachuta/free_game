import {
    useState,
    useEffect
} from "react";
import axios from "axios";

const localCache = {};

function useFetch({
    platform,
    sortBy,
    genre,
    tags
}) {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!localCache[`${platform}${sortBy}${genre}${tags}`]) {
            getData();
        } else {
            setGames(localCache[`${platform}${sortBy}${genre}${tags}`])
        }
    }, [platform,
        sortBy,
        genre,
        tags
    ])

    async function getData() {
        setLoading(true);
        await axios.get('/games', {
                baseURL: `https://${process.env.REACT_APP_API_HOST}/api`,
                headers: {
                    'x-rapidapi-key': process.env.REACT_APP_API_KEY,
                    'x-rapidapi-host': process.env.REACT_APP_API_HOST
                },
                params: {
                    platform,
                    category: genre,
                    'sort-by': sortBy,
                    tags
                }
            })
            .then(response => {
                if (response.data.status !== 0) {
                    localCache[`${platform}${sortBy}${genre}${tags}`] = response.data;
                    setGames(localCache[`${platform}${sortBy}${genre}${tags}`]);
                } else {
                    setGames([]);
                }
            })
            .catch(error => {
                setGames([]);
            })
            .finally(() => {
                setLoading(false);
            })

    }
    return {
        games,
        loading
    };
}

export default useFetch;