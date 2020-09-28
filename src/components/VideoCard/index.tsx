import React from 'react';
import Grid from '@material-ui/core/Grid';

import * as S from '../../styles/VideoCard';

export interface Props {
  title: string,
  id: string,
  videoId: string,
  cover: string,
  index: number
};

const Component = ({ title, id, videoId, cover, index }: Props) => {
  const paddingTop = index === 0 || index === 1;

  return (
    <Grid item xs={12} md={6} key={id}>
      <S.Block paddingTop={paddingTop}>
        <S.Image src={cover} alt={title} />
        <S.Title>{title}</S.Title>
      </S.Block>
    </Grid>
  )
};

export default Component;
