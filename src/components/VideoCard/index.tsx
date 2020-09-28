import React from 'react';

import * as S from '../../styles/VideoCard';

export interface Props {
  title: string,
  cover: string,
  onClick: () => void;
};

const Component = ({ title, onClick, cover }: Props) => {
  return (
    <S.Item item xs={12} md={6}>
      <S.Block onClick={onClick}>
        <S.Image src={cover} alt={title} />
        <S.Title>{title}</S.Title>
      </S.Block>
    </S.Item>
  )
};

export default Component;
