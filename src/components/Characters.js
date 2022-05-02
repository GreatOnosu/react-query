import React, { useState } from "react";
import { useQuery } from "react-query";
import Character from "./Character";

const Characters = () => {
  // const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  const fetchCharacters = async ({ queryKey }) => {
    // console.log(queryKey);
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return response.json();
  };
  const { data, isLoading, isError, isPreviousData } = useQuery(
    ["charcters", page],
    fetchCharacters,
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  // const fetchCharacters = async () => {
  //   const response = await fetch("https://rickandmortyapi.com/api/character");
  //   const data = await response.json();
  //   console.log(data);
  //   setCharacters(data.results);
  // };

  // useEffect(() => {
  //   fetchCharacters();
  // }, []);

  return (
    <div className="characters">
      {data.results.map((character) => (
        <Character key={character.id} character={character} />
      ))}
      <div>
        <button onClick={() => setPage(page - 1)} disabled={!data.info.prev}>
          Previous
        </button>
        <button
          onClick={() => setPage(page + 1)}
          disabled={isPreviousData && !data.info.next}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Characters;
