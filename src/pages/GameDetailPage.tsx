import React from "react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../Components/ExpandableText";
import DefinationItem from "../Components/DefinationItem";
import CriticScore from "../Components/CriticScore";
import GameAttributes from "../Components/GameAttributes";
import GameTrailer from "../Components/GameTrailer";
import GameScreenshots from "../Components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game}/>
      <GameTrailer gameId={game.id}/>
      <GameScreenshots gameId={game.id}/>
    </>
  );
};

export default GameDetailPage;
