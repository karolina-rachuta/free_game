import { useState } from "react";
import { PLATFORMS, GENRES, TAGS, SORT_BY } from "./constant";

function Filters({ setFilter }) {
  const [platform, setPlatfrom] = useState(PLATFORMS[0].value);
  const [genre, setGenre] = useState(GENRES[0].value);
  const [tags, setTags] = useState(TAGS[0].value);
  const [sortBy, setSortBy] = useState(SORT_BY[0].value);

  const handlePlatfrom = (e) => {
    setPlatfrom(e.target.value);
    setFilter((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleGenre = (e) => {
    setGenre(e.target.value);
    setFilter((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleTag = (e) => {
    setTags(e.target.value);
    setFilter((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
    setFilter((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="filter_box">
      <div>
        <label htmlFor="platform">Platform</label>
        <select
          name="platform"
          id="platform"
          value={platform}
          onChange={handlePlatfrom}
        >
          {PLATFORMS.map(({ value, display }) => (
            <option key={value} value={value}>
              {display}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="genre">Genres</label>
        <select name="genre" id="genre" value={genre} onChange={handleGenre}>
          {GENRES.map(({ value, display }) => (
            <option key={value} value={value}>
              {display}
            </option>
          ))}
        </select>

        <label htmlFor="tags">Tags</label>
        <select name="tags" id="tags" value={tags} onChange={handleTag}>
          {TAGS.map(({ value, display }) => (
            <option key={value} value={value}>
              {display}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="sortBy">Sort by</label>
        <select
          name="sortBy"
          id="sortBy"
          value={sortBy}
          onChange={handleSortBy}
        >
          {SORT_BY.map(({ value, display }) => (
            <option key={value} value={value}>
              {display}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Filters;
