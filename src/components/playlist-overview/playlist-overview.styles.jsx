import styled, { css } from 'styled-components';

export const OverviewContainer = styled.div`
  width: 80%;
  background-image: linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,1));
  height: 100%;
  border-left: 1px solid #3a3a3a;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  padding: 50px;
`;