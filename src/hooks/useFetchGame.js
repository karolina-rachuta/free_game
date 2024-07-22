import {
    useState,
    useEffect
} from "react";
import axios from "axios";

function useFetchGame(id) {
    const [game, setGame] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData()
    }, []);

    function getData() {
        axios
            .get('/game', {
                baseURL: `https://${process.env.REACT_APP_API_HOST}/api`,
                headers: {
                    'x-rapidapi-key': process.env.REACT_APP_API_KEY,
                    'x-rapidapi-host': process.env.REACT_APP_API_HOST
                },
                params: {
                    id
                }
            })
            .then(response => {
                if (response.data.status !== 0) {
                    setGame(response.data);
                } else {
                    setGame({});
                }
            })
            .catch(error => {
                setGame({});
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return {
        game,
        loading
    }
}

export default useFetchGame;