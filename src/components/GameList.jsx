import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import GameCard from '../components/GameCard';
import Filters from '../filters/Filters';

function GameList() {
    const [filter, setFilter] = useState({
        platform: 'browser',
        sortBy: 'relevance',
    });

    const { games, loading } = useFetch(filter);

    return (
        <>
            <Filters setFilter={setFilter} />
            <div className={'list_container'}>
                {loading
                    ? 'loading...'
                    : games.map(
                          ({
                              id,
                              title,
                              thumbnail,
                              short_description,
                              platform,
                              genre,
                          }) => (
                              <GameCard
                                  key={id}
                                  id={id}
                                  title={title}
                                  thumbnail={thumbnail}
                                  short_description={short_description}
                                  platform={platform}
                                  genre={genre}
                              />
                          )
                      )}
            </div>
        </>
    );
}

export default GameList;
