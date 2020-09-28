import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Item = styled(Grid)`
  &:nth-child(1) {
    margin-top: 20px;
  }

  @media (min-width: 576px) {
    &:nth-child(1) {
      margin-top: 40px;
    }
  }

  @media (min-width: 960px) {
    &:nth-child(1), &:nth-child(2) {
      margin-top: 58px;
    }
  }
`
export const Block = styled.div<{ paddingTop?: boolean }>`
  border: 1px solid var(--hillary);
  background: var(--coldGray);
  position: relative;
  cursor: pointer;


`

export const Image = styled(LazyLoadImage)`
  width: 100%;
  height: auto;
`

export const Title = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  text-align: center;
  padding: 15px 0;
`
