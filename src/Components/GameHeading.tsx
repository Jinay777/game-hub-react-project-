import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";

interface props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: props) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  const platform=usePlatform(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
