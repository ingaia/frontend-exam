import React from 'react';
import ReactPlayer from 'react-player'
import {CardVideoStyled, TitleVideoStyled} from "./styled";

const CardVideo = ({text, src}) => {
  return (
    <CardVideoStyled>
      <TitleVideoStyled>
        <p>{text}</p>
      </TitleVideoStyled>
      <ReactPlayer url='https://www.youtube.com/embed/cCXgQ7-Y9ps' width='100%' height='100%'  controls={false} />
    </CardVideoStyled>
  )
};

export default CardVideo