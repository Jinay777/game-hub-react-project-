import { Heading } from '@chakra-ui/react'
import React from 'react'
import { GameQuery } from '../App'

interface props{
    gameQuery:GameQuery;
}

const GameHeading = ({gameQuery}:props) => {
    const heading=`${gameQuery.platform?.name||""} ${gameQuery.genre?.name||""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">{heading}</Heading>
  )
}

export default GameHeading